/*
console.log("Hello World!");
const name = "dx212";
console.log("สวัสดี", name);
const  appName = "Kameow";
const passengers = "67";
const isLate = false;

const routes = [ "NGV-1, NGV-2, NGV-3" ];

console.log(appName);
console.log(passengers);
console.log(isLate);
console.log(routes);
console.log(routes[0]);

const bus = {
    route: "NGV-1",
    passengers: 67,
    Late: false,
    plateNumber : "1กข 1234",
};
console.log(bus);
console.log(bus.route);
*/
/*
const score = 67;
let grade ;
/*
if(score >= 85){
    console.log("สอบผ่าน");
}
else{
    console.log("สอบตก");
}
    */
   /*
   if(score >= 85){
    grade = "A";
   }
   else if(score >= 75){
    grade = "B";
   }
   else if(score >= 65){
    grade = "C";
   }
   else if(score >= 55){
    grade = "D";
   }
   else{
    grade = "F";
   }

console.log(`คะแนน ${score} ได้เกรด ${grade}`);
*/
/*
for(let i = 0; i <= 10 ; i++ ){
    console.log(` ${i} Hello`);
}
    */

const student = ["Kameow", "Aommie", "nello", "tangkwa", "Jaja"];
const scores = [67, 75, 85, 90, 100];

function getGrade(score) {
    if (score >= 70) {
        return "Pass";
    } else {
        return "Fail";
    }
}

for (let i = 0; i < student.length; i++) {
    let grade = getGrade(scores[i]);
    console.log(`นักเรียนคนที่ ${i+1} ชื่อ ${student[i]} ได้คะแนน ${scores[i]} ผลการสอบ ${grade}`);
}