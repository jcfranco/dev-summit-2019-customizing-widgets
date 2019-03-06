import MapView = require("esri/views/MapView");
import WebMap = require("esri/WebMap");
import CustomCompass = require("./CustomCompass");

//----------------
//  map setup
//----------------

const webmap = new WebMap({
  portalItem: {
    id: "e7a5e0c315cf4ed4a017c8eaabb247c7"
  }
});

const view = new MapView({ container: "viewDiv", map: webmap });


//----------------
//  widget setup
//----------------

const widget = new CustomCompass({ view });

view.ui.add(widget, "top-right");
