//function for if user choses yes to disclose gift information 
function displayText(){
    if(document.getElementById("answerY").checked){
       document.getElementById("giftInfo").style.display = "block";
    }
    else {(document.getElementById("answerN").checked)
        document.getElementById("giftInfo").style.display ="none";
    }
}

function mail(){

    let params = {
        first_name: document.getElementById("myFName").value,
        last_name: document.getElementById("myLName").value,
        category: document.getElementById("category").value,
        answer: document.getElementById("giftInfo").value,
        answer2: document.getElementById("answerN").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_ruy9xnn";
    const templateID ="template_6qiougq";

    emailjs.send(serviceID,templateID,params).then(alert("Email Sent!"))
}