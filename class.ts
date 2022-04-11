

export class User{
    private static yakin:boolean = true;
    private name:string;
    private age:string;
    constructor(name:string, age:string){
        this.name = name;
        this.age = age;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    static getYakin():boolean{
        return this.yakin;
    }
}

// let user = new User("Henry"); //boleh tidak kasih tipe di deklarasi?
// let user2 : User = new User("Wiro");
// console.log(user);
// console.log(user2.getName());

class Admin extends User{
    read:boolean = true;
    write:boolean = true;
    phone:string;
    private _email:string ="";

    constructor(name:string, age: string, phone:string){
        super(name,age);
        this.phone = phone;
    }
    getRole():{read:boolean,write:boolean}{
        return{
            read:this.read,
            write:this.write
        }
    }
    setEmail(value:string){
        this._email = value;
    }
    getEmail():string{
        return this._email;
    }
}

let admin = new Admin("Wiro","24","132123");
console.log(admin.getName());
console.log(admin.getRole());
console.log(admin.phone);
// admin.setEmail = "prawiroht@gmail.com";
console.log(admin.getEmail());
console.log(Admin.getYakin());