// 10) Verilmiş 2 array-ın rəqəmlərin hər ikisində olub-olmadığını yoxlamaq.
// Məsələn: [12, 10, 3] və [10, 3, 29, 15] => false
//     [10, 3, 29, 15] və [15, 10, 3, 29] => true


const Find = (arr1,arr2) =>{
    for(let i=0; i<arr1.length; i++){
        let isExist = false;
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] == arr2[j] && arr1.length == arr2.length){
                isExist = true;
                break;
            }
        }
        if(isExist){
            return true;
        }
        else{
            return false;
        }
    }
}



console.log(Find([12, 10, 3], [10, 3, 29, 15]));
console.log(Find([10, 3, 29, 15], [15, 10, 3, 29]));

