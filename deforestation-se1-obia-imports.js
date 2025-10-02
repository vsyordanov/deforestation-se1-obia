var roi = ee.FeatureCollection("users/vyordanov/AmazonROI"),
    region2019 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-53.68407133614273, -5.563657152991581],
          [-53.68407133614273, -5.7187707557707155],
          [-53.50211027657242, -5.7187707557707155],
          [-53.50211027657242, -5.563657152991581]]], null, false),
    geometry = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Geometry.Point([-53.57045646555948, -5.679203260428048]),
    region2015 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-53.56582110604641, -6.469081432562367],
          [-53.56582110604641, -6.595968265429789],
          [-53.42368548592922, -6.595968265429789],
          [-53.42368548592922, -6.469081432562367]]], null, false),
    geometry2 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-53.69336601145792, -5.593445879916843],
          [-53.69336601145792, -5.7553833798898015],
          [-53.49423881419229, -5.7553833798898015],
          [-53.49423881419229, -5.593445879916843]]], null, false),
    Non_Forest2019 = 
    /* color: #98ff00 */
    /* shown: false */
    /* locked: true */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.647343518390585, -5.699368481582742]),
            {
              "forest": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.58554542268746, -5.707909057882676]),
            {
              "forest": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.61781776155465, -5.63753093087665]),
            {
              "forest": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67618262971871, -5.62864764591614]),
            {
              "forest": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.44838026558609, -6.307399965482727]),
            {
              "forest": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.05149916207046, -5.945898395016114]),
            {
              "forest": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92927626167984, -6.373938365711077]),
            {
              "forest": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.88807753121109, -6.420339531118587]),
            {
              "forest": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.31129530464859, -7.0640468051477106]),
            {
              "forest": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.700623307578276, -7.154327876607343]),
            {
              "forest": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33851698433609, -5.868036442991217]),
            {
              "forest": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.75795820748062, -6.308082454121188]),
            {
              "forest": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.76585463082046, -6.238464000849082]),
            {
              "forest": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00892714058609, -6.157572132519138]),
            {
              "forest": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.88533094917984, -6.587484924163798]),
            {
              "forest": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.97047499214859, -6.450361563419469]),
            {
              "forest": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84938124214859, -5.882380255602592]),
            {
              "forest": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.62690809761734, -6.4257982143581085]),
            {
              "forest": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55000380074234, -6.545874340676141]),
            {
              "forest": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.15199354683609, -6.414880789357444]),
            {
              "forest": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46235731636734, -5.975264522699415]),
            {
              "forest": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.62715223824234, -6.881386894950928]),
            {
              "forest": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.627495560996245, -6.343911843259185]),
            {
              "forest": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.63813856636734, -6.062670618857307]),
            {
              "forest": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.88008192574234, -6.974088884652728]),
            {
              "forest": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.17396620308609, -7.074949610765612]),
            {
              "forest": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.90696028267593, -5.942142149164538]),
            {
              "forest": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8832710126564, -6.190681273551065]),
            {
              "forest": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.70954969917984, -6.545874340676141]),
            {
              "forest": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33577040230484, -6.417610167550156]),
            {
              "forest": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45686415230484, -6.199214221416965]),
            {
              "forest": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6635444501564, -6.533595144240691]),
            {
              "forest": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.69007948433609, -5.9479472455807265]),
            {
              "forest": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.34126356636734, -6.221057938523306]),
            {
              "forest": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54176405464859, -6.281123470555029]),
            {
              "forest": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33133662955123, -5.886912186418537]),
            {
              "forest": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.008613240879356, -6.010525742271933]),
            {
              "forest": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.993844666037695, -6.148698480474567]),
            {
              "forest": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35415312084361, -6.208610342772152]),
            {
              "forest": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6173824909608, -6.35330535519627]),
            {
              "forest": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.7711910847108, -6.472375252470504]),
            {
              "forest": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.759861433831894, -6.458388543428242]),
            {
              "forest": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.19130395109645, -6.713710618453072]),
            {
              "forest": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.26923821623317, -6.878370312945459]),
            {
              "forest": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.67622644973329, -7.15209963871799]),
            {
              "forest": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71639521194032, -7.155506140070016]),
            {
              "forest": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37997608594661, -7.114071181205595]),
            {
              "forest": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.05193153703666, -7.013048701600479]),
            {
              "forest": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.065321124439, -6.952731324571227]),
            {
              "forest": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0158826478765, -6.913197087195986]),
            {
              "forest": 0,
              "system:index": "49"
            })]),
    Forest2019 = 
    /* color: #0b4a8b */
    /* shown: false */
    /* locked: true */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.56972097743933, -5.570643996658444]),
            {
              "forest": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.63769888271277, -5.653329870572115]),
            {
              "forest": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53332876552527, -5.581578337457159]),
            {
              "forest": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.56422781337683, -5.652646564408253]),
            {
              "forest": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35499647652359, -6.649553236689863]),
            {
              "forest": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40718153511734, -6.466736468340887]),
            {
              "forest": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.06111219917984, -6.368479128491739]),
            {
              "forest": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14350966011734, -5.8905765539042365]),
            {
              "forest": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.25886610542984, -5.7539559165997165]),
            {
              "forest": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.135613236777495, -5.727311042725106]),
            {
              "forest": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.73152235542984, -5.80587566827555]),
            {
              "forest": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45411757027359, -5.786747892990543]),
            {
              "forest": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.49256971871109, -5.8495938560209995]),
            {
              "forest": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.50904921089859, -6.076326547407562]),
            {
              "forest": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93476942574234, -6.780143833053024]),
            {
              "forest": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.961548600547026, -6.6260227620428145]),
            {
              "forest": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98420790230484, -6.556788928473587]),
            {
              "forest": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18264845406265, -6.813553001617452]),
            {
              "forest": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33027723824234, -6.687745230240805]),
            {
              "forest": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.39070204292984, -6.766847702673025]),
            {
              "forest": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37995985542984, -7.213937678430588]),
            {
              "forest": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2845161298439, -7.053143742429008]),
            {
              "forest": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.95149305855484, -6.076326547407562]),
            {
              "forest": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.49806288277359, -5.5927013930956315]),
            {
              "forest": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.17097548042984, -6.129239991125614]),
            {
              "forest": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11329725777359, -6.548603010008058]),
            {
              "forest": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.22041395699234, -6.652281334860074]),
            {
              "forest": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.74501112496109, -6.218327523463153]),
            {
              "forest": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.45936659371109, -5.980727814741736]),
            {
              "forest": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42640760933609, -6.848664210774968]),
            {
              "forest": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.270195756308745, -6.993172319174625]),
            {
              "forest": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.87709120308609, -7.215981304261054]),
            {
              "forest": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.72303846871109, -7.0585953059016635]),
            {
              "forest": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.89881971871109, -6.414880789357444]),
            {
              "forest": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28633192574234, -5.570832922467893]),
            {
              "forest": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.932234279710414, -5.848319974865504]),
            {
              "forest": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93601083000338, -5.916964442710012]),
            {
              "forest": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95729684074557, -5.897157456803548]),
            {
              "forest": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.358616316644394, -6.266629678926592]),
            {
              "forest": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.202747786370956, -6.3130405059986545]),
            {
              "forest": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.032459700433456, -6.297343190175357]),
            {
              "forest": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.06129881176158, -6.632000772251375]),
            {
              "forest": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.96595733709376, -6.801809133782984]),
            {
              "forest": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.96046417303126, -6.758853014780705]),
            {
              "forest": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.938148194027356, -6.7602167598900476]),
            {
              "forest": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8468214567827, -6.745036591262637]),
            {
              "forest": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.84759393297899, -6.760208472394728]),
            {
              "forest": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55552450698933, -7.022820612527532]),
            {
              "forest": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50230948013386, -7.026568814270687]),
            {
              "forest": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4988762525948, -7.06779703530862]),
            {
              "forest": 1,
              "system:index": "49"
            })]),
    snic100REPROJ = ee.Image("users/vyordanov/Amazon/snic2019_seed100"),
    snic = ee.Image("users/vyordanov/Amazon/snic2019_seed256"),
    Forest2015 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.8268515491746, -6.988025607364053]),
            {
              "forest": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.7774130726121, -6.267778884784255]),
            {
              "forest": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.809929552104286, -5.904543054448973]),
            {
              "forest": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.19788426401835, -6.077998296206102]),
            {
              "forest": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11548680308085, -6.072535983279525]),
            {
              "forest": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.828224840190224, -6.8776023727633]),
            {
              "forest": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.594765367533974, -6.723512340211831]),
            {
              "forest": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67029637339335, -6.6075716429392655]),
            {
              "forest": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.0028769397996, -6.698962484577895]),
            {
              "forest": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.001503648783974, -6.267778884784255]),
            {
              "forest": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.144325914408974, -6.462948740830656]),
            {
              "forest": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.59339207651835, -6.3005398265981185]),
            {
              "forest": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.877663316752724, -6.366055495322662]),
            {
              "forest": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.874916734721474, -6.450667519884458]),
            {
              "forest": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.6455771351121, -6.513435065727813]),
            {
              "forest": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.958244981791786, -5.546536384225474]),
            {
              "forest": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8051230335496, -5.546536384225474]),
            {
              "forest": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23658055308085, -5.873124044514512]),
            {
              "forest": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.185524644877724, -5.5164646707232095]),
            {
              "forest": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.02759617808085, -6.435656734579604]),
            {
              "forest": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.91773289683085, -6.03429824433164]),
            {
              "forest": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.336499610804346, -7.186517117955912]),
            {
              "forest": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.930005470179346, -7.147002825665306]),
            {
              "forest": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.484570899866846, -6.971191200784869]),
            {
              "forest": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.26072446431997, -6.664386063870062]),
            {
              "forest": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.20853940572622, -6.997090119289138]),
            {
              "forest": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.31016294088247, -6.86349093245552]),
            {
              "forest": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.48618833150747, -6.931658514353125]),
            {
              "forest": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.876498580668226, -7.21247103368118]),
            {
              "forest": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.59791717837293, -5.94376688876834]),
            {
              "forest": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.796357730130744, -6.192987903013748]),
            {
              "forest": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.79498443911512, -6.251691528556332]),
            {
              "forest": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.71020532793468, -6.2818123008371085]),
            {
              "forest": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.68479944414562, -6.389639654679072]),
            {
              "forest": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.78230310625499, -6.412840051632581]),
            {
              "forest": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.89147974199718, -6.285224903192276]),
            {
              "forest": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.835174810356555, -6.2777171484772465]),
            {
              "forest": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10870386309093, -6.519860152272726]),
            {
              "forest": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.23779321855968, -6.543736746335872]),
            {
              "forest": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.428680669731555, -6.787692050459952]),
            {
              "forest": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.417694341606555, -6.647214150182835]),
            {
              "forest": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.546783697075305, -6.764509179217161]),
            {
              "forest": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.56074636324065, -6.8812422555217605]),
            {
              "forest": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.57653920992034, -6.828748511941579]),
            {
              "forest": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.256562403279716, -6.593479170424133]),
            {
              "forest": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.10344045503753, -6.7639755711837335]),
            {
              "forest": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.87822072847503, -6.776249008370826]),
            {
              "forest": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89607351167815, -6.904419466669273]),
            {
              "forest": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.753937891560966, -6.712150960645123]),
            {
              "forest": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.2723552499594, -6.701921765835791]),
            {
              "forest": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.534211329060966, -6.822612502772064]),
            {
              "forest": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.5747234140219, -6.952133675504395]),
            {
              "forest": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.63926809175628, -7.0891145771691]),
            {
              "forest": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.9482585702719, -6.991664637019277]),
            {
              "forest": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.32042043550628, -6.783067449638145]),
            {
              "forest": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.385895899373466, -6.908509445014367]),
            {
              "forest": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.328217676717216, -6.811703847942964]),
            {
              "forest": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45318715913909, -6.715560644503392]),
            {
              "forest": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.358603101875104, -7.076913637633684]),
            {
              "forest": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.63394795050792, -7.235655685136658]),
            {
              "forest": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.69851585276651, -5.599727210658261]),
            {
              "forest": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67105003245401, -5.550864308761154]),
            {
              "forest": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55294700511026, -5.564874367652499]),
            {
              "forest": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.48565574534464, -5.628086324172166]),
            {
              "forest": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4890889728837, -5.537537358388584]),
            {
              "forest": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53131767161417, -5.651319266186948]),
            {
              "forest": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.59002586253214, -5.729211129702228]),
            {
              "forest": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.64530082591104, -5.696757469318262]),
            {
              "forest": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.48153587229776, -5.721012483929213]),
            {
              "forest": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49801536448526, -5.673867994940519]),
            {
              "forest": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.64907737620401, -5.57922578920911]),
            {
              "forest": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36755271800089, -5.617152853507553]),
            {
              "forest": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.71945854075479, -5.569316511793985]),
            {
              "forest": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.66212364085245, -5.6492693381573655]),
            {
              "forest": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.52548118479776, -5.536170474678736]),
            {
              "forest": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.5769795978837, -5.556331688474322]),
            {
              "forest": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.588309248762606, -5.619544567763803]),
            {
              "forest": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.57354637034464, -5.701540229467971]),
            {
              "forest": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.68581291087198, -5.655077448723116]),
            {
              "forest": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.62607475169229, -5.718962804114723]),
            {
              "forest": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.589339217024325, -5.7076894339431865]),
            {
              "forest": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.299245815938875, -5.9459482626985185]),
            {
              "forest": 1,
              "system:index": "81"
            })]),
    Non_Forest2015 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.333396626317544, -5.8553172473087605]),
            {
              "forest": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.97668428500895, -5.961523396007571]),
            {
              "forest": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95780153354411, -5.977572063958718]),
            {
              "forest": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67603273471598, -6.231214252028805]),
            {
              "forest": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85456056674723, -5.885712725094504]),
            {
              "forest": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03470583041911, -6.1096994709971675]),
            {
              "forest": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.96466798862223, -6.179334946597738]),
            {
              "forest": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98252077182536, -6.183430866716975]),
            {
              "forest": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36267918589335, -5.821210497214061]),
            {
              "forest": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42859715464335, -5.853998561409388]),
            {
              "forest": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4093710804246, -5.949619388981259]),
            {
              "forest": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.506874742533974, -6.278699427858966]),
            {
              "forest": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40113133433085, -6.278699427858966]),
            {
              "forest": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.89576024058085, -5.94005805013535]),
            {
              "forest": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.443703355815224, -6.492968246635816]),
            {
              "forest": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.380531969096474, -6.381068328777369]),
            {
              "forest": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.924599351908974, -6.376973963237741]),
            {
              "forest": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.86829442026835, -6.46840696556625]),
            {
              "forest": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.463173570658974, -6.058879958693772]),
            {
              "forest": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.139076890971474, -6.424739521124706]),
            {
              "forest": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.117104234721474, -6.337393413575881]),
            {
              "forest": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.07178563120585, -6.19815506497413]),
            {
              "forest": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.391518297221474, -6.505248438109274]),
            {
              "forest": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.8822714710496, -6.686687093144423]),
            {
              "forest": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.913613023783974, -6.432927453197672]),
            {
              "forest": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.03821184957116, -5.963088336267688]),
            {
              "forest": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00799944722741, -6.001331085246579]),
            {
              "forest": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.07089863410167, -7.022397273503679]),
            {
              "forest": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.300599842266635, -7.07872490109559]),
            {
              "forest": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.67001512546976, -6.379201706706407]),
            {
              "forest": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.715985726008256, -5.954580697315499]),
            {
              "forest": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.43527090527404, -6.250951284951734]),
            {
              "forest": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.213165050653956, -6.424279163277356]),
            {
              "forest": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.09712195983364, -6.0450145427582695]),
            {
              "forest": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.30149818053677, -5.961020284488338]),
            {
              "forest": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.251373058466456, -6.006091984449455]),
            {
              "forest": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33583045592739, -5.998580292741667]),
            {
              "forest": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.87339280536983, -6.017078595110793]),
            {
              "forest": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.28347754425923, -6.353623677841391]),
            {
              "forest": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.37799048371235, -6.081946654285059]),
            {
              "forest": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.23104834504048, -6.102429682909989]),
            {
              "forest": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.57437109894673, -6.412991478745109]),
            {
              "forest": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.293739275753666, -6.454135648286743]),
            {
              "forest": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.293739275753666, -6.50121171724552]),
            {
              "forest": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.387123064816166, -6.598761096744976]),
            {
              "forest": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.48119349938648, -6.538732964850027]),
            {
              "forest": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55054469567554, -6.541461673194513]),
            {
              "forest": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.58007045251148, -6.240533199524251]),
            {
              "forest": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11589808923023, -6.598761096744976]),
            {
              "forest": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.236061053097416, -6.2971839904060865]),
            {
              "forest": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.829322771847416, -5.908697761719618]),
            {
              "forest": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.3342513607146, -5.8854753603714745]),
            {
              "forest": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.63912196618335, -6.415243419781415]),
            {
              "forest": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.1914290950896, -6.713340002827987]),
            {
              "forest": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98406215173023, -6.370889011133343]),
            {
              "forest": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.82544703942554, -6.466416785081]),
            {
              "forest": 0,
              "system:index": "55"
            })]),
    snic2015 = ee.Image("users/vyordanov/Amazon/snic2015_seed256"),
    geometry3 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-53.44035146779434, -5.783040457552631],
          [-53.44035146779434, -5.9920455456524415],
          [-53.21204183644669, -5.9920455456524415],
          [-53.21204183644669, -5.783040457552631]]], null, false),
    AmazonRF2019 = ee.Image("users/vyordanov/AmazonRF2019"),
    Forest2019b = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.56972097743933, -5.570643996658444]),
            {
              "forest": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.63769888271277, -5.653329870572115]),
            {
              "forest": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.53332876552527, -5.581578337457159]),
            {
              "forest": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.56422781337683, -5.652646564408253]),
            {
              "forest": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35499647652359, -6.649553236689863]),
            {
              "forest": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.40718153511734, -6.466736468340887]),
            {
              "forest": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.06111219917984, -6.368479128491739]),
            {
              "forest": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.14350966011734, -5.8905765539042365]),
            {
              "forest": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.25886610542984, -5.7539559165997165]),
            {
              "forest": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.135613236777495, -5.727311042725106]),
            {
              "forest": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.73152235542984, -5.80587566827555]),
            {
              "forest": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45411757027359, -5.786747892990543]),
            {
              "forest": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.49256971871109, -5.8495938560209995]),
            {
              "forest": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.50904921089859, -6.076326547407562]),
            {
              "forest": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93476942574234, -6.780143833053024]),
            {
              "forest": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.961548600547026, -6.6260227620428145]),
            {
              "forest": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.98420790230484, -6.556788928473587]),
            {
              "forest": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.18264845406265, -6.813553001617452]),
            {
              "forest": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33027723824234, -6.687745230240805]),
            {
              "forest": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.39070204292984, -6.766847702673025]),
            {
              "forest": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37995985542984, -7.213937678430588]),
            {
              "forest": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.2845161298439, -7.053143742429008]),
            {
              "forest": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.95149305855484, -6.076326547407562]),
            {
              "forest": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.49806288277359, -5.5927013930956315]),
            {
              "forest": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.17097548042984, -6.129239991125614]),
            {
              "forest": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.11329725777359, -6.548603010008058]),
            {
              "forest": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.22041395699234, -6.652281334860074]),
            {
              "forest": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.74501112496109, -6.218327523463153]),
            {
              "forest": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.45936659371109, -5.980727814741736]),
            {
              "forest": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.42640760933609, -6.848664210774968]),
            {
              "forest": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.270195756308745, -6.993172319174625]),
            {
              "forest": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.87709120308609, -7.215981304261054]),
            {
              "forest": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.72303846871109, -7.0585953059016635]),
            {
              "forest": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.89881971871109, -6.414880789357444]),
            {
              "forest": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.28633192574234, -5.570832922467893]),
            {
              "forest": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.932234279710414, -5.848319974865504]),
            {
              "forest": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.93601083000338, -5.916964442710012]),
            {
              "forest": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.95729684074557, -5.897157456803548]),
            {
              "forest": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.358616316644394, -6.266629678926592]),
            {
              "forest": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.202747786370956, -6.3130405059986545]),
            {
              "forest": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.032459700433456, -6.297343190175357]),
            {
              "forest": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.06129881176158, -6.632000772251375]),
            {
              "forest": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.96595733709376, -6.801809133782984]),
            {
              "forest": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.96046417303126, -6.758853014780705]),
            {
              "forest": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.938148194027356, -6.7602167598900476]),
            {
              "forest": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8468214567827, -6.745036591262637]),
            {
              "forest": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.84759393297899, -6.760208472394728]),
            {
              "forest": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55552450698933, -7.022820612527532]),
            {
              "forest": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.50230948013386, -7.026568814270687]),
            {
              "forest": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.4988762525948, -7.06779703530862]),
            {
              "forest": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.59450795567111, -5.779149736375522]),
            {
              "forest": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.23058583653049, -5.749773285744802]),
            {
              "forest": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.20449330723361, -5.74430773201931]),
            {
              "forest": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0664775601633, -5.784614954592023]),
            {
              "forest": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.22646596348361, -5.857024091364085]),
            {
              "forest": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.99437978184299, -5.88434586087708]),
            {
              "forest": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.095316671491425, -5.663684748696889]),
            {
              "forest": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.07471730625705, -5.654118560195272]),
            {
              "forest": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.374758934017294, -5.743980850706852]),
            {
              "forest": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.430377220150106, -5.7349284068128865]),
            {
              "forest": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.465396141048544, -5.721776487168907]),
            {
              "forest": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.473178624633775, -5.847976753149247]),
            {
              "forest": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.616000890258775, -6.025547006947637]),
            {
              "forest": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.368808507446275, -6.021449879959826]),
            {
              "forest": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67915726616671, -5.846341101064811]),
            {
              "forest": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.02824428707965, -5.772327919335908]),
            {
              "forest": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-54.05227687985309, -5.760543221305126]),
            {
              "forest": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.943786889618714, -5.731849021984969]),
            {
              "forest": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.852634698456605, -5.722283967973874]),
            {
              "forest": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.908081323212464, -5.826807605956532]),
            {
              "forest": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.34043022044291, -5.715927163555612]),
            {
              "forest": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.30644126780619, -5.727883589026502]),
            {
              "forest": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.36411949046244, -5.696113108890781]),
            {
              "forest": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.560843428450724, -5.713194231220241]),
            {
              "forest": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.72872825511088, -5.714219082374665]),
            {
              "forest": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.49046226389994, -5.664340871483015]),
            {
              "forest": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.743834456282755, -5.707386706712504]),
            {
              "forest": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.85541435130229, -5.548169504049609]),
            {
              "forest": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.43278404124369, -5.679373116193962]),
            {
              "forest": 1,
              "system:index": "78"
            })]),
    Non_Forest2019b = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-53.647343518390585, -5.699368481582742]),
            {
              "forest": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.58554542268746, -5.707909057882676]),
            {
              "forest": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.61781776155465, -5.63753093087665]),
            {
              "forest": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.67618262971871, -5.62864764591614]),
            {
              "forest": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.44838026558609, -6.307399965482727]),
            {
              "forest": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.05149916207046, -5.945898395016114]),
            {
              "forest": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.92927626167984, -6.373938365711077]),
            {
              "forest": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.88807753121109, -6.420339531118587]),
            {
              "forest": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.31129530464859, -7.0640468051477106]),
            {
              "forest": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.700623307578276, -7.154327876607343]),
            {
              "forest": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33851698433609, -5.868036442991217]),
            {
              "forest": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.75795820748062, -6.308082454121188]),
            {
              "forest": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.76585463082046, -6.238464000849082]),
            {
              "forest": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.00892714058609, -6.157572132519138]),
            {
              "forest": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.88533094917984, -6.587484924163798]),
            {
              "forest": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.97047499214859, -6.450361563419469]),
            {
              "forest": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.84938124214859, -5.882380255602592]),
            {
              "forest": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.62690809761734, -6.4257982143581085]),
            {
              "forest": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.55000380074234, -6.545874340676141]),
            {
              "forest": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.15199354683609, -6.414880789357444]),
            {
              "forest": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.46235731636734, -5.975264522699415]),
            {
              "forest": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.62715223824234, -6.881386894950928]),
            {
              "forest": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.627495560996245, -6.343911843259185]),
            {
              "forest": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.63813856636734, -6.062670618857307]),
            {
              "forest": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-51.88008192574234, -6.974088884652728]),
            {
              "forest": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.17396620308609, -7.074949610765612]),
            {
              "forest": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.90696028267593, -5.942142149164538]),
            {
              "forest": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.8832710126564, -6.190681273551065]),
            {
              "forest": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.70954969917984, -6.545874340676141]),
            {
              "forest": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33577040230484, -6.417610167550156]),
            {
              "forest": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.45686415230484, -6.199214221416965]),
            {
              "forest": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6635444501564, -6.533595144240691]),
            {
              "forest": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.69007948433609, -5.9479472455807265]),
            {
              "forest": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.34126356636734, -6.221057938523306]),
            {
              "forest": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.54176405464859, -6.281123470555029]),
            {
              "forest": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.33133662955123, -5.886912186418537]),
            {
              "forest": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.008613240879356, -6.010525742271933]),
            {
              "forest": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.993844666037695, -6.148698480474567]),
            {
              "forest": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.35415312084361, -6.208610342772152]),
            {
              "forest": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.6173824909608, -6.35330535519627]),
            {
              "forest": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.7711910847108, -6.472375252470504]),
            {
              "forest": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.759861433831894, -6.458388543428242]),
            {
              "forest": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.19130395109645, -6.713710618453072]),
            {
              "forest": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-53.26923821623317, -6.878370312945459]),
            {
              "forest": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.67622644973329, -7.15209963871799]),
            {
              "forest": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.71639521194032, -7.155506140070016]),
            {
              "forest": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.37997608594661, -7.114071181205595]),
            {
              "forest": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.05193153703666, -7.013048701600479]),
            {
              "forest": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.065321124439, -6.952731324571227]),
            {
              "forest": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-52.0158826478765, -6.913197087195986]),
            {
              "forest": 0,
              "system:index": "49"
            })]);