/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { declared, subclass } from "esri/core/accessorSupport/decorators";

import { accessibleHandler, tsx } from "esri/widgets/support/widget";
import BasemapGallery = require("esri/widgets/BasemapGallery");
import BasemapGalleryProperties = __esri.BasemapGalleryProperties;

const CSS = {
  base: "custom-basemap-gallery",

  scene: "custom-basemap-gallery__scene",

  dice: "custom-basemap-gallery__dice",
  diceFace: "custom-basemap-gallery__dice-face",

  diceFaceTop: "custom-basemap-gallery__dice-face--top",
  diceFaceBottom: "custom-basemap-gallery__dice-face--bottom",
  diceFaceLeft: "custom-basemap-gallery__dice-face--left",
  diceFaceRight: "custom-basemap-gallery__dice-face--right",
  diceFaceFront: "custom-basemap-gallery__dice-face--front",
  diceFaceBack: "custom-basemap-gallery__dice-face--back",

  diceRolling: "custom-basemap-gallery__dice--rolling",

  diceTopSelected: "custom-basemap-gallery__dice--top-selected",
  diceBottomSelected: "custom-basemap-gallery__dice--bottom-selected",
  diceLeftSelected: "custom-basemap-gallery__dice--left-selected",
  diceRightSelected: "custom-basemap-gallery__dice--right-selected",
  diceFrontSelected: "custom-basemap-gallery__dice--front-selected",
  diceBackSelected: "custom-basemap-gallery__dice--back-selected",

  // common
  widget: "esri-widget",
};

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@subclass("esri.demo.CustomBasemapGallery")
class CustomBasemapGallery extends declared(BasemapGallery) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: BasemapGalleryProperties) {
    super();

    this._handleClick = this._handleClick.bind(this);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _rolling: boolean;

  //--------------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  render() {
    return (
      <div class={this.classes(CSS.base, CSS.widget)} onclick={this._handleClick} tabIndex={0}>
        {this.renderDice()}
      </div>
    );
  }

  renderDice() {
    const { viewModel: { items } } = this;
    const item = items.find(item => item.basemap === this.activeBasemap);
    const index = (items.indexOf(item) + 1) % 6;

    const faceClass = index === 1 ? CSS.diceTopSelected :
                      index === 2 ? CSS.diceBackSelected :
                      index === 3 ? CSS.diceLeftSelected:
                      index === 4 ? CSS.diceRightSelected:
                      index === 5 ? CSS.diceBottomSelected:
                      CSS.diceFrontSelected;

    const rollingClass = this._rolling ? CSS.diceRolling : null;

    return <div class={CSS.scene}>
      <div class={this.classes(CSS.dice, faceClass, rollingClass)}>
        <div class={this.classes(CSS.diceFace, CSS.diceFaceFront)} />
        <div class={this.classes(CSS.diceFace, CSS.diceFaceTop)} />
        <div class={this.classes(CSS.diceFace, CSS.diceFaceBottom)} />
        <div class={this.classes(CSS.diceFace, CSS.diceFaceLeft)} />
        <div class={this.classes(CSS.diceFace, CSS.diceFaceRight)} />
        <div class={this.classes(CSS.diceFace, CSS.diceFaceBack)} />
      </div>
    </div>;
  }

  @accessibleHandler()
  private _handleClick() {
    const { viewModel: { items } } = this;

    const nextItemIndex = random(0, items.length - 1);
    const nextItem = items.getItemAt(nextItemIndex);

    if (!this._rolling) {
      this._rolling = true;

      setTimeout(() => {
        this._rolling = false;
        this.activeBasemap = nextItem.basemap;
        this.scheduleRender();
      }, 750);
    }
  }
}

export = CustomBasemapGallery;
