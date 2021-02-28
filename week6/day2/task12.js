//Verilmiş sözün, verilmiş hərfindən 3 hərf sonrakı hərfi tapıb, göstərmək. Əgər belə bir hərf yoxdursa, sözün 1 və 2-ci hərfini göstərmək.
//Məsələn: teyyare, e => a,  proqramlasdirma, m => s,  javascript, p => ja,  at, a => at

const word = "at";
const letter = "a";

if(word.length - (word.indexOf(letter)+3) <= 0){
    const m = word.slice(0,2);
    console.log(m);
}
else{
    const n = word[word.indexOf(letter)+3];
    console.log(n);
}

