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
