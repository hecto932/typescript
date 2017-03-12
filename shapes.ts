class Person{
    first_name:string
    last_name:string
    twitter_user:string

    constructor() {
        this.first_name = 'Hector'
        this.last_name = 'Flores'
        this.twitter_user = '@hecto932'
    }

    setLastName(last_name:string) {
        this.last_name = last_name
    }
}

var myPerson = new Person()
myPerson.setLastName('Flores')
myPerson.first_name = 'Hector'
console.log(myPerson)