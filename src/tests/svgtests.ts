class Test_Class {
    protected msgTestResult(testName, pass: boolean): string {
        let result: string ="<div class='testScope'>" + testName + ":";
        if (pass) {
            result += " <span class='passedTest'>PASS</span>";
        } else {
            result += " <span class='failedTest'>FAILED</span>";
        }
        return result + "</div>";
    }
}

class Test_SVG_Element extends Test_Class {
    
    private _testElement: SVG_Element;

    private testElementStyle(testName: string, style: SVG_Style) {
        let result:string = "<p>";
        let elementSVG: SVG_Element = this._testElement;

        result = testName + " test proceed...";
        let testPassed = true;

        testPassed = testPassed && elementSVG.style.fill == style.fill;
        result += this.msgTestResult("'fill' property", elementSVG.style.fill == style.fill);

        return result;
    }

    public runTest(): string {
        let result:string = "";
        result += this.testElementStyle("Test element style", {fill: "black"});
        return result;
    }

    constructor(){
        super();
        this._testElement = new SVG_Element();
    }

}

class Test_SVG_Rect extends Test_Class {

    private _testRect: SVG_Rect;

    private testRect (testName: string, x, y, width, height): string {
        let result:string = "<p>";
        let rectSVG: SVG_Rect = this._testRect;

        result = testName + " test proceed...";
        let testPassed = true;

        testPassed = testPassed && rectSVG.x == x;
        result += this.msgTestResult("'x' property", rectSVG.x == x);
        testPassed = testPassed && rectSVG.y == y;
        result += this.msgTestResult("'y' property", rectSVG.y == y);
        testPassed = testPassed && rectSVG.width == width;
        result += this.msgTestResult("'width' property", rectSVG.width == width);
        testPassed = testPassed && rectSVG.height == height;
        result += this.msgTestResult("'height' property", rectSVG.height == height);

        return result;
    }

    public runTest(): string {
        let result:string = "";
        result += this.testRect("Inital create", 1, 2, 3, 4);
        return result;
    }

    constructor () {
        super()
        this._testRect = new SVG_Rect(1, 2, 3, 4, null);
    };
}
