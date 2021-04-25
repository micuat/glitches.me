
var s = function (p) {
  let name;
  let currents = [];
  let n = 16 + 1;
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(30);
    for (let k = 0; k < 20; k++) {
      currents.push(p.floor(p.random(n * n)));
    }
  }

  p.draw = function () {
    p.background(0);
    p.stroke(255);

    if (p.frameCount % 60 == 0) {
      currents = [];
      for (let k = 0; k < 20; k++) {
        currents.push(p.floor(p.random(n * n)));
      }
    }

    let theta = p.frameCount / 30.0 * 0.5 * 2 * Math.PI;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let l = Math.max(p.width, p.height) / (n - 1);
        let hl = l * 0.5;
        p.push();
        p.translate((j + 0) * l, (i + 0) * l);

        for (let k in currents) {
          if (i * n + j == currents[k])
            hl *= 1.0 - p.pow(1.0 - p.map(Math.cos(theta), -1, 1, 0, 1), 4.0);
        }
        p.line(-hl, 0, hl, 0);
        p.line(0, -hl, 0, hl);
        p.pop();
      }
    }
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

var p052 = new p5(s, document.getElementById('p5sketch'));
