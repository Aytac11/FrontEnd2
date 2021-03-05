/*
verilmis sozdeki butun tekrar olunan herfleri tapib silmek. eger tekrarlanan herf yoxdursa ele sozun ozunu gostermek
salamlar => smr
proqramlasdirma => poqlsdi
saturn => saturn
*/

const word = "proqramlasdirma";
let s = "";

for(let i = 0; i < word.length; i++){
    let repeat = false;
    let count = 0;
    for(let j = 1; j<word.length; j++){
        if(word[i] == word[j]){
            count++;
            if(count>1){
                repeat = true;
                break;
            }
            
        }
        
    }   
    if(repeat == false){
        s += word[i]
    } 
}
console.log(s)


// for(let i = 0; i < word.length; i++){
//     let repeat = false;
//     for(let j = i+1; j<word.length; j++){
//         if(word[i] == word[j]){
//             repeat = true;
//         }
        
//     }   
//     if(repeat == false){
//         s += word[i]
//     } 
// }
// console.log(s)


// for(let i = 0; i < word.length; i++){
//     let repeat = false;
//     for(let j = 1; j<i; j++){
//         if(word[i] == word[j]){
//             repeat = true;
//         }
        
//     }   
//     if(repeat == false){
//         s += word[i]
//     } 
// }
// console.log(s)
