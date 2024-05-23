class Person  {
    constructor(name,yob,place,designation="businessman",email,contact){
        this.name=name;
        this.yob=yob;
        this.place=place;
        this.designation=designation;
        this.email=email;
        this.contact=contact;
    }
    getname(){
        return this.name;
    }
    getPlace(){
        return this.place;
    }
    getDesignation(){
        return this.designation;
    }
    getEmail(){
        return this.email;
    }
    getContact(){
        return this.contact;
    }
    getAge(){
        return new Date.getFullYear() - yob;
    }
    toString(){
        return `Hello I'm ${this.name}, from ${this.place}. \nI'm a ${this.designation}, \nthis is my email: ${this.email}, you can also contact me using this number: ${this.contact}`;
    }

}

let me = new Person("mukesh","2003","Chennai","Software developer","mukeshkj2912@gmail.com","0123456789");
console.log(me.toString());