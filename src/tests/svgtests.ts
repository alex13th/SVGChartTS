interface Test_Result {
    name: string;
    passed: boolean;
}

interface Test_MessageStyle {
    class: string;
    failedClass?: string;
    passedClass?: string;
}

class Test_Class {
    public singleStyle = {class: "testSingleResult",
            passedClass: "passedTest",
            failedClass: "failedTest"};
    public scopeStyle = {class: "testScopeResult",
            passedClass: "passedTest",
            failedClass: "failedTest"};

    protected checkTestArray(tests: Test_Result[]): boolean {
        let result: boolean = true;
        for(let i = 0; i < tests.length; i++)
            result = result && tests[i].passed;

        return result;
    }

    protected generateMessage(tests: Test_Result[], style: Test_MessageStyle): string {
        let result ="";
        for (let i = 0; i < tests.length; i++) {
            result +="<div class='" + style.class + "'>" + tests[i].name + ": ";
            if (tests[i].passed) {
                if (style.passedClass) {
                    result += " <span class='" + style.passedClass + "'>PASS</span>";
                } else {
                    result += " <span>PASS</span>";
                }
            } else {
                if (style.failedClass) {
                    result += " <span class='" + style.failedClass + "'>FAILED</span>";
                } else {
                    result += " <span>FAILED</span>";
                }
            }
            result += "</div>"
        }
        return result;
    }
}

class Test_SVG_Element extends Test_Class {
    
    private _testElement: SVG_Element;

    public testElementStyle(testName: string): String {
        let elementSVG: SVG_Element = this._testElement;
        let style: SVG_Style = {
            className: "Test className",
            fill: "red",
            fillOpacity: 0,
            fontSize: 12,
            stroke: "blue",
            strokeWidth: 5,
            textAnchor: "end"
        };
        elementSVG.style = style;
        let tests: Test_Result[] = [];

        let result: String = "<p><h3>";
        result += testName + " test proceed...</h3>";
        tests.push({name: "'className' property",  passed: elementSVG.style.className == style.className});
        tests.push({name: "'fill' property",  passed: elementSVG.style.fill == style.fill});
        tests.push({name: "'fillOpacity' property",  passed: elementSVG.style.fillOpacity == style.fillOpacity});
        tests.push({name: "'fontSize' property",  passed: elementSVG.style.fontSize == style.fontSize});
        tests.push({name: "'stroke' property",  passed: elementSVG.style.stroke == style.stroke});
        tests.push({name: "'strokeWidth' property",  passed: elementSVG.style.strokeWidth == style.strokeWidth});
        tests.push({name: "'textAnchor' property",  passed: elementSVG.style.textAnchor == style.textAnchor});

        result += this.generateMessage(tests, this.singleStyle);
        result += this.generateMessage([{name: testName, passed: this.checkTestArray(tests)}], this.scopeStyle);

        return result + "</p>";
    }

    public runAll(): string {
        let result:string = "";
        result += this.testElementStyle("SVG Element style");
        return result;
    }

    constructor(){
        super();
        this._testElement = new SVG_Element();
    }

}

class Test_SVG_Rect extends Test_Class {

    private _testRect: SVG_Rect;

    public testRect (testName: string, x, y, width, height): string {
        let rectSVG: SVG_Rect = this._testRect;
        let tests: Test_Result[] = [];

        let result: String = "<p><h3>";
        result += testName + " test proceed...</h3>";
        tests.push({name: "'x' property",  passed: rectSVG.x == x});
        tests.push({name: "'y' property",  passed: rectSVG.y == y});
        tests.push({name: "'width' property",  passed: rectSVG.width == width});
        tests.push({name: "'height' property",  passed: rectSVG.height == height});

        result += this.generateMessage(tests, this.singleStyle);
        result += this.generateMessage([{name: testName, passed: this.checkTestArray(tests)}], this.scopeStyle);

        return result + "</p>";
    }

    public runAll(): string {
        let result:string = "";
        result += this.testRect("SVG RECT Element inital create", 1, 2, 3, 4);
        return result;
    }

    constructor () {
        super()
        this._testRect = new SVG_Rect(1, 2, 3, 4, null);
    };
}
