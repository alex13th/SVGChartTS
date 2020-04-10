// SVG elements classes
interface SVG_Style {
    className?: string;
    fill?: string;
    fillOpacity?: number;
    fontSize?: number;
    stroke?: string;
    strokeWidth?: number;
    textAnchor?: string;
    transform?: string;
}

class SVG_Element {
    private _style: SVG_Style = {
        fill: "black",
        fillOpacity: 1,
        fontSize: 14,
        stroke: "black",
        strokeWidth: 1 
    };
    get style(): SVG_Style {
        return this._style;
    }
    set style(style: SVG_Style) {
        if (style) {
            if (style.className) this._style.className = style.className;
            if (style.fill) this._style.fill = style.fill;
            if (!isNaN(style.fillOpacity)) this._style.fillOpacity = style.fillOpacity;
            if (!isNaN(style.fontSize)) this._style.fontSize = style.fontSize;
            if (style.stroke) this._style.stroke = style.stroke;
            if (!isNaN(style.strokeWidth)) this._style.strokeWidth = style.strokeWidth;
            if (style.textAnchor) this._style.textAnchor = style.textAnchor;
            if (style.transform) this._style.transform = style.transform;
        }
    }
}

class SVG_Rect extends SVG_Element {
    private _x: number;
    get x(): number{ return this._x;}
    set x(x: number) { this._x = x; }

    private _y: number;
    get y(): number{ return this._y; }
    set y(y: number) { this._y = y; }
    
    private _width: number;
    get width(): number{ return this._width; }
    set width(width: number) { this._width = width; }

    private _height: number;
    get height(): number{ return this._height; }
    set height(height: number) { this._height = height; }

    constructor (x, y, width, height, style) {
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this.style = style;
    }
}



