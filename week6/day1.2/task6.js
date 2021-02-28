//JavaScript sözünün ilk və son hərfinin yerini dəyişmək. <br>
// Məsələn: javascript => tavascripj

const js = "javascript";
let s = js[js.length-1] + js.slice(1) + js[0];

console.log(s);