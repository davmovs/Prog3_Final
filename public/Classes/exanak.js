class Exanak {
    constructor() {
        this.status = 0;
        this.exanak;
        this.days = 0;
    }

    exanakiPopoxutyun() {
        if (this.days == 30) {
            this.status++;
            this.days = 0;
        }
        if(this.status > 3){
            this.status = 0;
        }
        this.days++
    }


    exanakiVoroshum() {
        switch(this.status){
            case 0:
                this.exanak = 'Amar';
                break;
            case 1:
                this.exanak = 'Ashun';
                break;
            case 2:
                this.exanak = 'Dzmer';
                break;
            case 3:
                this.exanak = 'Garun';  
                break;
        }
    }
}
