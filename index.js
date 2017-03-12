var _this = this;
console.log('Hola mundo!');
// Primitives
var full_name = "Hector Flores";
var age = 27;
var developer = true;
// Arrays
var skills = ['Javascript', 'Typescript', 'Angular'];
var numberArray = [123, 123, 412, 45];
// Enums
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
var role = Role.Employee;
console.log('Roles', role);
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + ' ' + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('Texto dentro del get hello'));
inConsole(full_name);
inConsole('Hola soy un simple string');
var data = ['AngularJS', 'Angular', 'Redux', 'ReactJS', 'Vue'];
data.forEach(function (framework) {
    _this.inConsole(framework);
});
