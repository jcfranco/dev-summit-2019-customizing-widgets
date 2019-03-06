/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { accessibleHandler, tsx } from "esri/widgets/support/widget";

import BasemapGallery = require("esri/widgets/BasemapGallery");

@subclass("esri.demo.CustomBasemapGallery")
class CustomBasemapGallery extends declared(BasemapGallery) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: __esri.BasemapGalleryProperties) {
    super();
  }
}

export = CustomBasemapGallery;
