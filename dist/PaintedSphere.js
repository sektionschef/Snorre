class paintedSphere{constructor(t){void 0===t&&(t={custom_width:width,custom_height:height,posX:-width/2,posY:-height/2,colorObject:color(200),margin:50,fillColorNoise:20,fillColorOpacityMax:100,noStroke:!0,strokeWeight:10,strokeColorNoise:20,strokeOpacityMax:50,numberQuantisizer:4}),this.custom_width=t.custom_width,this.custom_height=t.custom_height,this.posX=t.posX,this.posY=t.posY,this.colorObject=t.colorObject,this.margin=t.margin,this.fillColorNoise=t.fillColorNoise,this.fillColorOpacityMax=t.fillColorOpacityMax,this.noStroke=t.noStroke,this.strokeWeight=t.strokeWeight,this.strokeColorNoise=t.strokeColorNoise,this.strokeOpacityMax=t.strokeOpacityMax,this.numberQuantisizer=t.numberQuantisizer,this.colorObjectRed=this.colorObject.levels[0],this.colorObjectGreen=this.colorObject.levels[1],this.colorObjectBlue=this.colorObject.levels[2],this.area=this.custom_width*this.custom_height,this.shapeNumber=this.area/1e3*this.numberQuantisizer,this.elements=[];for(var o=0;o<this.shapeNumber;o++){let t=getRandomFromInterval(this.colorObjectRed-this.fillColorNoise,this.colorObjectRed+this.fillColorNoise),o=getRandomFromInterval(this.colorObjectGreen-this.fillColorNoise,this.colorObjectGreen+this.fillColorNoise),e=getRandomFromInterval(this.colorObjectBlue-this.fillColorNoise,this.colorObjectBlue+this.fillColorNoise),i=this.fillColorOpacityMax,s=this.strokeOpacityMax,r=getRandomFromInterval(10,40),h=getRandomFromInterval(10,40);this.elements.push({strokeColor:color(t,o,e,s),fillColor:color(t,o,e,i),widthShape:r,heightShape:h,strokeSize:this.strokeWeight,posXEl:getRandomFromInterval(this.margin,this.custom_width-this.margin),posYEl:getRandomFromInterval(this.margin,this.custom_height-this.margin),posXRe:getRandomFromInterval(this.margin,this.custom_width-this.margin-r),posYRe:getRandomFromInterval(this.margin,this.custom_height-this.margin-h)})}}show(){for(var t of(logging.getLevel()<=1&&(buffer.push(),buffer.noFill(),buffer.strokeWeight(2),buffer.stroke("black"),buffer.translate(this.posX,this.posY),buffer.rect(0,0,this.custom_width,this.custom_height),buffer.pop()),this.elements))buffer.push(),buffer.translate(this.posX,this.posY),1==this.noStroke?buffer.noStroke():(buffer.stroke(t.strokeColor),buffer.strokeWeight(t.strokeSize)),buffer.fill(t.fillColor),buffer.ellipseMode(CENTER),buffer.ellipse(t.posXEl,t.posYEl,t.widthShape,t.heightShape),buffer.rectMode(CENTER),buffer.rect(t.posXRe,t.posYRe,t.widthShape,t.heightShape),buffer.pop()}}