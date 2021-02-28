// Verilmiş faylın genişlənməsini tapmaq <br>
//	Məsələn: pic.jpeg => jpeg, music.mp3 => mp3

// const file = "pic.aytac.jpeg";
// let index;

// method 1
// for( let i=0; i<file.length;i++){
//     if(file[i] == "."){
//        index = i+1;
//     }
//     s = file.slice(index);
// }

// console.log(s);

// method 2
const file = 'pic.aytac.photo.ai';
const lastDotIndex = file.lastIndexOf('.');
console.log(file.slice(lastDotIndex + 1));
// console.log(file.slice(file.lastIndexOf('.') + 1));
