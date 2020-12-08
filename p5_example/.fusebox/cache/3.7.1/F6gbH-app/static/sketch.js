module.exports = { contents: "\"use strict\";\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar p5_1 = __importDefault(require(\"p5\"));\r\nrequire(\"p5/lib/addons/p5.sound\");\r\nvar circle_1 = __importDefault(require(\"./circle\"));\r\nvar sketch = function (p5) {\r\n    var myCircles = [];\r\n    p5.setup = function () {\r\n        p5.createCanvas(600, 400);\r\n        p5.background(0);\r\n        for (var i = 0; i < 10; i++) {\r\n            var pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));\r\n            myCircles.push(new circle_1.default(p5, pos, 15));\r\n        }\r\n    };\r\n    p5.draw = function () {\r\n        myCircles.forEach(function (circle) { return circle.draw(); });\r\n    };\r\n};\r\nnew p5_1.default(sketch);\r\n//# sourceMappingURL=app.js.map?tm=1607447517073",
dependencies: ["p5","p5/lib/addons/p5.sound","./circle"],
sourceMap: "{\"version\":3,\"file\":\"sketch.js\",\"sourceRoot\":\"\",\"sources\":[\"src/sketch.ts\"],\"names\":[],\"mappings\":\";;;;;AAAA,0CAAoB;AACpB,kCAA+B;AAE/B,oDAA8B;AAE9B,IAAM,MAAM,GAAG,UAAC,EAAM;IAEpB,IAAI,SAAS,GAAa,EAAE,CAAC;IAE7B,EAAE,CAAC,KAAK,GAAG;QACT,EAAE,CAAC,YAAY,CAAC,GAAG,EAAE,GAAG,CAAC,CAAC;QAC1B,EAAE,CAAC,UAAU,CAAC,CAAC,CAAC,CAAC;QAEjB,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,EAAE,EAAE,CAAC,EAAE,EAAE;YAC3B,IAAI,GAAG,GAAG,EAAE,CAAC,YAAY,CAAC,EAAE,CAAC,MAAM,CAAC,EAAE,CAAC,KAAK,CAAC,EAAE,EAAE,CAAC,MAAM,CAAC,EAAE,CAAC,MAAM,CAAC,CAAC,CAAC;YACrE,SAAS,CAAC,IAAI,CAAC,IAAI,gBAAM,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,CAAC,CAAC,CAAA;SACxC;IACH,CAAC,CAAA;IAED,EAAE,CAAC,IAAI,GAAG;QACR,SAAS,CAAC,OAAO,CAAC,UAAA,MAAM,IAAI,OAAA,MAAM,CAAC,IAAI,EAAE,EAAb,CAAa,CAAC,CAAC;IAC7C,CAAC,CAAA;AACH,CAAC,CAAA;AAED,IAAI,YAAE,CAAC,MAAM,CAAC,CAAC\",\"sourcesContent\":[\"import P5 from \\\"p5\\\";\\r\\nimport 'p5/lib/addons/p5.sound'\\r\\n\\r\\nimport Circle from \\\"./circle\\\";\\r\\n\\r\\nconst sketch = (p5: P5) => {\\r\\n\\r\\n  let myCircles: Circle[] = [];\\r\\n\\r\\n  p5.setup = () => {\\r\\n    p5.createCanvas(600, 400);\\r\\n    p5.background(0);\\r\\n\\r\\n    for (let i = 0; i < 10; i++) {\\r\\n      let pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));\\r\\n      myCircles.push(new Circle(p5, pos, 15))\\r\\n    }\\r\\n  }\\r\\n\\r\\n  p5.draw = () => {\\r\\n    myCircles.forEach(circle => circle.draw());\\r\\n  }\\r\\n}\\r\\n\\r\\nnew P5(sketch);\\r\\n\"]}",
headerContent: undefined,
mtime: 1607447517069,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}