/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/widgets/Compass", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, Compass, decorators_1, widget_1) {
    "use strict";
    var CSS = {
        base: "custom-compass",
        disabled: "custom-compass--disabled",
        image: "custom-compass__image"
    };
    var CustomCompass = /** @class */ (function (_super) {
        __extends(CustomCompass, _super);
        function CustomCompass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
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
        CustomCompass.prototype.render = function () {
            var _a;
            var _b = this.viewModel, orientation = _b.orientation, state = _b.state;
            var disabled = state === "disabled";
            var baseClasses = (_a = {},
                _a[CSS.disabled] = disabled,
                _a);
            var compassImage = disabled ? null : (widget_1.tsx("img", { class: CSS.image, src: "app/img/compass-needle.png", alt: "Compass Needle", styles: {
                    transform: "rotateZ(" + orientation.z + "deg)"
                } }));
            return (widget_1.tsx("button", { bind: this, class: this.classes(CSS.base, baseClasses), onclick: this.viewModel.reset, "aria-label": "Reset", title: "Reset" }, compassImage));
        };
        CustomCompass = __decorate([
            decorators_1.subclass("esri.demo.CustomCompass")
        ], CustomCompass);
        return CustomCompass;
    }(decorators_1.declared(Compass)));
    return CustomCompass;
});
//# sourceMappingURL=CustomCompass.js.map