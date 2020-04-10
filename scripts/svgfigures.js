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
var SVG_Element = /** @class */ (function () {
    function SVG_Element() {
        this._style = {
            fill: "black",
            fillOpacity: 1,
            fontSize: 14,
            stroke: "black",
            strokeWidth: 1
        };
    }
    Object.defineProperty(SVG_Element.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            if (style) {
                if (style.className)
                    this._style.className = style.className;
                if (style.fill)
                    this._style.fill = style.fill;
                if (!isNaN(style.fillOpacity))
                    this._style.fillOpacity = style.fillOpacity;
                if (!isNaN(style.fontSize))
                    this._style.fontSize = style.fontSize;
                if (style.stroke)
                    this._style.stroke = style.stroke;
                if (!isNaN(style.strokeWidth))
                    this._style.strokeWidth = style.strokeWidth;
                if (style.textAnchor)
                    this._style.textAnchor = style.textAnchor;
                if (style.transform)
                    this._style.transform = style.transform;
            }
        },
        enumerable: true,
        configurable: true
    });
    return SVG_Element;
}());
var SVG_Rect = /** @class */ (function (_super) {
    __extends(SVG_Rect, _super);
    function SVG_Rect(x, y, width, height, style) {
        var _this = _super.call(this) || this;
        _this._x = x;
        _this._y = y;
        _this._width = width;
        _this._height = height;
        _this.style = style;
        return _this;
    }
    Object.defineProperty(SVG_Rect.prototype, "x", {
        get: function () { return this._x; },
        set: function (x) { this._x = x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVG_Rect.prototype, "y", {
        get: function () { return this._y; },
        set: function (y) { this._y = y; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVG_Rect.prototype, "width", {
        get: function () { return this._width; },
        set: function (width) { this._width = width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVG_Rect.prototype, "height", {
        get: function () { return this._height; },
        set: function (height) { this._height = height; },
        enumerable: true,
        configurable: true
    });
    return SVG_Rect;
}(SVG_Element));
