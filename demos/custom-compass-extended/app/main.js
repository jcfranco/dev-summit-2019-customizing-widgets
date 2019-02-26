define(["require", "exports", "esri/views/MapView", "esri/WebMap", "./CustomCompass"], function (require, exports, MapView, WebMap, CustomCompass) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //----------------
    //  map setup
    //----------------
    var webmap = new WebMap({
        portalItem: {
            id: "e7a5e0c315cf4ed4a017c8eaabb247c7"
        }
    });
    var view = new MapView({ container: "viewDiv", map: webmap });
    //----------------
    //  widget setup
    //----------------
    var widget = new CustomCompass({ view: view });
    view.ui.add(widget, "top-right");
});
//# sourceMappingURL=main.js.map