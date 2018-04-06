class Xotaker extends KendaniEak {
  constructor(x, y, index) {
    super(x, y, index);
    this.lives = 8;
    this.energy = 8;
    this.keracXot = 0;
  }
  stanalNorKordinatner() {
    return super.stanalNorKordinatner();
  }
  yntrelVandak(ch) {
    this.stanalNorKordinatner();
    return super.yntrelVandak(ch);
  }

  seriVoroshum() {
    return super.seriVoroshum();
  }

  sharjvel() {
    this.stanalNorKordinatner();
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      this.lives -= 1;
      this.energy -= 1;
      matrix[this.y][this.x] = 0;
      matrix[norVandak[1]][norVandak[0]] = 2;
      this.x = norVandak[0];
      this.y = norVandak[1];
    }
  }

  utel() {
    this.stanalNorKordinatner();
    var xotiVandak = random(this.yntrelVandak(1));
    if (xotiVandak) {
      this.keracXot += 1;
      if (this.lives < 5) {
        this.lives += 1;
      }
      if (this.energy < 8) {
        this.energy += 1;
      }
      matrix[this.y][this.x] = 0;
      matrix[xotiVandak[1]][xotiVandak[0]] = 2;
      this.x = xotiVandak[0];
      this.y = xotiVandak[1];
      for (var el in grassArr) {
        if (grassArr[el].x == this.x && grassArr[el].y == this.y) {
          grassArr.splice(el, 1);

        }
      }
    } else {
      this.sharjvel();
    }
  }

  mernel() {
    if (this.lives <= 0) {
      matrix[this.y][this.x] = 0;
      for (var el in xotakerArr) {
        if (xotakerArr[el].x == this.x && xotakerArr[el].y == this.y) {
          xotakerArr.splice(el, 1);
        }
      }
    }
  }

  bazmanal() {
    // if (this.ser == 'Txa') {
    //   this.stanalNorKordinatner();
    //   var xotakeriNorVandak = random(this.yntrelVandak(2));
    //   if (xotakeriNorVandak && xotakeriNorVandak.s) {
    //     if (this.energy == 8 && this.lives >= 3 && (this.keracXot % 10 == 0)) {
    //       this.lives -= 1;
    //       this.energy = 4;
    //       var norKendani = new Xotaker(xotakeriNorVandak[0], xotakeriNorVandak[1]);
    //       matrix[xotakeriNorVandak[1]][xotakeriNorVandak[0]] = 2;
    //       norKendani.seriVoroshum();
    //       xotakerArr.push(norKendani);
    //     }
    //   }
    // }

    this.stanalNorKordinatner();
    var xotakerAxjik = random(this.yntrelVandak(this.index));
    var norVandak = random(this.yntrelVandak(0));
    function seriStugum() {
      var obj;
      for (var el in xotakerArr) {
        if (xotakerAxjik[0] == xotakerArr[el].x && xotakerAxjik[1] == xotakerArr[el].y) {
          obj = xotakerArr[el];
          return obj;
        }
      }
    }

    if (xotakerAxjik && this.isMaleTrue && !seriStugum.isMaleTrue && norVandak) {
      if (this.lives >= 8 && this.energy > 6) {
        console.log("Test");
        this.lives -= 1;
        this.energy = 4;
        matrix[norVandak[1]][norVandak[0]] = 2;
        var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2);
        norXotaker.seriVoroshum();
        xotakerArr.push(norXotaker);
      }
    }
  }

  dandaxBazmanal() {
    this.stanalNorKordinatner();
    var xotakerAxjik = random(this.yntrelVandak(this.index));
    var norVandak = random(this.yntrelVandak(0));
    function seriStugum() {
      var obj;
      for (var el in xotakerArr) {
        if (xotakerAxjik[0] == xotakerArr[el].x && xotakerAxjik[1] == xotakerArr[el].y) {
          obj = xotakerArr[el];
          return obj;
        }
      }
    }

    if (xotakerAxjik && this.isMaleTrue && !seriStugum.isMaleTrue && norVandak) {
      if (this.lives >= 8 && this.energy > 6) {
        console.log("Test");
        this.lives -= 2;
        this.energy = 2;
        matrix[norVandak[1]][norVandak[0]] = 2;
        var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2);
        norXotaker.seriVoroshum();
        xotakerArr.push(norXotaker);
      }
    }
  }

  intensivBazmanal() {
    this.stanalNorKordinatner();
    var xotakerAxjik = random(this.yntrelVandak(this.index));
    var norVandak = random(this.yntrelVandak(0));
    function seriStugum() {
      var obj;
      for (var el in xotakerArr) {
        if (xotakerAxjik[0] == xotakerArr[el].x && xotakerAxjik[1] == xotakerArr[el].y) {
          obj = xotakerArr[el];
          return obj;
        }
      }
    }

    if (xotakerAxjik && this.isMaleTrue && !seriStugum.isMaleTrue && norVandak) {
      if (this.lives >= 8 && this.energy > 6) {
        console.log("Test");
        this.lives -= 0.5;
        this.energy = 6;
        matrix[norVandak[1]][norVandak[0]] = 2;
        var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2);
        norXotaker.seriVoroshum();
        xotakerArr.push(norXotaker);
      }
    }
  }

  qnel() {
    this.lives -= 0.1;
    this.energy -= 0.2;
  }
}
