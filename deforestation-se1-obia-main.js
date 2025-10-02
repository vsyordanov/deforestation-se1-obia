
/* SAR OBIA - SNIC segmentation RF classification, based on Noel Gorelick's segmenation

version 2 - one iteration of SNIC segmentation - very good results with segmentation 256 seeds (100 seeds not so), 50/100 RF trees and 100 points sample (ACC = 1)
*/

Map.centerObject(geometry2, 12)

// // FIRST TRIALS WERE DONE ON 2019 WHOLE YEAR 1-12
var beforeStart = '2015-05-01'  
var beforeEnd = '2015-08-30'

var afterStart = '2019-05-01'
var afterEnd = '2019-08-30'
 
var collection = ee.ImageCollection('COPERNICUS/S1_GRD')
            .filter(ee.Filter.eq('instrumentMode', 'IW'))
            .filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))
            .filterMetadata('resolution_meters', 'equals' , 10)
            //.filter(ee.Filter.eq('relativeOrbitNumber_start',141))
            .filterBounds(roi)
            .map(function(image) {
              var edge = image.lt(-30.0); //remove low edge values as suggested by GEE
              var maskedImage = image.mask().and(edge.not());
              return image.updateMask(maskedImage);
        });

//////////
function erode(img, distance) {
  var d = (img.not().unmask(1)
       .fastDistanceTransform(30).sqrt()
       .multiply(ee.Image.pixelArea().sqrt()))
  return img.updateMask(d.gt(distance))
}

function dilate(img, distance) {
  var d = (img.fastDistanceTransform(30).sqrt()
       .multiply(ee.Image.pixelArea().sqrt()))
  return d.lt(distance)
}

function expandSeeds(seeds) {
  seeds = seeds.unmask(0).focal_max()
  return seeds.updateMask(seeds)
}


// ///////////////////// 2019 
// /////////////////////  DRY

var second2019VVCol = collection.select('VV').filterDate(afterStart, afterEnd);
var second2019VHCol = collection.select('VH').filterDate(afterStart, afterEnd);
print(second2019VVCol)

var second2019VVCol_filtered_Q24 = second2019VVCol.reduce(ee.Reducer.intervalMean(1,24)).clip(roi)
var second2019VHCol_filtered_Q24 = second2019VHCol.reduce(ee.Reducer.intervalMean(1,24)).clip(roi)
var VH_VV_2019_diff = second2019VVCol_filtered_Q24.subtract(second2019VHCol_filtered_Q24).rename('VV_diff')

var composite_dry2019 = ee.Image([second2019VVCol_filtered_Q24,(second2019VHCol_filtered_Q24),(VH_VV_2019_diff)])

Map.addLayer(composite_dry2019,{min:-30, max: 0},'Composite Dry 2019',0)
print(composite_dry2019)

var bands = ['VV_mean','VH_mean','VV_diff'];
var FullImage = composite_dry2019.select(bands).float().divide(255)//.clip(geometry2);

//////////////////

// Apply a softening.
var kernel = ee.Kernel.gaussian(3)
FullImage = FullImage.convolve(kernel)
// Map.addLayer(FullImage, {min: -0.067, max: 0.0025}, "VV comb blur", false)

var gradient = FullImage.spectralErosion().spectralGradient('emd')
// Map.addLayer(gradient, {min:0, max: 0.077}, "Erosion and Gradient", false)

// //////////////// segmentation

var seeds = ee.Algorithms.Image.Segmentation.seedGrid(256)//.clip(roi)

// var snic = ee.Algorithms.Image.Segmentation.SNIC({
//   image: FullImage, 
//   compactness: 0,
//   connectivity: 8,
//   neighborhoodSize: 256,
//   // size: 32,
//   seeds: seeds
// })//.reproject({
//   // crs: 'EPSG:4326',
//   // scale: 10
// // })
// .select(['VV_mean_mean','VH_mean_mean','VV_diff_mean','clusters'],['VV_mean','VH_mean','VV_diff','clusters'])

var clusters_snic = snic.select("clusters")

