// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("April 6, 2025 10:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "दिन " + hours + "घंटे " + minutes + "मिनट " + seconds + "सेकंड ";

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "समारोह शुरू हो चुका है!";
    }
}

setInterval(updateCountdown, 1000);

// Handle RSVP form submission
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("आपका RSVP प्राप्त कर लिया गया है!");
});
