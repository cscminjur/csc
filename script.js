emailjs.init("jzoTZu0bMCW8pttkI"); // paste Public Key here

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("emailphone").value,
        phonenumber: document.getElementById("phonenumber").value,
        message: document.getElementById("message").value,
        time: new Date().toLocaleString()
    };

    emailjs.send("service_e6ktcas", "jzoTZu0bMCW8pttkI", params)
        .then(function () {
            alert("✅ Message Sent Successfully to CSC Mail!");
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            alert("❌ Failed to send message!");
            console.log("EmailJS Error:", error);
        });
});