Map.addLayer(clusters_snic, {}, "clusters",0)//.randomVisualizer()
// // Map.addLayer(expandSeeds(seeds), {} , 'seeds',0)
// // print(clusters_snic.projection().nominalScale())

// // // /// Convert the segments into features - TOO SLOW AND HEAVY!!!

// // var vectors = clusters_snic.reduceToVectors({
// //   geometryType: 'polygon',
// //   reducer: ee.Reducer.countEvery(),
// //   scale: 10,
// //   maxPixels: 1e13,
// //   geometry: roi,
// // });
// // var empty = ee.Image().byte();
// // var outline = empty.paint({
// //   featureCollection: vectors,
// //   color: 1,
// //   width: 1
// // });
// // Map.addLayer(vectors, {palette: 'FF0000'}, 'segments');


// Compute per-cluster stdDev.
var stdDev = FullImage.addBands(clusters_snic).reduceConnectedComponents(ee.Reducer.stdDev(), "clusters", 768)
// Map.addLayer(stdDev, {min:0, max:0.006}, "StdDev", 0)

// Compute per-cluster Variance.
var variance = FullImage.addBands(clusters_snic).reduceConnectedComponents(ee.Reducer.variance(), "clusters", 768)
// Map.addLayer(variance, {min:0, max:0.006}, "variance", 0)

// Display outliers as transparent
var outliers = stdDev.reduce('sum').gt(0.25)
// Map.addLayer(outliers.updateMask(outliers.not()), {}, "Outliers", 0)

// Within each outlier, find most distant member.
var distance = FullImage.select(bands).spectralDistance(snic.select(bands), "sam").updateMask(outliers)
var maxDistance = distance.addBands(clusters_snic).reduceConnectedComponents(ee.Reducer.max(), "clusters", 768)
// Map.addLayer(distance, {min:0, max:0.3}, "max distance",0)
// Map.addLayer(expandSeeds(expandSeeds(distance.eq(maxDistance))), {palette: ["red"]}, "second seeds",0)

// Area, Perimeter, Width and Height (using snic1 for speed)
var area = ee.Image.pixelArea().addBands(clusters_snic).reduceConnectedComponents(ee.Reducer.sum(), "clusters", 768)
// Map.addLayer(area, {min:50000, max: 500000}, "Cluster Area" ,0)
var minMax = clusters_snic.reduceNeighborhood(ee.Reducer.minMax(), ee.Kernel.square(1))

var perimeterPixels = minMax.select(0).neq(minMax.select(1)).rename('perimeter')
// Map.addLayer(perimeterPixels, {min: 0, max: 1}, 'perimeterPixels',0);

var perimeter = perimeterPixels.addBands(clusters_snic)
    .reduceConnectedComponents(ee.Reducer.sum(), 'clusters', 768)
// Map.addLayer(perimeter, {min: 100, max: 400}, 'Perimeter size',0);

var sizes = ee.Image.pixelLonLat().addBands(clusters_snic).reduceConnectedComponents(ee.Reducer.minMax(), "clusters", 768)
var width = sizes.select("longitude_max").subtract(sizes.select("longitude_min"))
var height = sizes.select("latitude_max").subtract(sizes.select("latitude_min"))
// Map.addLayer(width, {min:0, max:0.02}, "Cluster width",0)
// Map.addLayer(height, {min:0, max:0.02}, "Cluster height",0)

var objectPropertiesImage = ee.Image.cat([
  snic.select(bands),
  stdDev,
  variance,
  area,
  perimeter,
  width,
  height
]).float().reproject({
  crs: 'EPSG:4326',
  scale: 10,
})

var points = Forest2019b.merge(Non_Forest2019b)
print(points)


// /////////////////// STRATIFIED SAMPLING ///////////////
// var StrPo = AmazonRF2019.int().stratifiedSample({
//   numPoints: 100,
//   classBand: 'b1',
//   scale: 10,
//   geometries: true
// })

// //If you don't want or need the geometry, change feat.geometry() to null
// StrPo = StrPo.map(function(feat){
//   return ee.Feature(feat.geometry(), { 
//     forest: feat.get('b1'),
//   })
// })

