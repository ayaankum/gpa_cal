function show_result() {
    let mat1 = document.querySelector("#mat1").value;
    let phy = document.querySelector("#phy").value;
    let ele = document.querySelector("#ele").value;
    let civ = document.querySelector("#civ").value;
    let egdl = document.querySelector("#egdl").value;
    let eng1 = document.querySelector("#eng1").value;
    let idt = document.querySelector("#idt").value;
    let phyL = document.querySelector("#phyL").value;
    let eleL = document.querySelector("#eleL").value;

    let total = parseFloat(mat1) + parseFloat(phy) + parseFloat(ele) + parseFloat(civ) + parseFloat(egdl) + parseFloat(eng1) + parseFloat(idt) + parseFloat(phyL) + parseFloat(eleL);
    document.querySelector(".total").innerHTML = total;

    let per = (total / 900) * 100;
    document.querySelector(".per").innerHTML = per.toFixed(2)+"%";


    let Gsum = 0, gpa = 0, creditSum = 0;
    let gradePoint = new Array();
    let credit = new Array(3, 3, 3, 3, 3, 2, 1, 1, 1);
    let marks = new Array(parseFloat(mat1), parseFloat(phy), parseFloat(ele), parseFloat(civ), parseFloat(egdl), parseFloat(eng1), parseFloat(idt), parseFloat(phyL), parseFloat(eleL))

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