let video
let style
let resultImg

function setup(){
  createCanvas(800,600).parent('canvasContainer')

  video = createCapture(VIDEO);
  video.hide()
  resultImg = createImg('')
  resultImg.hide()

  style = ml5.styleTransfer('models/pantone', video, modelLoaded) 
}
function draw(){
  image(resultImg,0, 0, 800, 600)
}
function modelLoaded(){
  select('#status').html('Model Loaded')
  style.transfer(gotResult)
}
function gotResult(err, img){
  resultImg.attribute('src', img.src)
  style.transfer(gotResult)

}
