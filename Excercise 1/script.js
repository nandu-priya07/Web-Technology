function enroll(course) {
    alert("Enrolled in " + course);
}

function searchCourses() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".course-card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}

/* CHATBOT */
function toggleChat() {
    let bot = document.getElementById("chatbot");
    bot.style.display = bot.style.display === "block" ? "none" : "block";
}

function chat(e) {
    if (e.key === "Enter") {
        let msg = e.target.value;
        let body = document.getElementById("chatBody");
        body.innerHTML += `<p><b>You:</b> ${msg}</p>`;
        body.innerHTML += `<p><b>Bot:</b> Please check the courses section above 😊</p>`;
        e.target.value = "";
    }
}
