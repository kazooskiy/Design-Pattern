function Person(name, state) {
    this.name = name;
    this.state = state;
}

function PersonFactory() {
    this.create = function(name) {
        return new Caretaker(name);
    };
}

Person.prototype = {
    hydrate: function() {

        var memento = JSON.stringify(this);
        return memento;
    },
    dehydrate: function(memento) {

        var m = JSON.parse(memento);

        this.name = m.name;
        this.state = m.state;
    }
}

var CareTaker = function() {

    this.mementos = {};

    this.add = function(key, memento) {
        this.mementos[key] = memento;
    },
    this.get = function(key) {
        return this.mementos[key];
    }
}

function run() {

    var bill = new Person("Bill Smith", "NJ");
    var john = new Person("John Kin", "NY");

    var caretaker = new CareTaker();

    // save state

    caretaker.add(1, bill.hydrate());
    caretaker.add(2, john.hydrate());

    // mess up their names

    mike.name = "Likes Dogs";
    john.name = "Likes Cat";

    // restore original state

    bill.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    z=document.getByElementId("Behavioral");
    z.getInnerHTML=bill.name;
    z.getInnerHTML=john.name;
}