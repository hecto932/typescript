var Person = (function () {
    function Person() {
        this.first_name = 'Hector';
        this.last_name = 'Flores';
        this.twitter_user = '@hecto932';
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastName('Flores');
myPerson.first_name = 'Hector';
console.log(myPerson);
