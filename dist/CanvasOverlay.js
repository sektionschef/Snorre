class CanvasOverlay{constructor(t){void 0===t&&(t={custom_width:exportPaper.width,custom_height:exportPaper.height,posX:0,posY:0,colorObject:color(100),opacity:100}),this.custom_width=t.custom_width,this.custom_height=t.custom_height,this.posX=t.posX,this.posY=t.posY,this.colorObject=t.colorObject,this.opacity=t.opacity,this.cellPerLine=100,this.strokeWeight_=1,this.colorUsed=color(red(this.colorObject),green(this.colorObject),blue(this.colorObject),this.opacity),this.deviation=.3,this.scl=this.custom_width/this.cellPerLine}show(){buffer.push(),buffer.translate(this.posX/exportRatio,this.posY/exportRatio),buffer.strokeWeight(this.strokeWeight_/exportRatio),buffer.stroke(this.colorUsed);var t=this.scl/exportRatio,o=this.deviation/exportRatio;for(let e=0;e<this.custom_width;e+=t)for(let i=0;i<this.custom_height;i+=t)buffer.point((e+getRandomFromInterval(-o,o))/exportRatio,(i+getRandomFromInterval(o,o))/exportRatio);buffer.pop(),buffer.push(),buffer.translate(this.posX/exportRatio,this.posY/exportRatio),buffer.noFill(),buffer.rect(0,0,this.custom_width/exportRatio,this.custom_height/exportRatio),buffer.pop()}}