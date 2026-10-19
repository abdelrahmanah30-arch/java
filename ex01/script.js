function calculateGrade(score){
    if (typeof score !== "number" ||
        !Number.isFinite(score) ||
        score < 0 || score > 100){
        return "Invalid score"
    }
    if (score >= 85){
    return "A"
    } else if (score >= 76){
        return "B"
    } else if (score >= 69){
        return "C"
    } else if (score >= 50){
        return "D"
    } 
    return "F"
}

function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true
    }
    return false
}

console.log(calculateGrade(0));
console.log(calculateGrade("hello"));
console.log(calculateGrade(1001));
console.log(calculateGrade(75));
console.log(calculateGrade(85));
console.log(calculateGrade(84));
console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(100));
console.log(calculateGrade(-1));

console.log(checkAccess(52, false));
console.log(checkAccess(25, true));
console.log(checkAccess(15, true));
console.log(checkAccess(15, false));
