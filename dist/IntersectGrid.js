class IntersectRect{constructor(t,e,i){this.rect1=t,this.rect2=e,this.posXNew,this.widthNew,this.posYNew,this.heightNew,this.rect1.colorObject,this.rect2.colorObject,this.colorObject=i}getColor(){let t=new Set([color1,color2]),e=new Set([this.rect1.colorObject,this.rect2.colorObject]);this.colorIntersect=new Set([...t].filter((t=>!e.has(t)))),this.colorObject=getRandomFromList([...this.colorIntersect])}update(){var t=this.rect1.posX-this.rect1.width/2,e=this.rect2.posX-this.rect2.width/2,i=t+this.rect1.width,s=e+this.rect2.width,h=this.rect1.posY-this.rect1.height/2,r=this.rect2.posY-this.rect2.height/2,o=h+this.rect1.height,c=r+this.rect2.height;e>i||s<t||this.rect2.posY-this.rect2.height/2>this.rect1.posY-this.rect1.height/2+this.rect1.height||this.rect2.posY-this.rect2.height/2+this.rect2.height<this.rect1.posY-this.rect1.height/2||(e<t?(this.widthNew=Math.min(s,i)-t,this.posXNew=t+this.widthNew/2):s>i?(this.widthNew=i-e,this.posXNew=i-this.widthNew/2):(this.widthNew=this.rect2.width,this.posXNew=this.rect2.posX),r<h?(this.heightNew=Math.min(c,o)-h,this.posYNew=h+this.heightNew/2):c>o?(this.heightNew=o-r,this.posYNew=o-this.heightNew/2):(this.heightNew=this.rect2.height,this.posYNew=this.rect2.posY))}}class IntersectGrid{constructor(t){void 0===t&&(t={minSize:100,maxSize:500,numberRects:5,firstLevelColors:[color(100)],secondLevelColors:[color(30)],lineColor:color(230),padding:50}),this.minSize=t.minSize,this.maxSize=t.maxSize,this.numberRects=t.numberRects,this.firstLevelColors=t.firstLevelColors,this.secondLevelColors=t.secondLevelColors,this.lineColor=t.lineColor,this.padding=t.padding,this.rects=[],this.interactionRects=[];for(let r=0;r<this.numberRects;r++){var e=getRandomFromInterval(this.minSize,this.maxSize),i=getRandomFromInterval(this.minSize,this.maxSize),s=getRandomFromInterval(this.padding,width-this.padding-e),h=getRandomFromInterval(this.padding,height-this.padding-i);this.rects.push({width:e,height:i,depth:0,posX:s,posY:h,posZ:0,colorObject:getRandomFromList(this.firstLevelColors)}),this.rects[r].paintedArea=this.createPaintbrushAreas(this.rects[r].posX,this.rects[r].posY,this.rects[r].width,this.rects[r].height,this.rects[r].colorObject),fxrand()>.6&&(this.rects[r].lines=new NewLines(t={posX:this.rects[r].posX,posY:this.rects[r].posY,custom_width:this.rects[r].width,custom_height:this.rects[r].height,colorObject:this.lineColor,distance:10,noise:1,strokeSize:1,curveTightness:1,opacityLevel:150}))}this.rects.sort((function(t,e){return e.width*e.height-t.width*t.height})),this.getIntersections(),this.interactionRects.sort((function(t,e){return e.width*e.height-t.width*t.height})),this.update()}getIntersections(){for(let t=0;t<this.rects.length;t++)for(let e=0+t+1;e<this.rects.length;e++)this.interactionRects.push(new IntersectRect(this.rects[t],this.rects[e],getRandomFromList(this.secondLevelColors)))}createPaintbrushAreas(t,e,i,s,h){let r={custom_width:i,custom_height:s,posX:t,posY:e,colorObject:brightenColor(distortColor(h,6),6),orientation:getRandomFromList(["horizontal","vertical"]),brushLength:BRUSHLENGTHANDBREADTH,brushBreadth:BRUSHLENGTHANDBREADTH,sizeStroke:BRUSHSTROKESIZE,numberPaintLayers:NUMBERPAINTLAYERS,overlap:20,brightnessNoise:BRUSHBRIGHTNESSNOISE,colorNoise:BRUSHCOLORNOISE,opacityBoost:0,brushLengthNoise:.2,brushBreadthNoise:.2,brushAngleNoise:BRUSHANGLENOISE,fibreColorNoise:2,fibreBrightnessNoise:FIBREBRIGHTNESSNOISE,fibreStrokeSizeNoise:FIBRESTROKESIZENOISE,fibreStartLengthNoise:FIBRESTARTLENGTHNOISE,fibreBreadthNoise:FIBREBREADTHNOISE,fibreRotationNoise:FIBREROTATIONNOISE,fibreOpacityNoiseBase:FIBREOPACITYNOISEBASE};return new PaintBrushArea(r)}update(){for(let t=0;t<this.interactionRects.length;t++)this.interactionRects[t].update(),this.interactionRects[t].widthNew&&(this.interactionRects[t].paintedArea=this.createPaintbrushAreas(this.interactionRects[t].posXNew,this.interactionRects[t].posYNew,this.interactionRects[t].widthNew,this.interactionRects[t].heightNew,this.interactionRects[t].colorObject))}show(){for(let t=0;t<this.rects.length;t++)logging.getLevel()<=1&&this.showDebug(this.rects[t]),this.rects[t].paintedArea.show(),void 0!==this.rects[t].lines&&this.rects[t].lines.show();for(let t=0;t<this.interactionRects.length;t++)void 0!==this.interactionRects[t].paintedArea&&this.interactionRects[t].paintedArea.show(),logging.getLevel()<=1&&this.showDebug(this.interactionRects[t])}showDebug(t){buffer.push(),buffer.noStroke(),buffer.fill(brightenColor(t.colorObject,50)),void 0!==t.posXNew?(buffer.translate(t.posXNew,t.posYNew,0),buffer.rect(0,0,t.widthNew,t.heightNew)):void 0!==t.posX&&(buffer.translate(t.posX,t.posY,t.posZ),buffer.rect(0,0,t.width,t.height,t.depth)),buffer.pop()}}