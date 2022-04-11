// tipe data Object

// kayak bikin class, pake type
type User={
    name:string,
    age:number,
    alamat?:string  //pake tanda tanya buat jadi opsional
                    //ga wajib diisi
}
let user:User = {
    name:"Luki",
    age : 23,
    // alamat:"Rumah"
};

console.log(user);