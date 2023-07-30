
function calculateGrade(score) {
    if (score < 40) return 'F';
    if (score < 45) return 'E';
    if (score < 50) return 'D';
    if (score < 60) return 'C';
    if (score <= 69) return 'B';
    return 'A';
}

function getResult() {
    const mathScore = parseFloat(document.getElementById('mathScore').value);
    const scienceScore = parseFloat(document.getElementById('scienceScore').value);
    const englishScore = parseFloat(document.getElementById('englishScore').value);
    const historyScore = parseFloat(document.getElementById('historyScore').value);
    const artScore = parseFloat(document.getElementById('artScore').value);

    const scores = [mathScore, scienceScore, englishScore, historyScore, artScore];
    const allScoresFilled = scores.every(score => !isNaN(score) && score >= 0 && score <= 100);

    if (!allScoresFilled) {
        alert("All score fields must be filled with valid numbers between 0 and 100.");
        return;
    }

    const mathGrade = calculateGrade(mathScore);
    const scienceGrade = calculateGrade(scienceScore);
    const englishGrade = calculateGrade(englishScore);
    const historyGrade = calculateGrade(historyScore);
    const artGrade = calculateGrade(artScore);

    document.getElementById('mathGrade').textContent = mathGrade;
    document.getElementById('scienceGrade').textContent = scienceGrade;
    document.getElementById('englishGrade').textContent = englishGrade;
    document.getElementById('historyGrade').textContent = historyGrade;
    document.getElementById('artGrade').textContent = artGrade;

    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / scores.length;
    const remarks = averageScore > 50 ? 'You Passed, super proud of you' : 'You Failed, Try again';

    document.getElementById('totalScore').textContent = `Total Score: ${totalScore}`;
    document.getElementById('averageScore').textContent = `Average Score: ${averageScore.toFixed(2)}`;
    document.getElementById('remarks').textContent = `Remarks: ${remarks}`;
}




































// function Total() {
//     var sub1 = parseInt(document.getElementById("eng").value);
//     var sub2 = parseInt(document.getElementById("mat").value);
//     var sub3 = parseInt(document.getElementById("phy").value);
//     var sub4 = parseInt(document.getElementById("chm").value);
//     var sub5 = parseInt(document.getElementById("cmp").value);


//     if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
//         alert("Please Enter Marks in range of 100");
//     }
//     else {
//         var total = sub1 + sub2 + sub3 + sub4 + sub5;
//         document.getElementById("total").innerHTML = "English Marks :" + sub1 + "<br> Maths Marks: " + sub2 + "<br> Physics Marks: " + sub3 + "<br> Chemistry Marks: " + sub4 + "<br> Computer Marks: " + sub5 + "<br> Total Marks: " + total;
//     }
// }

// function Average() {
//     var sub1 = parseInt(document.getElementById("eng").value);
//     var sub2 = parseInt(document.getElementById("mat").value);
//     var sub3 = parseInt(document.getElementById("phy").value);
//     var sub4 = parseInt(document.getElementById("chm").value);
//     var sub5 = parseInt(document.getElementById("cmp").value);

//     if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
//         alert("Please Enter Marks in range of 100");
//     }
//     else {
//         var total = sub1 + sub2 + sub3 + sub4 + sub5;
//         var avg = total / 5;
//         document.getElementById("avg").innerHTML = "Your Average marks are: " + avg;
//     }
// }


// function Grade() {
//     var sub1 = parseInt(document.getElementById("eng").value);
//     var sub2 = parseInt(document.getElementById("mat").value);
//     var sub3 = parseInt(document.getElementById("phy").value);
//     var sub4 = parseInt(document.getElementById("chm").value);
//     var sub5 = parseInt(document.getElementById("cmp").value);

//     if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
//         alert("Please Enter Marks in range of 100");
//     } else {
//         var total = sub1 + sub2 + sub3 + sub4 + sub5;
//         var avg = total / 5;

//         if (avg >= 80 && avg <= 100) {
//             document.getElementById("grade").innerHTML = "You Got A+ Grade";
//         }
//         else if (avg >= 75 && avg <= 80) {
//             document.getElementById("grade").innerHTML = "You Got A+ Grade";
//         }
//         else if (avg >= 70 && avg <= 75) {
//             document.getElementById("grade").innerHTML = "You Got A Grade";
//         }
//         else if (avg >= 65 && avg <= 70) {
//             document.getElementById("grade").innerHTML = "You Got B Grade";
//         }
//         else if (avg >= 50 && avg <= 60) {
//             document.getElementById("grade").innerHTML = "You Got C Grade";
//         }
//         else if (avg >= 40 && avg <= 50) {
//             document.getElementById("grade").innerHTML = "You Got C Grade";
//         }

//         else {
//             document.getElementById("grade").innerHTML = "You Got F Grade";
//         }


//     }


// }