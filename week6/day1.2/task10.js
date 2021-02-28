// 'adada adamlar var' cümləsində a hərfi neçə dəfə istifadə olunub tapmaq. Cavab: 7

//-------------method1-----------//

// const sen = 'adada adamlar var';
// let count = 0;
// for(let i=0; i<sen.length; i++){
//     if(sen[i] === 'a'){
//         count++;
//     }
// }

// console.log(count);

//-------------method2---------------//
console.log('adada adamlar var'.split('a').length - 1);