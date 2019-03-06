import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import CustomBasemapGallery = require("./CustomBasemapGallery");

//----------------
//  map setup
//----------------

const map = new WebMap({
  portalItem: {
    id: "e7a5e0c315cf4ed4a017c8eaabb247c7"
  }
});

const view = new MapView({
  container: "view",
  map,
  center: [-116.538433, 33.824775],
  zoom: 13,
  ui: {
    components: ["attribution"]
  }
});

//----------------
//  widget setup
//----------------

const widget = new CustomBasemapGallery({
  view
});

view.ui.add(widget, "top-left");
