class MyPerson{
    first_name:string
    last_name:string
    constructor(_first_name?:string, _last_name?:string){
        console.log(_first_name, _last_name)
        /*this.first_name = _first_name
        this.last_name = _first_name*/
    }
}

let personaUno = new MyPerson()
let personaDos = new MyPerson('Hector')
let personaTres = new MyPerson('Hector', 'Flores')