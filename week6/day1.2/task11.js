// javaSCRIPT sözün son 3 hərfini kiçik hərflə, VA hissəsini böyük hərflə yazmaq

const a = "javaSCRIPT";

const b = a.slice(-3).toLowerCase();

const c = a.slice(2,4).toUpperCase();

const result = a.slice(0,2) + c + a.slice(5,7) + b;

console.log(result);