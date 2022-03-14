const SWITCH_LOGGING_LEVEL="info",CANVAS_WIDTH=1080,CANVAS_HEIGHT=1080,POINT_COUNT_MIN=5,POINT_COUNT_MAX=25,PAIRING_COUNT_MIN=4,PAIRING_COUNT_MAX=10,MAX_HEIGHT=200,MIN_HEIGHT=40,MINIMIMUM_DISTANCE=54,COUNT_OF_POINTS_X=Math.floor(getRandomFromInterval(5,25)),COUNT_OF_POINTS_Y=Math.floor(getRandomFromInterval(5,25)),PAIRING_COUNT=Math.floor(getRandomFromInterval(4,10)),GRID=COUNT_OF_POINTS_X+"x"+COUNT_OF_POINTS_Y,STROKE_SIZE_MIN=.1,STROKE_SIZE_MAX=1,STROKE_SIZE=getRandomFromInterval(.1,1),STROKE_DISTORT=getRandomFromInterval(0,.2),STROKE_NOISE=5;let distanceBetweenLines;const BORDER_FRAME_MIN=5,BORDER_FRAME_MAX=35;BORDER_FRAME=getRandomFromInterval(5,35);const BRUSH_SIZE_MIN=10,BRUSH_SIZE_MAX=30,BRUSH_SIZE=getRandomFromInterval(10,30),BRUSH_TIGHTNESS_MIN=0,BRUSH_TIGHTNESS_MAX=5,BRUSH_TIGHTNESS=getRandomFromInterval(0,5),PRIMARY_STROKE_WEIGHT_MIN=2,PRIMARY_STROKE_WEIGHT_MAX=4,PRIMARY_STROKE_WEIGHT=getRandomFromInterval(2,4);let cameraDefault,rescaling_width,rescaling_height,grid,PALETTES=[{name:"Mel Brooks",top_color:"#EFF6EE",inside_color:"#9197AE",background_color:"#273043"},{name:"Slawa Ukrajini",top_color:"#ffd700",inside_color:"#0057b7",background_color:"#2e3033"},{name:"Bobbycorn",top_color:"#F5F5F5",inside_color:"#087E8B",background_color:"#3C3C3C"},{name:"Maypole",top_color:"#EDF7F6",inside_color:"#F19953",background_color:"#2660A4"},{name:"Manfred Bauer",top_color:"#00d1c9",inside_color:"#FFD899",background_color:"#EF5B5B"},{name:"Butterfred",top_color:"#B8F2E6",inside_color:"#fffefa",background_color:"#FFA69E"},{name:"Gianni",top_color:"#fff4b5",inside_color:"#d1d1d1",background_color:"#39403b"},{name:"Ian",top_color:"#071108",inside_color:"#364652",background_color:"#BFB1C1"},{name:"Ginger",top_color:"#41EAD4",inside_color:"#093961",background_color:"#c46673"},{name:"Simone Minestrone",top_color:"#62B6CB",inside_color:"#1B4965",background_color:"#BEE9E8"},{name:"Hunger",top_color:"#FF2626",inside_color:"#000000",background_color:"#FFE6E6"},{name:"Shakespeare",top_color:"#398AB9",inside_color:"#1C658C",background_color:"#D8D2CB"},{name:"Ladies night",top_color:"#3b96f7",inside_color:"#FF5C7A",background_color:"#D5CAC3"},{name:"Stumpergasse",top_color:"#FFD32D",inside_color:"#302b2b",background_color:"#ebebeb"},{name:"Sneaker",top_color:"#94B49F",inside_color:"#B4CFB0",background_color:"#E5E3C9"}],cameraFlights=[{name:"Top/Left -> Center",camera_start_x:-720,camera_start_y:-720,camera_stop_x:0,camera_stop_y:0},{name:"Bottom/Right -> Center",camera_start_x:720,camera_start_y:720,camera_stop_x:0,camera_stop_y:0},{name:"Left -> Right",camera_start_x:-1080,camera_start_y:0,camera_stop_x:540,camera_stop_y:0},{name:"Right -> Left",camera_start_x:1080,camera_start_y:0,camera_stop_x:-540,camera_stop_y:0}],SCALING_FACTOR=1,preview_called=!1,chosenCameraFlight=getRandomFromList(cameraFlights),chosenPalette=getRandomFromList(PALETTES);const TOP_COLOR=chosenPalette.top_color,INSIDE_COLOR=chosenPalette.inside_color,BACKGROUND_COLOR=chosenPalette.background_color;function preload(){}function setup(){logging.setLevel("info"),distanceBetweenLines=map(STROKE_SIZE,.1,1,10,40),createCanvas(1080,1080,WEBGL).parent("canvasHolder"),grid=new Grid(COUNT_OF_POINTS_X,COUNT_OF_POINTS_Y,54,PAIRING_COUNT,200,40),cameraDefault=[chosenCameraFlight.camera_start_x/SCALING_FACTOR,chosenCameraFlight.camera_start_y/SCALING_FACTOR,1.5*height/SCALING_FACTOR,0,0,0,0,1,0],cameraStepSize=5,resize_canvas()}function draw(){cameraDefault=[chosenCameraFlight.camera_start_x/SCALING_FACTOR,chosenCameraFlight.camera_start_y/SCALING_FACTOR,1.35*height/SCALING_FACTOR,0,0,0,0,1,0],chosenCameraFlight.camera_start_x!=chosenCameraFlight.camera_stop_x|chosenCameraFlight.camera_start_y!=chosenCameraFlight.camera_stop_y&&(chosenCameraFlight.camera_start_x<=chosenCameraFlight.camera_stop_x?chosenCameraFlight.camera_start_x+=cameraStepSize:chosenCameraFlight.camera_start_x-=cameraStepSize,chosenCameraFlight.camera_start_y<=chosenCameraFlight.camera_stop_y?chosenCameraFlight.camera_start_y+=cameraStepSize:chosenCameraFlight.camera_start_y-=cameraStepSize,camera(...cameraDefault)),orbitControl(1,1,.1),ambientLight(255,255,255),ambientMaterial(255),background(BACKGROUND_COLOR),grid.show_boxes(),grid.check_boxes_complete(),1==grid.boxes_completely_run&&0==preview_called&&(logging.debug("all work is done"),fxpreview(),preview_called=!0)}logging.info("FXHASH: "+fxhash),logging.info("Grid: "+GRID),logging.info("Paired boxes: "+PAIRING_COUNT),logging.info("Palette: "+chosenPalette.name),logging.info("Camera flight: "+chosenCameraFlight.name),logging.info("Paint frame: "+label_feature(BORDER_FRAME,5,35)),logging.info("Brush region: "+label_feature(BRUSH_SIZE,10,30)),logging.info("Brush size: "+label_feature(PRIMARY_STROKE_WEIGHT,2,4)),logging.info("Brush tightness: "+label_feature(BRUSH_TIGHTNESS,0,5)),logging.info("Line Stroke weight: "+label_feature(STROKE_SIZE,.1,1));