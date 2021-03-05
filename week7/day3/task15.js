// join

const joinMy = (arr) =>{
    let s = [];

    for (let i = 0; i < arr.length; i++) {
        if( i === arr.length-1){
            s += arr[i];
        }
        else{
            s += arr[i] +","
        }
    }
return s;
}
console.log(joinMy(["Banana", "Orange", "Apple", "Mango"]));