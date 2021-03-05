// substr()

//----------------- step1-------------------

// const substrMy=(str,start, len) =>{
//     end = start +len;
//     let s ="";
    
//     if(len === 0 && start >0){
//         for (let i = start; i < str.length; i++) {
//             s += str[i];
//         }
//     }
//     if(start < 0){
//         start2 = str.length + start;
//         for (let i = start2; i < str.length; i++) {
//             s += str[i];
//         }
//     }
//     else{
//         for (let i = start; i < end; i++) {
//             s += str[i];
//         }
//     }
//     return s;
// }

//---------------------step2-----------------------------

// let substrMy1 = (str,start) => {
//     let s ="";
//     if(start >0){
//         for (let i = start; i < str.length; i++) {
//             s += str[i];
//         }
//     }
//     if(start<0){
//         start2 = str.length + start;
//         for (let i = start2; i < str.length; i++) {
//             s += str[i];
//         }
//     }
//     return s;
// }

// let substrMy2 = (str, start, len)=>{
//     end = start +len;
//     let s ="";
//     for (let i = start; i < end; i++) {
//         s += str[i];
//     }
//     return s;
// }

// ---------------finally step------------------


function substrMy(str,start,len) {
    let s ="";
    if (arguments.length == 2) {
            if(start >0){
                for (let i = start; i < str.length; i++) {
                    s += str[i];
                }
            }
            if(start<0){
                start2 = str.length + start;
                for (let i = start2; i < str.length; i++) {
                    s += str[i];
                }
            }
    }
    if(arguments.length == 3){
        let end;
        end = start +len;
        for (let i = start; i < end; i++) {
            s += str[i];
        }
    }
    return s;
  }

console.log(substrMy("Apple, Banana, Kiwi",-4));
console.log(substrMy("Apple, Banana, Kiwi",4));
console.log(substrMy("Apple, Banana, Kiwi",0,8));