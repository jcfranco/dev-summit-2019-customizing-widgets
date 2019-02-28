/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared } from "esri/core/accessorSupport/decorators";
import { accessibleHandler, tsx } from "esri/widgets/support/widget";

import BasemapGallery = require("esri/widgets/BasemapGallery");

const CSS = {
  base: "custom-basemap-gallery",

  scene: "custom-basemap-gallery__dice-scene",

  dice: "custom-basemap-gallery__dice",
  diceFace: "custom-basemap-gallery__dice-face",

  diceFace1: "custom-basemap-gallery__dice-face--1",
  diceFace2: "custom-basemap-gallery__dice-face--2",
  diceFace3: "custom-basemap-gallery__dice-face--3",
  diceFace4: "custom-basemap-gallery__dice-face--4",
  diceFace5: "custom-basemap-gallery__dice-face--5",
  diceFace6: "custom-basemap-gallery__dice-face--6",
  diceFace7: "custom-basemap-gallery__dice-face--7",
  diceFace8: "custom-basemap-gallery__dice-face--8",
  diceFace9: "custom-basemap-gallery__dice-face--9",
  diceFace10: "custom-basemap-gallery__dice-face--10",
  diceFace11: "custom-basemap-gallery__dice-face--11",
  diceFace12: "custom-basemap-gallery__dice-face--12",

  dice1Selected: "custom-basemap-gallery__dice--1-selected",
  dice2Selected: "custom-basemap-gallery__dice--2-selected",
  dice3Selected: "custom-basemap-gallery__dice--3-selected",
  dice4Selected: "custom-basemap-gallery__dice--4-selected",
  dice5Selected: "custom-basemap-gallery__dice--5-selected",
  dice6Selected: "custom-basemap-gallery__dice--6-selected",
  dice7Selected: "custom-basemap-gallery__dice--7-selected",
  dice8Selected: "custom-basemap-gallery__dice--8-selected",
  dice9Selected: "custom-basemap-gallery__dice--9-selected",
  dice10Selected: "custom-basemap-gallery__dice--10-selected",
  dice11Selected: "custom-basemap-gallery__dice--11-selected",
  dice12Selected: "custom-basemap-gallery__dice--12-selected",

  diceRolling: "custom-basemap-gallery__dice--rolling",

  // common
  widget: "esri-widget"
};

@subclass("demo.CustomBasemapGallery")
class CustomBasemapGallery extends declared(BasemapGallery) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: __esri.BasemapGalleryProperties) {
    super();

    // bind widget to click handler
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
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  roll() {
    const {
      viewModel: { items }
    } = this;

    // get random basemap
    const randomItemIndex = Math.floor(Math.random() * items.length);
    const nextItem = items.getItemAt(randomItemIndex);

    if (!this._rolling) {
      const rollDurationInMs = 750;
      this._rolling = true;

      setTimeout(() => {
        // set random basemap
        this._rolling = false;
        this.activeBasemap = nextItem.basemap;
        this.scheduleRender();
      }, rollDurationInMs);
    }

    this.scheduleRender();
  }

  render() {
    return (
      <div class={this.classes(CSS.base, CSS.widget)} onclick={this._handleClick}>
        {this.renderDice()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected methods
  //
  //-------------------------------------------------------------------

  protected renderDice() {
    const {
      viewModel: { items }
    } = this;
    const item = items.find((item) => item.basemap === this.activeBasemap);
    const index = items.indexOf(item);

    const faceClass =
      index === 0
        ? CSS.dice1Selected
        : index === 1
        ? CSS.dice2Selected
        : index === 2
        ? CSS.dice3Selected
        : index === 3
        ? CSS.dice4Selected
        : index === 4
        ? CSS.dice5Selected
        : index === 5
        ? CSS.dice6Selected
        : index === 6
        ? CSS.dice7Selected
        : index === 7
        ? CSS.dice8Selected
        : index === 8
        ? CSS.dice9Selected
        : index === 9
        ? CSS.dice10Selected
        : index === 10
        ? CSS.dice11Selected
        : CSS.dice12Selected;

    const rollingClass = this._rolling ? CSS.diceRolling : null;

    return (
      <div class={CSS.scene}>
        <div class={this.classes(CSS.dice, faceClass, rollingClass)}>
          <div class={this.classes(CSS.diceFace, CSS.diceFace3)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace6)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace5)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace4)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace2)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace1)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace8)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace12)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace11)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace10)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace9)}>{this.renderPentagon()}</div>
          <div class={this.classes(CSS.diceFace, CSS.diceFace7)}>{this.renderPentagon()}</div>
        </div>
      </div>
    );
  }

  protected renderPentagon() {
    return (
      <svg class="pentagon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 588 588">
        <polygon
          points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691"
          fill="white"
          stroke="black"
          stroke-width="4"
        />
      </svg>
    );
  }

  @accessibleHandler()
  protected _handleClick() {
    this.roll();
  }
}

export = CustomBasemapGallery;
