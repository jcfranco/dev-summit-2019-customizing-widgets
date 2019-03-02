Theming Steps

## Styles directory structure

- `/jsapi-styles/`
  - `/dist/`: The compiled theme and assets. Copy this for your app.
  - `/preview/`: The preview application used for building a theme.
  - `/sass/`: The code! Here is where the magic and work happens.
    - `/base/`: Here is where all the core defaults and styles are defined for colors, font, widgets, etc.
    - `/examples/`: Here are the `out-of-the-box` themes you can use to modify or create your own.
    - `/my-theme/`: This is the directory setup for you to start editing your theme

## Explore directory structure

View the following files:

- `/sass/my-theme/main.scss`
- `/sass/base/_color.scss`
- `/sass/base/_type_.scss`
- ...etc

## Update our preview app

Lets update our preview app to show more widgets.

Copy the following to `/jsapi-styles/preview/index.html`.

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
        "esri/widgets/Home",
        "esri/widgets/LayerList"
      ], function(MapView, WebMap, Search, Legend, Compass, Expand, Home, LayerList) {
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

        var legendExpand = new Expand({
          group: "top-left",
          view: view,
          content: legend
        });

        view.ui.add(legendExpand, "top-left");

        var layerList = new LayerList({
          view: view
        });

        var layerListExpand = new Expand({
          group: "top-left",
          view: view,
          content: layerList
        });

        view.ui.add(layerListExpand, "top-left");

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

## Reload Preview Page

Reload preview page to see more widgets.

## Lets start editing our theme

Open `/jsapi-styles/sass/my-theme/main.scss`.

## Lets update our theme code

Replace the code with the following

```scss
/*
  Theme: My Theme
*/

$font-color: #3a5fe5;
// $interactive-font-color: #ff1515;
// $background-color: #1e0707;
// $button-color: #ff1515;

@import "../base/core";
```

## Uncomment the following to see changes

```scss
$interactive-font-color: #ff1515;
$background-color: #1e0707;
$button-color: #ff1515;
```

## Change Font

```scss
// Font
$font-title: "BenguiatITCW01-BoldCn";
@font-face {
  font-family: $font-title;
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/BenguiatProITC-BoldCond.eot") format("embedded-opentype"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/BenguiatProITC-BoldCond.woff") format("woff"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/BenguiatProITC-BoldCond.ttf") format("truetype");
  font-style: normal;
  font-weight: bold;
}

// Font
$font-family: $font-title, "Avenir Next W00", "Helvetica Neue", Helvetica, Arial, sans-serif !default;
```

## Change Font sizing

```scss
$line-height: 1.3em !default;
$base-font-size: 18px !default;
```

## Modify Button Sizes

```scss
$button-width: 42px !default;
$button-height: 42px !default;
```

## Open a widget base file and modify

Open `/jsapi-styles/sass/base/widgets/_Popup.scss`

Modify the file by removing everything and reload the preview page.

Notice how all the styling layout is gone but theme is still there.

## Complete

Lets go back to slides to review Theming.
