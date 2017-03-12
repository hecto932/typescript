console.log('Hola mundo!')

// Primitives
var full_name:string = "Hector Flores"
var age:number = 27
var developer : boolean = true

// Arrays
var skills:Array<string>= ['Javascript', 'Typescript', 'Angular']
var numberArray:number[] = [123,123, 412, 45]

// Enums
enum Role { Employee, Manager, Admin, Developer }
var role:Role = Role.Employee

console.log('Roles', role)

function setName(name:string):void{
    this.full_name = name
}

function getHello(pretext:string):string{
    return pretext + ' ' + this.full_name
}

function inConsole(nameFunction:any):void{
    console.log(nameFunction)
}

inConsole(getHello('Texto dentro del get hello'))
inConsole(full_name)
inConsole('Hola soy un simple string')

var data: String[] = ['AngularJS', 'Angular', 'Redux', 'ReactJS', 'Vue']
data.forEach((framework) => {
    this.inConsole(framework)
})