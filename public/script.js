var matrix = [
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
  // [0, 0, 0, 0, 0, 0, 0, 0,],
];


for (var y = 0; y < 24; y++) {
  matrix.push([]);
  for (var x = 0; x < 24; x++) {
    var randNum = Math.floor((4 - 0 + 1) * Math.random() - 0);
    matrix[y][x] = randNum;
  }
}


var side = 12;

var exanak = new Exanak();

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];

function setup() {
  frameRate(10);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
  for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y, 1);
        gr.seriVoroshum();
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var xk = new Xotaker(x, y, 2);
        xk.seriVoroshum();
        xotakerArr.push(xk);
      } else if (matrix[y][x] == 3) {
        var gsh = new Gishatich(x, y, 3);
        gsh.seriVoroshum();
        gishatichArr.push(gsh);
      } else if (matrix[y][x] == 4) {
        var mard = new Mard(x, y, 4);
        mard.seriVoroshum();
        mardArr.push(mard);
      }
    }
  }
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        switch (exanak.status) {
          case 0: // Amar
            fill(91, 249, 0); // green
            break;
          case 1: // Ashun
            fill(206, 226, 118); // yellow & green
            break;
          case 2: // Dzmer
            fill(244, 252, 209); // ligth white
            break;
          case 3: // Garun
            fill(128, 242, 62); // ligth green
            break;
        }
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        switch (exanak.status) {
          case 0: // Amar
            fill("#acacac"); // Yellow
            break;
          case 1: // Ashun
            fill(66, 88, 255); // Yellow
            break;
          case 2: // Dzmer
            fill(255, 255, 255); // Dzyunot yellow
            break;
          case 3: // Garun
            fill("#acacac"); // Yellow
            break;
        }
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        switch (exanak.status) {
          case 0: // Amar
            fill(255, 255, 0); // Yellow
            break;
          case 1: // Ashun
            fill(255, 255, 0); // Yellow
            break;
          case 2: // Dzmer
            fill(252, 255, 130); // Dzyunot yellow
            break;
          case 3: // Garun
            fill(255, 255, 0); // Yellow
            break;
        }
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 3) {
        fill(0, 255, 246);
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 4) {
        fill(215, 9, 214);
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 5) {
        fill(255, 0, 0);
        rect(x * side, y * side, side, side);
      }
    }
  }



  if (grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0 && mardArr.length == 0) {
    for (var y = 0; y < matrix.length; y++) {
      if ((grassArr.length - 1) >= 4) {
        break;
      }
      for (var x = 0; x < matrix[y].length; x++) {
        var randomYForGrass = Math.floor(random(0, matrix.length - 1));
        var randomXForGrass = Math.floor(random(0, matrix[y].length - 1));
        matrix[randomYForGrass][randomXForGrass] = 1;
        var newGrass = new Grass(randomXForGrass, randomYForGrass);
        grassArr.push(newGrass);
      }
    }
  }


  if ((grassArr.length - 1) >= 4 && xotakerArr.length == 0 && gishatichArr.length == 0 && mardArr.length == 0) {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (grassArr.length > 6) {
          if (xotakerArr.length > 2) {
            break;
          }
          var randomXForXotaker = Math.floor(random(0, matrix.length - 1));
          var randomYForXotaker = Math.floor(random(0, matrix[y].length - 1));
          matrix[randomYForXotaker][randomXForXotaker] = 2;
          for (var el in grassArr) {
            if (grassArr[el].x == randomXForXotaker && grassArr[el].y == randomYForXotaker) {
              continue;
            } else if ((xotakerArr.length - 1) <= 5) {
              var norXotaker = new Xotaker(randomXForXotaker, randomYForXotaker);
              xotakerArr.push(norXotaker);
            }
          }
        }
      }
    }
  }


  if ((grassArr.length - 1) >= 6 && (xotakerArr.length - 1) >= 3 && gishatichArr.length == 0 && mardArr.length == 0) {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (xotakerArr.length > 5) {
          break;
        }
        var randomXForGishatich = Math.floor(random(0, matrix[y].length - 1));
        var randomYForGishatich = Math.floor(random(0, matrix[y].length - 1));
        if (matrix[y][x] == 0 && gishatichArr.length <= 4) {
          matrix[randomYForGishatich][randomXForGishatich] = 3;
          var norGishatich = new Gishatich(randomXForGishatich, randomYForGishatich);
          gishatichArr.push(norGishatich);
        } else {
          continue;
        }
      }
    }
  }


  if ((grassArr.length - 1) >= 12 && (xotakerArr.length - 1) >= 6 && (gishatichArr.length - 1) >= 4 && mardArr.length == 0) {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (mardArr.length > 4) {
          break;
        }
        var randomXForMard = Math.floor(random(0, matrix[y].length - 1));
        var randomYForMard = Math.floor(random(0, matrix[y].length - 1));
        if (matrix[y][x] == 0 && mardArr.length <= 2) {
          matrix[randomYForMard][randomXForMard] = 4;
          var norMard = new Mard(randomXForMard, randomYForMard);
          mardArr.push(norMard);
        } else {
          continue;
        }
      }
    }
  }

  event();

  // Exanaki voroshum, popoxutyun, ev artatpum <h1> i mej START

  exanak.exanakiPopoxutyun();
  exanak.exanakiVoroshum();

  document.getElementById('Exanak').innerHTML = "Exanak: " + exanak.exanak;

  // END


  for (var i in grassArr) {
    switch (exanak.status) {
      case 0: // Amar
        grassArr[i].dandaxBazmanal();
        break;
      case 1: // Ashun
        grassArr[i].intensivBazmanal();
      case 2: // Dzmer
        break;
      case 3: // Garun
        grassArr[i].bazmanal();
        break;
    }
  }

  for (var i in xotakerArr) {
    // console.log(xotakerArr[i].ser);
    switch (exanak.status) {
      case 0: // Amar
        xotakerArr[i].utel();
        xotakerArr[i].dandaxBazmanal();
        xotakerArr[i].mernel();
        break;
      case 1: // Ashun
        xotakerArr[i].utel();
        xotakerArr[i].intensivBazmanal();
        xotakerArr[i].mernel();
        break;
      case 2: // Dzmer
        xotakerArr[i].qnel(); // qni mej e mtnum -> chi sharjvum ev utum
        xotakerArr[i].mernel();
        break;
      case 3: // Garun
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mernel();
        break;
    }
  }

  for (var i in gishatichArr) {
    switch (exanak.status) {
      case 0: // Amar
        gishatichArr[i].utel();
        gishatichArr[i].dandaxBazmanal();
        gishatichArr[i].mernel();
        break;
      case 1: // Ashun
        gishatichArr[i].utel();
        gishatichArr[i].intensivBazmanal();
        gishatichArr[i].mernel();
        break;
      case 2: // Dzmer
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].mernel();
        break;
      case 3: // Garun
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].mernel();
        break;
    }
  }

  for (var i in mardArr) {
    switch (exanak.status) {
      case 0: // Amar
        mardArr[i].utel();
        mardArr[i].dandaxBazmanal();
        mardArr[i].mernel();
        break;
      case 1: // Ashun
        mardArr[i].utel();
        mardArr[i].intensivBazmanal();
        mardArr[i].mernel();
        break;
      case 2: // Dzmer
        mardArr[i].utel();
        mardArr[i].bazmanal();
        mardArr[i].mernel();
        break;
      case 3: // Garun
        mardArr[i].utel();
        mardArr[i].bazmanal();
        mardArr[i].mernel();
        break;
    }
  }
}