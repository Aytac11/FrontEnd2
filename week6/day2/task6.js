// Hazırki tarixi götürüb yoxlayın ki, həftəsonu-durmu. Əgər həftəsonudursa true, əks halda false yazın.

const date = new Date();
const current_day = date.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekends = ["Saturday","Sunday"];

if(days[current_day] == weekends[0] || days[current_day] == weekends[1]){
    console.log("true");
}
else{
    console.log("false");
}


