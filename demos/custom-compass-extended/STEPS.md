# Extending View Demo (pt 1): Steps

**Note**: Steps assume development environment has been previously set up.

Please refer to the following for more information:

- [Setting up TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [Widget Development](https://developers.arcgis.com/javascript/latest/guide/custom-widget/index.html)
____________

1. Open `index.html` (same as `custom-compass/index.html`)
    - simple app setup
    - imports custom widget

2. Open `CustomCompass.tsx`
    - widget extension boilerplate

```tsx
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Compass = require("esri/widgets/Compass");

import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

@subclass("esri.demo.CustomCompass")
class CustomCompass extends declared(Compass) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(props: __esri.CompassProperties) {
    super();
  }
  
}

export = CustomCompass;
```

3. Simply replace `render` with your custom rendering:

```tsx
const CSS = {
  base: "custom-compass",
  disabled: "custom-compass--disabled",
  image: "custom-compass__image"
};
```

```tsx
//--------------------------------------------------------------------------
//
//  Public Methods
//
//--------------------------------------------------------------------------

render() {
  const { orientation, state } = this.viewModel;

  const disabled = state === "disabled";

  const baseClasses = {
    [CSS.disabled]: disabled
  };

  const compassImage = disabled ? null : (
    <img
      class={CSS.image}
      src="app/img/compass-needle.png"
      alt="Compass Needle"
      styles={{
        transform: `rotateZ(${orientation.z}deg)`
      }}
    />
  );

  return (
    <button
      bind={this}
      class={this.classes(CSS.base, baseClasses)}
      onclick={this.reset}
      aria-label="Reset"
      title="Reset"
    >
      {compassImage}
    </button>
  );
}
```
