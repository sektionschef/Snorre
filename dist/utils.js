function getRandomFromInterval(e,t){return fxrand()*(t-e)+e}function getRandomFromList(e){return e[Math.floor(fxrand()*e.length)]}function distortColor(e,t){void 0===t&&(t=10);let o=e.levels[0]+getRandomFromInterval(-t,t),r=e.levels[1]+getRandomFromInterval(-t,t),i=e.levels[2]+getRandomFromInterval(-t,t),n=e.levels[3];return o=Math.min(Math.max(parseInt(o),0),255),r=Math.min(Math.max(parseInt(r),0),255),i=Math.min(Math.max(parseInt(i),0),255),color(o,r,i,n)}function brightenColor(e,t){return colorMode(HSB),brightnessNew=brightness(e)+getRandomFromInterval(-t,t),resultingColor=color(hue(e),saturation(e),brightnessNew),colorMode(RGB),resultingColor}function brightenColorStatic(e,t){return colorMode(HSB),brightnessNew=brightness(e)+t,resultingColor=color(hue(e),saturation(e),brightnessNew),colorMode(RGB),resultingColor}function saturateColorStatic(e,t){return colorMode(HSB),saturationNew=saturation(e)+t,resultingColor=color(hue(e),saturationNew,brightness(e)),colorMode(RGB),resultingColor}function lessenColor(e,t){let o=getRandomFromInterval(0,-t),r=e.levels[0],i=e.levels[1],n=e.levels[2],a=constrain(e.levels[3]+o,0,255);return color(r,i,n,a)}function scaleDynamically(){scaleRatio=1,exportRatio=5,dynamicWidthRatio=exportPaper.width/windowWidth,dynamicHeightRatio=exportPaper.height/windowHeight,dynamicWidthRatio>dynamicHeightRatio?(logging.debug("Width is smaller than height. Width dominates"),exportRatio=dynamicWidthRatio):(logging.debug("width is larger than height. Height dominates."),exportRatio=dynamicHeightRatio),rescaling_width=exportPaper.width/exportRatio,rescaling_height=exportPaper.height/exportRatio}function windowResized(){logging.debug("Window is resized."),scaleDynamically(),resizeCanvas(rescaling_width,rescaling_height),buffer=createGraphics(width,height),draw()}function keyTyped(){"e"===key||"E"==key?exportHighResolution():"r"===key||key}function label_feature(e,t,o){let r,i=(o-t)/3;return r=e<t+i?"low":e<t+2*i?"medium":"high",r}function hashFnv32a(e,t,o){var r,i,n=void 0===o?2166136261:o;for(r=0,i=e.length;r<i;r++)n^=e.charCodeAt(r),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return t?("0000000"+(n>>>0).toString(16)).substr(-8):n>>>0}function exportHighResolution(){scaleRatio=exportRatio,buffer=createGraphics(scaleRatio*width,scaleRatio*height),draw();let e=(new Date).getTime();save(buffer,str(e),"png"),scaleRatio=1,buffer=createGraphics(width,height),draw()}