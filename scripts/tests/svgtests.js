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
        this.singleStyle = { class: "testSingleResult",
            passedClass: "passedTest",
            failedClass: "failedTest" };
        this.scopeStyle = { class: "testScopeResult",
            passedClass: "passedTest",
            failedClass: "failedTest" };
    }
    Test_Class.prototype.checkTestArray = function (tests) {
        var result = true;
        for (var i = 0; i < tests.length; i++)
            result = result && tests[i].passed;
        return result;
    };
    Test_Class.prototype.generateMessage = function (tests, style) {
        var result = "";
        for (var i = 0; i < tests.length; i++) {
            result += "<div class='" + style.class + "'>" + tests[i].name + ": ";
            if (tests[i].passed) {
                if (style.passedClass) {
                    result += " <span class='" + style.passedClass + "'>PASS</span>";
                }
                else {
                    result += " <span>PASS</span>";
                }
            }
            else {
                if (style.failedClass) {
                    result += " <span class='" + style.failedClass + "'>FAILED</span>";
                }
                else {
                    result += " <span>FAILED</span>";
                }
            }
            result += "</div>";
        }
        return result;
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
    Test_SVG_Element.prototype.testElementStyle = function (testName) {
        var elementSVG = this._testElement;
        var style = {
            className: "Test className",
            fill: "red",
            fillOpacity: 0,
            fontSize: 12,
            stroke: "blue",
            strokeWidth: 5,
            textAnchor: "end"
        };
        elementSVG.style = style;
        var tests = [];
        var result = "<p><h3>";
        result += testName + " test proceed...</h3>";
        tests.push({ name: "'className' property", passed: elementSVG.style.className == style.className });
        tests.push({ name: "'fill' property", passed: elementSVG.style.fill == style.fill });
        tests.push({ name: "'fillOpacity' property", passed: elementSVG.style.fillOpacity == style.fillOpacity });
        tests.push({ name: "'fontSize' property", passed: elementSVG.style.fontSize == style.fontSize });
        tests.push({ name: "'stroke' property", passed: elementSVG.style.stroke == style.stroke });
        tests.push({ name: "'strokeWidth' property", passed: elementSVG.style.strokeWidth == style.strokeWidth });
        tests.push({ name: "'textAnchor' property", passed: elementSVG.style.textAnchor == style.textAnchor });
        result += this.generateMessage(tests, this.singleStyle);
        result += this.generateMessage([{ name: testName, passed: this.checkTestArray(tests) }], this.scopeStyle);
        return result + "</p>";
    };
    Test_SVG_Element.prototype.runAll = function () {
        var result = "";
        result += this.testElementStyle("SVG Element style");
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
        var rectSVG = this._testRect;
        var tests = [];
        var result = "<p><h3>";
        result += testName + " test proceed...</h3>";
        tests.push({ name: "'x' property", passed: rectSVG.x == x });
        tests.push({ name: "'y' property", passed: rectSVG.y == y });
        tests.push({ name: "'width' property", passed: rectSVG.width == width });
        tests.push({ name: "'height' property", passed: rectSVG.height == height });
        result += this.generateMessage(tests, this.singleStyle);
        result += this.generateMessage([{ name: testName, passed: this.checkTestArray(tests) }], this.scopeStyle);
        return result + "</p>";
    };
    Test_SVG_Rect.prototype.runAll = function () {
        var result = "";
        result += this.testRect("SVG RECT Element inital create", 1, 2, 3, 4);
        return result;
    };
    ;
    return Test_SVG_Rect;
}(Test_Class));
