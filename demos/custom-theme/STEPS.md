Steps

```scss
/*
  Theme: My Theme
*/

// //  Main Colors Vars
// $font-color: #3a5fe5 !default;
// $background-color: #1e0707 !default;
// $interactive-font-color: #ff1515 !default;

// $heading-color: #ff1515 !default;

// $border-color: #333;

// // Active
// $border-color--active: #073e1e !default;
// $background-color--active: #1e193c !default;

// // inverse
// $interactive-font-color--inverse: #1e0707;
// $background-color--inverse: #3a5fe5;

// // Buttons
// $button-color: #ff1515 !default;

// // Font
// $font-title: "BenguiatITCW01-BoldCn";
// @font-face {
//   font-family: $font-title;
//   src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/BenguiatProITC-BoldCond.eot")
//       format("embedded-opentype"),
//     url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/BenguiatProITC-BoldCond.woff") format("woff"),
//     url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/BenguiatProITC-BoldCond.ttf") format("truetype");
//   font-style: normal;
//   font-weight: bold;
// }

// // Font
// $font-family: $font-title, "Avenir Next W00", "Helvetica Neue", Helvetica, Arial, sans-serif !default;

// // Text
// $line-height: 1.3em !default;
// $base-font-size: 18px !default;

// $button-width: 42px !default;
// $button-height: 42px !default;

@import "../base/core";
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Custom theme preview</title>
    <style>
      html,
      body,
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>
    <link rel="stylesheet" href="../dist/my-theme/main.css" />
    <script src="https://js.arcgis.com/4.11/"></script>
    <script>
      require([
        "esri/views/MapView",
        "esri/WebMap",
        "esri/widgets/Search",
        "esri/widgets/Legend",
        "esri/widgets/Compass",
        "esri/widgets/Expand",
        "esri/widgets/Home"
      ], function(MapView, WebMap, Search, Legend, Compass, Expand, Home) {
        var webmap = new WebMap({
          portalItem: {
            id: "e7a5e0c315cf4ed4a017c8eaabb247c7"
          }
        });

        var view = new MapView({
          map: webmap,
          container: "viewDiv"
        });

        var home = new Home({
          view: view
        });

        view.ui.add(home, "top-left");

        var compass = new Compass({
          view: view
        });

        view.ui.add(compass, "top-left");

        var search = new Search({
          view: view
        });

        view.ui.add(search, "top-right");

        var legend = new Legend({
          view: view
        });

        var expand = new Expand({
          view: view,
          content: legend
        });

        view.ui.add(expand, "bottom-left");

        view.when(function() {
          search.search("Jackson, Georgia");
        });
      });
    </script>
  </head>

  <body>
    <div id="viewDiv"></div>
  </body>
</html>
```
