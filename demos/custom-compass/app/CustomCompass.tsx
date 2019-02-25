/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import MapView = require("esri/views/MapView");
import Widget = require("esri/widgets/Widget");

import CompassViewModel = require("esri/widgets/Compass/CompassViewModel");

import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "custom-compass",
  disabled: "custom-compass--disabled",
  image: "custom-compass__image"
};

interface CustomCompassProperties {
  view: MapView;
}

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

@subclass("esri.demo.CustomCompass")
class CustomCompass extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(props: CustomCompassProperties) {
    super();
  }

  postInitialize() {}

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  @aliasOf("viewModel.view") view: MapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property()
  @renderable(["viewModel.orientation", "viewModel.state"])
  viewModel: CompassViewModel = new CompassViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  @aliasOf("viewModel.reset")
  reset(): void {}

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
        onclick={this._reset}
        aria-label="Reset"
        title="Reset"
      >
        {compassImage}
      </button>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _reset(): void {
    this.viewModel.reset();
  }

  private _toRotationTransform(orientation: Axes): HashMap<string> {
    return {
      transform: `rotateZ(${orientation.z}deg)`
    };
  }
}

export = CustomCompass;