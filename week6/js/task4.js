//ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== null && arr[i] !== true && arr[i] !== false) {
        newArr += Number(arr[i]) + " ";
    }
}

console.log(newArr)