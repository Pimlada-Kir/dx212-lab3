const scores = [72, 88, 95, 60, 81]
let sum = 0;
for(let i = 0; i < scores.length; i++){
    sum =sum + scores[i];
}
console.log("รวม:", sum, "เฉลี่ย:", sum / scores.length);

let max = scores[0];
for(let i = 0; i < scores.length; i++){
    if(scores[i] > max){
        max = scores[i];
    }
}
console.log(`คะแนนสูงสุด: ${max} คะแนน`);

let countOver80 = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] > 80){ 
        countOver80++;
    }
}
console.log(`จำนวนคนที่ได้คะแนนมากกว่า 80 คะแนน มีทั้งหมด: ${countOver80} คน`);