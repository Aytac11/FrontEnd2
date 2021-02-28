// Verilmiş array-ın verilmiş rəqəmindən sonra neçə elmentin olmasını yoxlamaq və onları console-da göstərmək

// Məsələn: [10,20,30,40,50,60,70], 50 => 2 element, 60, 70

const arr = [10,20,30,40,50,60,70];

const a = 40;

const index = arr.indexOf(a);

console.log(`${arr.slice(index+1).length} element, ${arr.slice(index+1)}`);

