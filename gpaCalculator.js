// gpa calculator  

function calculate() {
    //variables to store  grade point of each subject
    let gradePoint1 = 0.0,gradePoint2 = 0.0,gradePoint3 = 0.0,gradePoint4 = 0.0,gradePoint5 = 0.0,gradePoint6 = 0.0,gradePoint7 = 0.0;
    // to store marks of each subject
    let subj1=0.0,subj2=0.0,subj3=0.0,subj4=0.0,subj5=0.0,subj6=0.0,subj7=0.0;
    // to store credit hours of each subject
    let cr1=0,cr2=0,cr3=0,cr4=0,cr5=0,cr6=0,cr7=0;
    // to store gpa
    let cgpa=0.0;
    //to store total grade points
    let totalGradePoints = 0.0;
    // total credit hours
    let totalCreditHours = 0;
    // getting subject 1 marks from field
    subj1 = parseFloat(document.getElementById("subj1").value) || 0;
    // getting credit hours of subject 1 from field
    cr1 = parseInt(document.getElementById("cr1").value) || 0;
    if(subj1 >=85){
        gradePoint1 = 4.00;
    } else if (subj1 >=80 && subj1 <=84) {
        gradePoint1 = 3.70;
    } else if (subj1 >=75 && subj1 <=79) {
        gradePoint1 = 3.30;
    } else if (subj1 >=70 && subj1 <=74) {
        gradePoint1 = 3.00;
    } else if (subj1 >=65 && subj1 <=69) {
        gradePoint1 = 2.70;
    } else if (subj1 >=61 && subj1 <=64) {
        gradePoint1 = 2.30;
    } else if (subj1 >=58 && subj1 <=60) {
        gradePoint1 = 2.00;
    } else if (subj1 >=55 && subj1 <=57) {
        gradePoint1 = 1.70;
    } else if (subj1 >=50 && subj1 <=54) {
        gradePoint1 = 1.00;
    } else if (subj1 >=0 && subj1 <=49) {
        gradePoint1 = 0.00;
    } 
    // getting subject 2 marks from field
    subj2 = parseFloat(document.getElementById("subj2").value) || 0;
    // getting credit hours of subject 2 from field
    cr2 = parseInt(document.getElementById("cr2").value) || 0;
    console.log(cr2);
    if(subj2 >=85){
        gradePoint2 = 4.00;
    } else if (subj2 >=80 && subj2 <=84) {
        gradePoint2 = 3.70;
    } else if (subj2 >=75 && subj2 <=79) {
        gradePoint2 = 3.30;
    } else if (subj2 >=70 && subj2 <=74) {
        gradePoint2 = 3.00;
    } else if (subj2 >=65 && subj2 <=69) {
        gradePoint2 = 2.70;
    } else if (subj2 >=61 && subj2 <=64) {
        gradePoint2 = 2.30;
    } else if (subj2 >=58 && subj2 <=60) {
        gradePoint2 = 2.00;
    } else if (subj2 >=55 && subj2 <=57) {
        gradePoint2 = 1.70;
    } else if (subj2 >=50 && subj2 <=54) {
        gradePoint2 = 1.00;
    } else if (subj2 >=0 && subj2 <=49) {
        gradePoint2 = 0.00;
    }  
    // getting subject 3 marks from field
    subj3 = parseFloat(document.getElementById("subj3").value) || 0;
    // getting credit hours of subject 3 from field
    cr3 = parseInt(document.getElementById("cr3").value) || 0;
    console.log(cr3);
    if(subj3 >=85){
        gradePoint3 = 4.00;
    } else if (subj3 >=80 && subj3 <=84) {
        gradePoint3 = 3.70;
    } else if (subj3 >=75 && subj3 <=79) {
        gradePoint3 = 3.30;
    } else if (subj3 >=70 && subj3 <=74) {
        gradePoint3 = 3.00;
    } else if (subj3 >=65 && subj3 <=69) {
        gradePoint3 = 2.70;
    } else if (subj3 >=61 && subj3 <=64) {
        gradePoint3 = 2.30;
    } else if (subj3 >=58 && subj3 <=60) {
        gradePoint3 = 2.00;
    } else if (subj3 >=55 && subj3 <=57) {
        gradePoint3 = 1.70;
    } else if (subj3 >=50 && subj3 <=54) {
        gradePoint3 = 1.00;
    } else if (subj3 >=0 && subj3 <=49) {
        gradePoint3 = 0.00;
    }  
   // getting subject 4 marks from field
    subj4 = parseFloat(document.getElementById("subj4").value) || 0;
    // getting credit hours of subject 4 from field
    cr4 = parseInt(document.getElementById("cr4").value) || 0;
    if(subj4 >=85){
        gradePoint4 = 4.00;
    } else if (subj4 >=80 && subj4 <=84) {
        gradePoint4 = 3.70;
    } else if (subj4 >=75 && subj4 <=79) {
        gradePoint4 = 3.30;
    } else if (subj4 >=70 && subj4 <=74) {
        gradePoint4 = 3.00;
    } else if (subj4 >=65 && subj4 <=69) {
        gradePoint4 = 2.70;
    } else if (subj4 >=61 && subj4 <=64) {
        gradePoint4 = 2.30;
    } else if (subj4 >=58 && subj4 <=60) {
        gradePoint4 = 2.00;
    } else if (subj4 >=55 && subj4 <=57) {
        gradePoint4 = 1.70;
    } else if (subj4 >=50 && subj4 <=54) {
        gradePoint4 = 1.00;
    } else if (subj4 >=0 && subj4 <=49) {
        gradePoint4 = 0.00;
    }  
   // getting subject 5 marks from field
    subj5 = parseFloat(document.getElementById("subj5").value) || 0;
    // getting credit hours of subject 5 from field
    cr5 = parseInt(document.getElementById("cr5").value) || 0;
    if(subj5 >=85){
        gradePoint5 = 4.00;
    } else if (subj5 >=80 && subj5 <=84) {
        gradePoint5 = 3.70;
    } else if (subj5 >=75 && subj5 <=79) {
        gradePoint5 = 3.30;
    } else if (subj5 >=70 && subj5 <=74) {
        gradePoint5 = 3.00;
    } else if (subj5 >=65 && subj5 <=69) {
        gradePoint5 = 2.70;
    } else if (subj5 >=61 && subj5 <=64) {
        gradePoint5 = 2.30;
    } else if (subj5 >=58 && subj5 <=60) {
        gradePoint5 = 2.00;
    } else if (subj5 >=55 && subj5 <=57) {
        gradePoint5 = 1.70;
    } else if (subj5 >=50 && subj5 <=54) {
        gradePoint5 = 1.00;
    } else if (subj5 >=0 && subj5 <=49) {
        gradePoint5 = 0.00;
    }
    // getting subject 6 marks from field
    subj6 = parseFloat(document.getElementById("subj6").value) || 0;
    // getting credit hours of subject 6 from field
    cr6 = parseInt(document.getElementById("cr6").value) || 0;
    if(subj6 >=85){
        gradePoint6 = 4.00;
    } else if (subj6 >=80 && subj6 <=84) {
        gradePoint6 = 3.70;
    } else if (subj6 >=75 && subj6 <=79) {
        gradePoint6 = 3.30;
    } else if (subj6 >=70 && subj6 <=74) {
        gradePoint6 = 3.00;
    } else if (subj6 >=65 && subj6 <=69) {
        gradePoint6 = 2.70;
    } else if (subj6 >=61 && subj6 <=64) {
        gradePoint6 = 2.30;
    } else if (subj6 >=58 && subj6 <=60) {
        gradePoint6 = 2.00;
    } else if (subj6 >=55 && subj6 <=57) {
        gradePoint6 = 1.70;
    } else if (subj6 >=50 && subj6 <=54) {
        gradePoint6 = 1.00;
    } else if (subj6 >=0 && subj6 <=49) {
        gradePoint6 = 0.00;
    }
    // getting subject 7 marks from field
    subj7 = parseFloat(document.getElementById("subj7").value) || 0;
    // getting credit hours of subject 7 from field
    cr7 = parseInt(document.getElementById("cr7").value) || 0;
    if(subj7 >=85){
        gradePoint7 = 4.00;
    } else if (subj7 >=80 && subj7 <=84) {
        gradePoint7 = 3.70;
    } else if (subj7 >=75 && subj7 <=79) {
        gradePoint7 = 3.30;
    } else if (subj7 >=70 && subj7 <=74) {
        gradePoint7 = 3.00;
    } else if (subj7 >=65 && subj7 <=69) {
        gradePoint7 = 2.70;
    } else if (subj7 >=61 && subj7 <=64) {
        gradePoint7 = 2.30;
    } else if (subj7 >=58 && subj7 <=60) {
        gradePoint7 = 2.00;
    } else if (subj7 >=55 && subj7 <=57) {
        gradePoint7 = 1.70;
    } else if (subj7 >=50 && subj7 <=54) {
        gradePoint7 = 1.00;
    } else if (subj7 >=0 && subj7 <=49) {
        gradePoint7 = 0.00;
    }
    // calculating total grade points
    totalGradePoints = (gradePoint1*cr1) + (gradePoint2*cr2) + (gradePoint3*cr3) + (gradePoint4*cr4) + (gradePoint5*cr5) + (gradePoint6*cr6) + (gradePoint7*cr7);
    // calculating total credit hours
    totalCreditHours = (cr1 + cr2 + cr3 + cr4 + cr5 + cr6 + cr7);
    // calculating gpa
    cgpa = (totalGradePoints/totalCreditHours).toFixed(2);
    // display gpa 
    document.getElementById("show").innerHTML = `Your GPA is ${cgpa}`;
}