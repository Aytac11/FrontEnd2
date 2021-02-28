//Obyektdəki dəyərlərə əsasən
//“Adı: Lorem, Familyası: İpsum, Yaşı: 34” olaraq yazın və sonda bütün age-lərin cəmini(сложить) göstərin.

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
    }
  ];

const sum = students[0].age + students[1].age + students[2].age;
console.log(sum);