const SWITCH_LOGGING_LEVEL="info",CANVAS_WIDTH=1080,CANVAS_HEIGHT=1080;let rescaling_width,rescaling_height,fxhash_number,SCALING_FACTOR=1,preview_called=!1,xoff=0;function preload(){}function setup(){pixelDensity(1),logging.setLevel("info"),createCanvas(1080,1080,WEBGL),NOISESEED=hashFnv32a(fxhash),logging.debug("Noise seed: "+NOISESEED),noiseSeed(NOISESEED),resize_canvas()}function draw(){ambientLight(255,255,255),ambientMaterial(255),background(200),noLoop()}function betaPDF(n,o,e){return Math.exp(lnBetaPDF(n,o,e))}function lnBetaPDF(n,o,e){return(o-1)*Math.log(n)+(e-1)*Math.log(1-n)-lnBetaFunc(o,e)}function lnBetaFunc(n,o){for(foo=0,i=0;i<n-2;i++)foo+=Math.log(n-1-i);for(i=0;i<o-2;i++)foo+=Math.log(o-1-i);for(i=0;i<n+o-2;i++)foo-=Math.log(n+o-1-i);return foo}logging.info("FXHASH: "+fxhash);