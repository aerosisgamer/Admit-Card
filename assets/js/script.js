function searchStudent(){
    var search_input = document.getElementById("roll_number").value;

    var students = [
        {
            "roll_no":"004", "name":"Aasji Angira", "admit_card_path":"assets/documents/aashi-admit-card.pdf"
        },
        {
            "roll_no":"039", "name":"Anshika", "admit_card_path":"assets/documents/anshika-admit-card.pdf"
        },
        {
            "roll_no":"044", "name":"Anup Mahur", "admit_card_path":"assets/documents/anup-admit-card.pdf"
        },
        {
            "roll_no":"063", "name":"Avinash Goswami", "admit_card_path":"assets/documents/avinash-admit-card.pdf"
        },
        {
            "roll_no":"064", "name":"Ayush Bharadwaj", "admit_card_path":"assets/documents/ayush-admit-card.pdf"
        },
        {
            "roll_no":"071", "name":"Bhumi Arora", "admit_card_path":"assets/documents/bhumi-admit-card.pdf"
        },
        {
            "roll_no":"077", "name":"Chandraveer Singh", "admit_card_path":"assets/documents/chirag-admit-card.pdf"
        },
        {
            "roll_no":"087", "name":"Deepali Gupta", "admit_card_path":"assets/documents/deepali-admit-card.pdf"
        },
        {
            "roll_no":"143", "name":"Himanshi", "admit_card_path":"assets/documents/himanshi-admit-card.pdf"
        },
        {
            "roll_no":"196", "name":"Mamta Rani", "admit_card_path":"assets/documents/mamta-admit-card.pdf"
        },
        {
            "roll_no":"370", "name":"Utkarsh Saxena", "admit_card_path":"assets/documents/utkarsh-admit-card.pdf"
        },
        {
            "roll_no":"372", "name":"Vansh Tomer", "admit_card_path":"assets/documents/vansh-admit-card.pdf"
        },
        {
            "roll_no":"405", "name":"Yash Chauhan", "admit_card_path":"assets/documents/yash-admit-card.pdf"
        },
    ];

    var foundStudent = students.find(student => student.roll_no === search_input);

    if(foundStudent){
        var studentInfo = document.getElementById("student_data");

        studentInfo.innerHTML = `<h2>${foundStudent.roll_no}</h2> <p>${foundStudent.name}</p> <button onclick="downloadAdmitCard('${foundStudent.admit_card_path}')">Download</button>`;
    } else { 
        alert("Student Not Found");
    }
}

function downloadAdmitCard(admit_card_path){
    window.open(admit_card_path, '_blank');
}