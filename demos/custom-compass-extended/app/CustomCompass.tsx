/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Compass = require("esri/widgets/Compass");

import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "custom-compass",
  disabled: "custom-compass--disabled",
  image: "custom-compass__image"
};

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

@subclass("esri.demo.CustomCompass")
class CustomCompass extends declared(Compass) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const { orientation, state } = this.viewModel;

    const disabled = state === "disabled"; // todo: cracked glass?

    const baseClasses = {
      [CSS.disabled]: disabled
    };

    const compassImage = disabled ? null : (
      <img
        class={CSS.image}
        src="app/img/compass-needle.png"
        alt="Compass Needle"
        styles={this._toRotationTransform(orientation)}
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

  private _toRotationTransform(orientation: Axes): HashMap<string> {
    return {
      transform: `rotateZ(${orientation.z}deg)`
    };
  }
}

export = CustomCompass;
