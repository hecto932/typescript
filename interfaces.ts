interface MyPersona{
    first_name:string
    last_name:string
    twitter_account?:string
}

let personaUno:MyPersona = {
    first_name:'Hector',
    last_name:'Flores',
    twitter_account: '@hecto932'
}

let personaDos:MyPersona = {
    first_name:'Victoria',
    last_name:'Acosta'
}

console.log(personaUno)
console.log(personaDos)
