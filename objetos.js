var MyPerson = (function () {
    function MyPerson(_first_name, _last_name) {
        console.log(_first_name, _last_name);
        this.first_name = _first_name;
        this.last_name = _first_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = ':)';
        return "Saludos:\n        " + this.first_name + " " + this.last_name + ",\n        te enviamos un emoji de la consola.\n        " + emojis;
    };
    return MyPerson;
}());
var personaTres = new MyPerson('Hector', 'Flores');
console.log(personaTres.getSaludo());
