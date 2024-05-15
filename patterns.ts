//Strategy

type Package {
    from: string;
    to: string;
    weight: number;
}

interface Strategy {
    calculate(package): number;
}

class ShipStrategy implements Strategy {
    calculate(package: Package): number {
        //calculate and return price
        return 15;
    }
}

class CarStrategy implements Strategy {
    calculate(package: Package): number {
        //calculate and return price
        return 5;
    }
}

class PlaneStrategy implements Strategy {
    calculate(package: Package): number {
        //calculate and return price
        return 10;
    }
}

class Shipping {
    strategy;

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    calculate(package: Package) {
        return this.strategy.calculate(package);
    }
}

const package: Package = { from: 'A', to: 'B', weight: 10 };

const shipping = new Shipping();
shipping.setStrategy(new CarStrategy());
shipping.calculate(package);
