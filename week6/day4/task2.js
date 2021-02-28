// Obyektdəki dəyərlərə əsasən, dövrdən istifadə edərək
// “Adı: Lorem, Familyası: İpsum, Yaşı: 34” olaraq digərlərini də ad, familiya, yaş olaraq console-da çıxarmaq. Sonda bütün age-lərin cəmini(сложить) dövr ilə tapıb console-da göstərin.

var students = [ 
    {
        name: 'John',
        surname: 'Doe',
        age: 41
    },
    {
        name: 'Lorem',
        surname: 'Ipsum',
        age: 34
    },
    {
        name: 'Dummy',
        surname: 'Name',
        age: 24
    }];
let s=0;

    for(let x of students){
        s+=x.age
        console.log(x)
    }
 console.log(s)

