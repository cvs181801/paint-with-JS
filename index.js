function setup() {
    createCanvas(windowWidth, windowHeight)
    background('ghostwhite')
  }

  function draw() {
    if (mouseIsPressed) {
      wiggle()
    }
  }

//   function pen() {
//     // set the color and weight of the stroke 
//     stroke(0, 0, 0, 255)
//     strokeWeight(2)
  
//     // draw a line from current mouse point to previous mouse point
//     line(mouseX, mouseY, pmouseX, pmouseY)
//   }

  function wiggle() {
    // set the color and brush style
    stroke(255, 120, 0, 255)
    strokeWeight(2)
    noFill()
  
    // find the distance between the current and previous mouse points
    const distance = dist(mouseX, mouseY, pmouseX, pmouseY)
  
    // find the midpoint between the current and previous mouse points
    const midX = (mouseX + pmouseX) / 2
    const midY = (mouseY + pmouseY) / 2
  
    // find the angle of the direction the mouse is moving in
    const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)
  
    // find which way to flip the arc
    const flip = (frameCount % 2) * PI
  
    // draw the arc as a half circle 
    arc(midX, midY, distance, distance, angle + flip, angle + PI + flip)
  }



  