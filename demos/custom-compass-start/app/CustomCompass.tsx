/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import View = require("esri/views/View");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Compass
import CompassViewModel = require("esri/widgets/Compass/CompassViewModel");

// esri.widgets.support
import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-compass esri-widget--button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-compass__icon",
  rotationIcon: "esri-icon-dial",
  northIcon: "esri-icon-compass",
  widgetIcon: "esri-icon-locate-circled",

  // common
  interactive: "esri-interactive",
  disabled: "esri-disabled"
};

@subclass("esri.widgets.Compass")
class Compass extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  @aliasOf("viewModel.view") view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property({
    type: CompassViewModel
  })
  @renderable(["viewModel.orientation", "viewModel.state"])
  viewModel: CompassViewModel = new CompassViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  @aliasOf("viewModel.reset")
  reset(): void {}

  render(): any {
    return (
      <button bind={this} onclick={this.reset} aria-label="Reset" title="Reset">
        My Compass
      </button>
    );
  }
}

export = Compass;
