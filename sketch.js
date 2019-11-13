let video
let style
let resultImg

function setup(){
  createCanvas(1920,1080).parent('canvasContainer')

  video = createCapture(VIDEO);
  video.hide()
  resultImg = createImg('')
  resultImg.hide()

  style = ml5.styleTransfer('models/galaxia', video, modelLoaded) 
}
function draw(){
  image(resultImg,0, 0, 1920, 1080)
}
function modelLoaded(){
  select('#status').html('Model Loaded')
  style.transfer(gotResult)
}
function gotResult(err, img){
  resultImg.attribute('src', img.src)
  style.transfer(gotResult)

}