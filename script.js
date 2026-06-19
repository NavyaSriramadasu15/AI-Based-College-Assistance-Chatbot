// LOGIN FUNCTION

function login() {

    let studentId =
    document.getElementById("studentId").value.trim();

    let email =
    document.getElementById("collegeEmail").value.trim();

    let pass =
    document.getElementById("password").value;



    // STUDENT ID VALIDATION

    if (!studentId.startsWith("249")) {

        document.getElementById("loginMsg").innerText =
        "Invalid Student ID!";

        return;

    }



    // COLLEGE EMAIL VALIDATION

    if (!email.endsWith("@sreedattha.ac.in")) {

        document.getElementById("loginMsg").innerText =
        "Use Official College Email!";

        return;

    }



    // PASSWORD CHECK

    if (pass === "1234") {

        document.getElementById("loginSection").style.display =
        "none";

        document.getElementById("chatSection").style.display =
        "block";



        // WELCOME MESSAGE

        document.getElementById("messages").innerHTML =

        "<p class='bot'><b>Bot:</b> Welcome to AI College Chatbot 🤖<br><br>Authorized student access granted.<br><br>Ask me about attendance, fees, exams, placements, hostel, library and more.</p>";

    }

    else {

        document.getElementById("loginMsg").innerText =
        "Wrong Password!";

    }

}




// SEND MESSAGE FUNCTION

function sendMessage() {

    let input =
    document.getElementById("userInput").value.toLowerCase();

    let messages =
    document.getElementById("messages");



    if (input === "") return;



    // CURRENT TIME

    let time = new Date().toLocaleTimeString();




    // USER MESSAGE

    messages.innerHTML +=

    "<p class='user'><b>You:</b> " + input +
    " <small>(" + time + ")</small></p>";




    // TYPING EFFECT

    messages.innerHTML +=

    "<p class='bot' id='typing'><b>Bot:</b> Typing...</p>";



    messages.scrollTop = messages.scrollHeight;




    setTimeout(() => {

        let reply = "";



        // BOT REPLIES

        if (input.includes("attendance")) {

            reply =
            "Minimum 75% attendance is required.";

        }

        else if (input.includes("fees")) {

            reply =
            "Please contact accounts office for fee details.";

        }

        else if (input.includes("exam")) {

            reply =
            "Exam schedule will be announced soon.";

        }

        else if (input.includes("course")) {

            reply =
            "Courses available: CSE, ECE, Mechanical.";

        }

        else if (input.includes("library")) {

            reply =
            "Library is open from 9 AM to 5 PM.";

        }

        else if (input.includes("placement")) {

            reply =
            "Placement training starts from 3rd year.";

        }

        else if (input.includes("hostel")) {

            reply =
            "Hostel facilities are available.";

        }

        else if (input.includes("principal")) {

            reply =
            "Principal office is open from 10 AM to 4 PM.";

        }

        else if (input.includes("hod")) {

            reply =
            "Please contact department office for HOD details.";

        }

        else if (input.includes("bus")) {

            reply =
            "College buses are available for nearby areas.";

        }

        else if (input.includes("canteen")) {

            reply =
            "Canteen is open from 8 AM to 4 PM.";

        }

        else {

            reply =
            "Sorry, I don't understand. Try another question.";

        }



        // REMOVE TYPING MESSAGE

        document.getElementById("typing").remove();




        // BOT MESSAGE

        messages.innerHTML +=

        "<p class='bot'><b>Bot:</b> " + reply +
        " <small>(" + time + ")</small></p>";



        messages.scrollTop = messages.scrollHeight;

    }, 1000);




    // CLEAR INPUT

    document.getElementById("userInput").value = "";

}




// ENTER KEY SUPPORT

document.getElementById("userInput")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});




// VOICE ASSISTANT

function startVoice() {

    let recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = function(event) {

        let voiceText =
        event.results[0][0].transcript;

        document.getElementById("userInput").value =
        voiceText;

        sendMessage();

    };

    recognition.start();

}




// DARK MODE

function toggleMode() {

    document.body.classList.toggle("dark");

}




// ANNOUNCEMENTS

function showAnnouncements() {

    let messages =
    document.getElementById("messages");



    messages.innerHTML +=

    "<p class='bot'><b>Bot:</b><br><br>📢 Latest Announcements:<br><br>• Exams start from June 10<br>• Placement drive on Friday<br>• Library closed on Sunday</p>";



    messages.scrollTop = messages.scrollHeight;

}




// CLEAR CHAT

function clearChat() {

    document.getElementById("messages").innerHTML = "";

}