// print ('Stratified Points: ','\n',StrPo.reduceColumns(ee.Reducer.frequencyHistogram(),['forest']).get('histogram')); 
// // Map.addLayer(AmazonRF2019,{min:0, max:1, palette: ['red','green']})
// Map.addLayer(StrPo, {}, 'Stratified Sample points',0);
// ////////////////////////////////////////////////////////////


// Overlay the points on the imagery to get training.
var sample = objectPropertiesImage.sampleRegions({
  collection: points,
  properties: ['forest'],
  scale: 10
});


var threshold=0.8;
var training = sample.randomColumn('random').filter(ee.Filter.lt('random',threshold));
var test = sample.randomColumn('random').filter(ee.Filter.gt('random', threshold));

// // TRAINING
var classifier = ee.Classifier.smileRandomForest(100).train({ //100 trees
  features:training,
  classProperty:'forest',
  inputProperties: objectPropertiesImage.bandNames() 
})
  
var classified = objectPropertiesImage.classify(classifier)

print('RF TR error matrix: ', classifier.confusionMatrix());
print('RF TR accuracy: ', classifier.confusionMatrix().accuracy());
print("RF TR Cohen's Kappa: ", classifier.confusionMatrix().kappa());
print("RF TR User Acc: ", classifier.confusionMatrix().consumersAccuracy());
print("RF TR Prod Acc: ", classifier.confusionMatrix().producersAccuracy());

// // TESTING
var classifierTS = ee.Classifier.smileRandomForest(100).train({
  features:test,
  classProperty:'forest',
  inputProperties: objectPropertiesImage.bandNames() 
})

print('RF TS error matrix: ', classifierTS.confusionMatrix());
print('RF TS accuracy: ', classifierTS.confusionMatrix().accuracy());
print("RF TS Cohen's Kappa: ", classifierTS.confusionMatrix().kappa());
print("RF TS User Acc: ", classifierTS.confusionMatrix().consumersAccuracy());
print("RF TS Prod Acc: ", classifierTS.confusionMatrix().producersAccuracy());

// Map.addLayer(classified, {min:0, max:1, palette: ['red','green']}, 'Classified objects',0)
// Map.addLayer(classified.reproject({ crs: 'EPSG:4326',   scale: 10 }),  {min:0, max:1, palette: ['red','green']},'Reprojected',0)


////////////////////////////////////////////////////////////////////////////////////////////////
// // AREA

// Compute and print the area of the forest loss 
// var areaLoss = loss.multiply(ee.Image.pixelArea().divide(1000000));
// var statsLoss = areaLoss.reduceRegion({
//   reducer: ee.Reducer.sum(),
//   geometry: roi,
//   scale: 256,
//   maxPixels: 1e13
// }).getNumber('classification');
// print(
//   ' Loss 2015-2019:',
//   statsLoss,
//   "[km²]"
// );


/////////////////////////////////////////////////////////////////////////////////////////////////
// ////   EXPORTS
// ///// IF EXPORTING SNIC FOR CLASSICATION REMOVE .toDouble()

// Export.image.toDrive({
//   image: classified,
//   description: 'classified2019_200pStratified_100tr',
//   region: roi,
//   scale: 10,
//   crs: 'EPSG:4326',
//   folder: 'GEE',
//   maxPixels: 1e13
// });

// Export.image.toDrive({
//   image: classified2015.toDouble(),
//   description: 'classified2015_snic2019_seed256_trees150_TP120',
//   region: roi,
//   scale: 100,
//   crs: 'EPSG:4326',
//   folder: 'GEE',
//   maxPixels: 1e13
// });

// Export.image.toAsset({
//   image: snic,//.toDouble(),
//   description: 'snic2019_OCRS',
//   region: roi,
//   // scale: 10,
//   // crs: 'EPSG:4326',
//   assetId: 'Amazon/',
//   maxPixels: 1e13
// });

// Export.table.toDrive({
//   collection: vectors,
//   description:'vectors_350',
//   fileFormat: 'KML',
//   folder: 'GEE'
// });


// Export.table.toAsset({
//   collection: points,
//   description:'trainingPoints_100_RF2019',
//   assetId: 'Amazon/'
// });
