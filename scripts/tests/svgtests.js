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
var Test_Class = /** @class */ (function () {
    function Test_Class() {
    }
    Test_Class.prototype.msgTestResult = function (testName, pass) {
        var result = "<div class='testScope'>" + testName + ":";
        if (pass) {
            result += " <span class='passedTest'>PASS</span>";
        }
        else {
            result += " <span class='failedTest'>FAILED</span>";
        }
        return result + "</div>";
    };
    return Test_Class;
}());
var Test_SVG_Element = /** @class */ (function (_super) {
    __extends(Test_SVG_Element, _super);
    function Test_SVG_Element() {
        var _this = _super.call(this) || this;
        _this._testElement = new SVG_Element();
        return _this;
    }
    Test_SVG_Element.prototype.testElementStyle = function (testName, style) {
        var result = "<p>";
        var elementSVG = this._testElement;
        result = testName + " test proceed...";
        var testPassed = true;
        testPassed = testPassed && elementSVG.style.fill == style.fill;
        result += this.msgTestResult("'fill' property", elementSVG.style.fill == style.fill);
        return result;
    };
    Test_SVG_Element.prototype.runTest = function () {
        var result = "";
        result += this.testElementStyle("Test element style", { fill: "black" });
        return result;
    };
    return Test_SVG_Element;
}(Test_Class));
var Test_SVG_Rect = /** @class */ (function (_super) {
    __extends(Test_SVG_Rect, _super);
    function Test_SVG_Rect() {
        var _this = _super.call(this) || this;
        _this._testRect = new SVG_Rect(1, 2, 3, 4, null);
        return _this;
    }
    Test_SVG_Rect.prototype.testRect = function (testName, x, y, width, height) {
        var result = "<p>";
        var rectSVG = this._testRect;
        result = testName + " test proceed...";
        var testPassed = true;
        testPassed = testPassed && rectSVG.x == x;
        result += this.msgTestResult("'x' property", rectSVG.x == x);
        testPassed = testPassed && rectSVG.y == y;
        result += this.msgTestResult("'y' property", rectSVG.y == y);
        testPassed = testPassed && rectSVG.width == width;
        result += this.msgTestResult("'width' property", rectSVG.width == width);
        testPassed = testPassed && rectSVG.height == height;
        result += this.msgTestResult("'height' property", rectSVG.height == height);
        return result;
    };
    Test_SVG_Rect.prototype.runTest = function () {
        var result = "";
        result += this.testRect("Inital create", 1, 2, 3, 4);
        return result;
    };
    ;
    return Test_SVG_Rect;
}(Test_Class));
