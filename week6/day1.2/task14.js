//Verilmiş sözdə kiçik hərfləri böyük herflere boyuk herfleri ise kicik herflere ceviren program yazin.
//Example: 'HelloWorld' verilir.Netice hELLOwORLD olmalidir

const sen="HelloWorld";
let newsen=""
for(i=0; i<sen.length; i++){
  if (sen[i]!=sen[i].toLowerCase()){
    newsen +=sen[i].toLowerCase()
  }
  else{
    newsen +=sen[i].toUpperCase()
  }
}
console.log(newsen)

