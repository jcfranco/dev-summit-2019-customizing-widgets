# Custom Compass Steps

## 1. Explore the file structure

## 2. Load the index page

http://localhost/git/dev-summit-2019-customizing-widgets/demos/custom-compass-start/

## 3. Download the Compass View

Copy the `Compass.tsx` view code and paste it into the `CustomCompass.tsx` file.

[Compass API Doc](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html) | [Compass View Code](https://github.com/Esri/arcgis-js-api/blob/4master/widgets/Compass.tsx)

## Widget View Cleanup

We'll need to remove large JSDoc comments and interfaces we won't need

Remove JSDoc on top of file and on properties/methods

Remove Axes interface

```
import { Axes } from "esri/widgets/interfaces";
```

Remove support interfaces

```
import { GoToOverride, VNode } from "esri/widgets/support/interfaces";
```

Remove goToOverride. Our widget won't need an override property.

```
//----------------------------------
//  goToOverride
//----------------------------------

@aliasOf("viewModel.goToOverride") goToOverride: GoToOverride = null;
```

## Compile widget view

After a `tsc` compile the widget should be showing in the top right corner. This is the default Compass widget the API provides.

Now we can start customizing the widget.

## Get rid of properties we won't need

Remove the iconClass and label properties

```
//----------------------------------
//  iconClass
//----------------------------------

/**
  * The widget's default CSS icon class.
  *
  * @since 4.7
  * @name iconClass
  * @instance
  * @type {string}
  * @readonly
  */
@property() iconClass = CSS.widgetIcon;

//----------------------------------
//  label
//----------------------------------

/**
  * The widget's default label.
  *
  * @since 4.7
  * @name label
  * @instance
  * @type {string}
  * @readonly
  */
@property() label: string = i18n.widgetLabel;
```

## Remove i18n file reference

Remove the import of the i18n file. We won't use these text strings for our widget.

```
// dojo
import * as i18n from "dojo/i18n!esri/widgets/Compass/nls/Compass";
```

## Update render method

```
render(): any {
  const styles = {
    fontSize: "32px",
    color: "#fff"
  };

  return <h1 styles={styles}>Hello World!</h1>;
}
```

## Remove unused private methods

```
//--------------------------------------------------------------------------
//
//  Private Methods
//
//--------------------------------------------------------------------------

@accessibleHandler()
private _reset(): void {
  this.viewModel.reset();
}

private _toRotationTransform(orientation: any): HashMap<string> {
  return {
    transform: `rotateZ(${orientation.z}deg)`
  };
}
```

## Remove `accessibleHandler` import

```
import { renderable, tsx } from "esri/widgets/support/widget";
```

## Update our render() method

Now we're ready to build our widget out. Lets start by adding a button to our widget.

```
render(): any {
  return (
    <button bind={this} onclick={this.reset} aria-label="Reset" title="Reset">
      My Compass
    </button>
  );
}
```

## Compile

Compile and see if the new button is showing up.
