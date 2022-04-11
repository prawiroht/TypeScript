
// tuple
let student :[string,string,number] = ["malik","bryan",50];
// ubah value tuple
student[1] = 'akbar';
console.log(student);
// console.log(student[100]); //error typescript karena panjang hanya sampai 3


enum gender{male=0,female=1,unknown=2};
let jenisKelamin:gender = gender.male;
console.log(jenisKelamin);