document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const btn = document.getElementById('submitBtn');
    const msgBox = document.getElementById('response-msg');
    
    btn.innerText = "INITIALIZING ENCRYPTION...";
    btn.disabled = true;

    // Simulate a secure network delay
    setTimeout(() => {
        btn.innerText = "DATA PACKET SENT";
        msgBox.innerHTML = "<p style='color: white;'>[SUCCESS]: Message tunneled through secure gateway.</p>";
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            btn.disabled = false;
            btn.innerText = "EXECUTE SEND";
        }, 3000);
    }, 2000);
});
