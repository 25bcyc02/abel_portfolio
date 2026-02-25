document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const submitBtn = document.querySelector('button[type="submit"]');
    const msgBox = document.getElementById('response-msg');
    
    submitBtn.innerText = 'Encrypting & Sending...';
    submitBtn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Simulated fetch call to your backend
    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        submitBtn.innerText = 'Send Message';
        submitBtn.disabled = false;

        if (data.status === "success") {
            msgBox.style.color = "#15803d";
            msgBox.style.backgroundColor = "#dcfce7";
            msgBox.innerText = data.message;
            document.getElementById('contactForm').reset(); 
        } else {
            msgBox.style.color = "#b91c1c";
            msgBox.style.backgroundColor = "#fee2e2";
            msgBox.innerText = "Error: " + data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        submitBtn.innerText = 'Send Message';
        submitBtn.disabled = false;
        msgBox.innerText = "Check console for connection error.";
    });
});