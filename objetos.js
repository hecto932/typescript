var MyPerson = (function () {
    function MyPerson(_first_name, _last_name) {
        console.log(_first_name, _last_name);
        /*this.first_name = _first_name
        this.last_name = _first_name*/
    }
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson('Hector');
var personaTres = new MyPerson('Hector', 'Flores');
