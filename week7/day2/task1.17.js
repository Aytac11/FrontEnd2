// Verilmiş iki array-ın ən az bir ortaq (common) ədədin olmasını yoxlamaq. Varsa həmin ədədi(ədədləri) göstərmək. Yoxdursa false göstərmək.
// Məsələn: [3,10,2,5], [11, 50,2,51] => 2 ||| [3,10,2,5], [11,50,2,3] => 2, 3 ||| [3,10,2], [11,50,3] => false

const Find = (arr1,arr2) =>{
    let s = "";
    let isExist;
    for(let i=0; i<arr1.length; i++){
        isExist = false;
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                isExist = true;
                s += arr2[j] + " ";
            }
           
        }
        
        
    }
     if(s == ""){
            return false;
        }
    return s;
}



console.log(Find([3,10,2,5], [11, 50,2,51]));
console.log(Find([3,10,2,5], [11,50,2,3]));
console.log(Find([10,2], [11,50,3]));

