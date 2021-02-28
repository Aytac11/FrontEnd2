// Size 2 dene melumat verilir 1)Size bir cumle verilir,2)Size bir soz verilir.
//     Siz sozun cumlede istirak edib etmediyini tapmalisiniz ve hemcinin eger o soz
//     cumlede istirak edibse nece defe istirak etdiyinin sayini tapan proqram yazin
//     Example: 'Welcome to w3schools.w3schools.com' verilen cumle budur
//     Verilen soz ise: w3schools
//     Cavab=> True-count is 2

const sen = 'w3schools Welcome toschools.com';
const word = 'w3schools';
let count = 0;

for(let i = 0; i < sen.length - word.length; i++){
    let j;
    for ( j = 0;  j < word.length;  j++) {
        if(sen[i + j] !== word[j]){
            break;
        }
        
    }

    if(j == word.length){
        count++;
    }
}
if(count !== 0){
    console.log("true-",count)
}

else{
    console.log("false")
}