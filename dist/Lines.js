class NewLines{constructor(t){void 0===t&&(t={posX:200,posY:200,custom_width:400,custom_height:200,colorObject:color(0),distance:30,noise:1,strokeSize:2,curveTightness:3}),this.posX=t.posX,this.posY=t.posY,this.custom_width=t.custom_width,this.custom_height=t.custom_height,this.colorObject=t.colorObject,this.distance=t.distance,this.noise=t.noise,this.strokeSize=t.strokeSize,this.curveTightness=t.curveTightness,this.custom_width>this.custom_height?(this.orientation="vertical",this.nOfLines=Math.round((this.custom_width-this.distance)/(this.distance+this.strokeSize)),this.distance_=this.custom_width/(this.nOfLines+1)):(this.orientation="horizontal",this.nOfLines=Math.round((this.custom_height-this.distance)/(this.distance+this.strokeSize)),this.distance_=this.custom_height/(this.nOfLines+1))}show(){if(buffer.push(),buffer.translate(this.posX,this.posY,0),logging.getLevel()<=1&&(buffer.noStroke(),buffer.fill("red"),buffer.rect(0,0,this.custom_width,this.custom_height,0)),buffer.strokeWeight(this.strokeSize),buffer.stroke(this.colorObject),buffer.noFill(),buffer.curveTightness(this.curveTightness),"horizontal"==this.orientation){this.limit=this.custom_width;let e=0;for(var t=0;t<=this.nOfLines;t++)e+=this.distance_,buffer.beginShape(),buffer.curveVertex(0,e,0),buffer.curveVertex(0,e,0),buffer.curveVertex(this.limit/4,e+getRandomFromInterval(-this.noise,this.noise),0),buffer.curveVertex(3*this.limit/4,e+getRandomFromInterval(-this.noise,this.noise),0),buffer.curveVertex(this.limit,e,0),buffer.curveVertex(this.limit,e,0),buffer.endShape()}else if("vertical"==this.orientation){this.limit=this.custom_height;let e=0;for(t=0;t<=this.nOfLines;t++)e+=this.distance_,buffer.beginShape(),buffer.curveVertex(e,0,0),buffer.curveVertex(e,0,0),buffer.curveVertex(e+getRandomFromInterval(-this.noise,this.noise),this.limit/4,0),buffer.curveVertex(e+getRandomFromInterval(-this.noise,this.noise),3*this.limit/4,0),buffer.curveVertex(e,this.limit,0),buffer.curveVertex(e,this.limit,0),buffer.endShape()}buffer.pop()}}