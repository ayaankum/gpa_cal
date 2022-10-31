function show_result() {
    let mat = document.querySelector("#mat").value;
    let chem = document.querySelector("#chem").value;
    let psp = document.querySelector("#psp").value;
    let eln = document.querySelector("#eln").value;
    let eme = document.querySelector("#eme").value;
    let eng = document.querySelector("#eng").value;
    let sfh = document.querySelector("#sfh").value;
    let chemL = document.querySelector("#chemL").value;
    let cpl = document.querySelector("#cpl").value;

    let total = parseFloat(mat) + parseFloat(chem) + parseFloat(psp) + parseFloat(eln) + parseFloat(eme) + parseFloat(eng) + parseFloat(sfh) + parseFloat(chemL) + parseFloat(cpl);
    document.querySelector(".total").innerHTML = total;

    let per = (total / 900) * 100;
    document.querySelector(".per").innerHTML = per.toFixed(2)+"%";


    let Gsum = 0, gpa = 0, creditSum = 0;
    let gradePoint = new Array();
    let credit = new Array(3, 3, 3, 3, 3, 2, 1, 1, 1);
    let marks = new Array(parseFloat(mat), parseFloat(chem), parseFloat(psp), parseFloat(eln), parseFloat(eme), parseFloat(eng), parseFloat(sfh), parseFloat(chemL), parseFloat(cpl))

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 0 && marks[i] <= 39) {
            gradePoint[i] = 0;
        }
        else if (marks[i] >= 40 && marks[i] <= 49) {
            gradePoint[i] = 4;
        }
        else if (marks[i] >= 50 && marks[i] <= 54) {
            gradePoint[i] = 5;
        }
        else if (marks[i] >= 55 && marks[i] <= 59) {
            gradePoint[i] = 6;
        }
        else if (marks[i] >= 60 && marks[i] <= 69) {
            gradePoint[i] = 7;
        }
        else if (marks[i] >= 70 && marks[i] <= 79) {
            gradePoint[i] = 8;
        }
        else if (marks[i] >= 80 && marks[i] <= 89) {
            gradePoint[i] = 9;
        }
        else if (marks[i] >= 90 && marks[i] <= 100) {
            gradePoint[i] = 10;
        }
    }
    for (let i = 0; i < credit.length; i++) {
        creditSum = creditSum + credit[i];
    }
    for (let i = 0; i < marks.length; i++) {
        Gsum = Gsum + parseFloat(gradePoint[i] * credit[i]);
    }

    gpa = Gsum / creditSum;

    document.querySelector(".gpa").innerHTML = gpa.toFixed(2);







}