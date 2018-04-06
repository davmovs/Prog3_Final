class Grass extends KendaniEak {

    constructor(x, y, index) {
        super(x, y, index);
        this.ser = undefined; // Qani vor xoty ser chuni
    }

    bazmanal() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);

            matrix[this.direction[1]][this.direction[0]] = this.index;

            this.multiply = 0;
        }
    }

    intensivBazmanal() {
        this.multiply += 1.35;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);

            matrix[this.direction[1]][this.direction[0]] = this.index;

            this.multiply = 0;
        }
    }
    dandaxBazmanal() {
        this.multiply += 0.65;
        this.direction = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);

            matrix[this.direction[1]][this.direction[0]] = this.index;

            this.multiply = 0;
        }
    }
}