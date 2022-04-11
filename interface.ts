interface laptop{
    name:string;
    os:string;
    memory:number;
    storage:number;
    on():void;
    off():void;
}

class Asus implements laptop{
    name: string;
    os:string;
    memory: number;
    storage: number;
    isGaming:boolean = true;
    constructor(name:string, isGaming:boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("is on");
    }
    off(): void{
        console.log("is off");
    }
}

class Macbook implements laptop{
    name: string;
    os:string;
    memory: number;
    storage: number;
    isGaming:boolean = true;
    constructor(name:string, isGaming:boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log("is on");
    }
    off(): void{
        console.log("is off");
    }
}


let asus:Asus = new Asus("ROG",true);