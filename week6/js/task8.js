//ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın

let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

let sait = ['a', 'i', 'o', 'u', 'e'];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === String) {
        newArr += arr[i];
    }
}
console.log(newArr);