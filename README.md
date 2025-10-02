# Deforestation Mapping using Sentinel-1 and Object-Based Random Forest Classification on Google Earth Engine

This repository contains the implementation of the methodology described in the publication:

**Yordanov, V., & Brovelli, M. A. (2021). Deforestation Mapping Using Sentinel-1 and Object-Based Random Forest Classification on Google Earth Engine. *The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences*, XLIII-B3-2021, 865–872.**
[https://doi.org/10.5194/isprs-archives-XLIII-B3-2021-865-2021](https://doi.org/10.5194/isprs-archives-XLIII-B3-2021-865-2021)

---

## 📖 Overview

Deforestation can be defined as the conversion of forest land cover to another type.
In this work, we propose an approach that provides forest loss estimations for short time periods using **Sentinel-1 Synthetic Aperture Radar (SAR)** imagery.

Key elements of the workflow:

* Mitigation of speckle effect using the **Dry Coefficient** (mean of values under the first quartile, preserving spatial resolution).
* Generation of **forest vs. non-forest** land cover maps via **Object-Based Random Forest Classification** on **Google Earth Engine (GEE)**.
* Temporal monitoring, with results demonstrated for the Brazilian Amazon between **2015–2019** (bi-temporal) and **monthly for 2020**.

---

## 📂 Repository Contents

* `deforestation-se1-obia-imports.js`
  Code for importing and preprocessing Sentinel-1 data and auxiliary datasets on Google Earth Engine.

* `deforestation-se1-obia-main.js`
  Main script for object-based image analysis, Random Forest classification, and forest loss estimation.

---

## ▶️ Usage

1. Open [Google Earth Engine Code Editor](https://code.earthengine.google.com/).
2. Create a new script and copy the content of the `.js` files into your project.
3. Adjust the **study area**, **timeframe**, and **parameters** in the script as needed.
4. Run the script to generate classification maps and forest loss estimates.

---

## 📑 Citation

If you use this code in your research, please cite the following publication:

```bibtex
@article{yordanovDeforestationMappingUsing2021,
  title = {Deforestation Mapping Using Sentinel-1 and Object-Based Random Forest Classification on Google Earth Engine},
  author = {Yordanov, V. and Brovelli, M. A.},
  journal = {The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences},
  volume = {XLIII-B3-2021},
  pages = {865--872},
  year = {2021},
  doi = {10.5194/isprs-archives-XLIII-B3-2021-865-2021},
  url = {https://isprs-archives.copernicus.org/articles/XLIII-B3-2021/865/2021/}
}
```

---

## 📜 License

This project is shared under the same terms as the publication:
[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
