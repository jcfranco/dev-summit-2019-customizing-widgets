/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Compass/nls/Compass";

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
  //  iconClass
  //----------------------------------

  @property() iconClass = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  @property() label: string = i18n.widgetLabel;

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
    const { orientation, state } = this.viewModel;

    const disabled = state === "disabled",
      showNorth = state === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
      showingCompass = showNorth === "compass";

    const tabIndex = disabled ? -1 : 0;

    const dynamicRootClasses = {
      [CSS.disabled]: disabled,
      [CSS.interactive]: !disabled
    };

    const dynamicIconClasses = {
      [CSS.northIcon]: showingCompass,
      [CSS.rotationIcon]: !showingCompass
    };

    return (
      <button
        bind={this}
        class={this.classes(CSS.base, dynamicRootClasses)}
        onclick={this.reset}
        role="button"
        tabIndex={tabIndex}
        aria-label={i18n.reset}
        title={i18n.reset}
      >
        <span
          aria-hidden="true"
          class={this.classes(CSS.icon, dynamicIconClasses)}
          styles={{
            transform: `rotateZ(${orientation.z}deg)`
          }}
        />
        <span class={CSS.text}>{i18n.reset}</span>
      </button>
    );
  }

  // end class
}

export = Compass;
