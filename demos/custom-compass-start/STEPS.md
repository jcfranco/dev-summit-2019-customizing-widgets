# Custom Compass Steps

Steps to create a custom compass widget!

## Explore the file structure

- `/custom-compass-start/`
  - `/app/`: Folder for the widget and assets
    - `/css/`: Widget styling
      - [`main.css`](app/css/main.css): App styling
      - [`CustomCompass.css`](app/css/CustomCompass.css): Compass styling
    - `/img/`: Widget Image files. Background, needle, etc.
    - [`CustomCompass.tsx`](app/CustomCompass.tsx): The custom compass widget view. Should be empty for the demo.
    - [`main.ts`](app/main.ts): File to load and configure the widget as well as the application
  - [`index.html`](index.html): Root application page

## Preview the index page

Open the [index page](http://localhost/git/dev-summit-2019-customizing-widgets/demos/custom-compass-start/) in your web browser.

## Download the Compass View

Copy the `Compass.tsx` view code and paste it into the `CustomCompass.tsx` file.

[Compass API Doc](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html) | [Compass View Code](https://github.com/Esri/arcgis-js-api/blob/4master/widgets/Compass.tsx) | [Compass VM](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass-CompassViewModel.html)

In order to simplify the demo, the file we have is already cleaned up to remove documentation comments and things we don't need.

## COMPILE: Compile widget view

After a `tsc` compile the widget should be showing in the top right corner.

This is the default Compass widget the API provides.

Now we can start customizing the widget.

## Get rid of properties we won't need

Remove the iconClass and label properties

```ts
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

```ts
// dojo
import * as i18n from "dojo/i18n!esri/widgets/Compass/nls/Compass";
```

## Update render method

```tsx
render(): any {
  const styles = {
    fontSize: "32px",
    color: "#fff"
  };

  return <h1 styles={styles}>Hello World!</h1>;
}
```

## COMPILE: `Hello World`

Lets see the `Hello World` widget

## Update our render() method

Now we're ready to build our widget out. Lets start by adding a button to our widget.

```tsx
render(): any {
  return (
    <button bind={this} onclick={this.reset} aria-label="Reset" title="Reset">
      <span style="color:white; font-size:32px">My Compass</span>
    </button>
  );
}
```

## COMPILE: View and test button

Compile and see if the new button is showing up.

## Change button to house an compass needle image

```tsx
render() {
  const compassImage = <img src="app/img/compass-needle.png" alt="Compass Needle" />;

  return (
    <button bind={this} onclick={this.reset} aria-label="Reset" title="Reset">
      {compassImage}
    </button>
  );
}
```

## COMPILE: View image needle

Compile and see if the needle image is showing up.

## Lets add classes to style the widget better

Modify CSS class map object with our custom classes.

```ts
const CSS = {
  base: "custom-compass",
  disabled: "custom-compass--disabled",
  image: "custom-compass__image"
};
```

Add variables for the state of the `CompassViewModel` to see if the widget is currently `disabled`. Add them to the top of the `render()` method.

```ts
const { state } = this.viewModel;

const disabled = state === "disabled";

const baseClasses = {
  [CSS.disabled]: disabled
};
```

Update the JSX to show a disabled state and classes for the root node and image.

```tsx
const compassImage = <img class={CSS.image} src="app/img/compass-needle.png" alt="Compass Needle" />;

return (
  <button bind={this} class={this.classes(CSS.base, baseClasses)} onclick={this.reset} aria-label="Reset" title="Reset">
    {compassImage}
  </button>
);
```

## COMPILE: View the disabled state and styling

## Add transform styles

Now lets rotate the compass needle when the view is rotated. This logic is already given to use from the `CompassViewModel`

```ts
const { orientation, state } = this.viewModel;
```

Add styles to needle image

```ts
styles={{
  transform: `rotateZ(${orientation.z}deg)`
}}
```

The image should look like so:

```tsx
const compassImage = (
  <img
    class={CSS.image}
    src="app/img/compass-needle.png"
    alt="Compass Needle"
    styles={{
      transform: `rotateZ(${orientation.z}deg)`
    }}
  />
);
```

## COMPILE: Verify the needle rotates with the view

## COMPLETE!

Lets head back to the slides to recap.
