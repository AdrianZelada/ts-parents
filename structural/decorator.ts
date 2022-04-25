interface IWage {
    calcule(): number;
}

class Wage implements IWage{
    private rating: number;
    private hour: number;

    constructor(r: number, h: number) {
        this.rating = r;
        this.hour = h;
    }

    calcule(): number {
        return this.rating * this.hour;
    }
}

class WageDecorator implements IWage {
    private wage: IWage;

    constructor(wage: IWage) {
        this.wage = wage;
    }

    calcule(): number {
        return this.wage.calcule();
    }
}

class TaxDecorator extends WageDecorator{
    private tax: number;
    constructor(t: number, w: IWage){
        super(w);
        this.tax = t;
    }

    calcule(): number {
        const total = super.calcule();

        const x = (total * this.tax) / 100;
        return total - x;
    }
}

class SalaryIncreaseDecorator extends WageDecorator{
    private increase: number;
    constructor(i: number, w: IWage){
        super(w);
        this.increase = i;
    }

    calcule(): number {
        const total = super.calcule();
        return total + this.increase;
    }
}


// person A;

const personAWage: IWage = new Wage(10, 8);
console.log('Total Salary');
console.log(personAWage.calcule());

const personATaxDecorator: WageDecorator = new TaxDecorator(14, personAWage);
console.log('Tax');
console.log(personATaxDecorator.calcule());

const personASalaryIncr: WageDecorator = new SalaryIncreaseDecorator(20, personATaxDecorator);
console.log('Salary Increase');
console.log(personASalaryIncr.calcule());