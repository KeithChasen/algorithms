//FACTORY
class Employee {
    name
    type

    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`Hi, my name is ${this.name} and I'm a ${this.type}`)
    }
}

class Developer extends Employee {
    type = 'developer';
}
class Tester extends Employee {
    type = 'tester';
}

class EmployeeFactory {
    create(name, type) {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('John', 1));
employees.push(employeeFactory.create('Stan', 2));

employees.forEach(e => e.say());

// Iterator
class Iterator {
    items;
    index;

    constructor(items, index) {
        this.items = items;
        this.index = index;
    }

    hasNext() {
        return this.index < this.items.length;
    }

    next() {
        return this.items[this.index++];
    }
}

const items = [1, 'keith', false, 1.33];

const iterator = new Iterator(items, 0);

while(iterator.hasNext())
    console.log(iterator.next());
