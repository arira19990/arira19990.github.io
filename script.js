const passwordInput = document.getElementById("password");
const strengthMeter = document.getElementById("strength-meter");
const strengthText = document.getElementById("strength-text");

function evaluatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;

    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;

    if (/\d/.test(password)) strength++;

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    return strength;
}

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = evaluatePasswordStrength(password);

    strengthMeter.className = "";
    
    if (strength === 0) {
        strengthText.textContent = "";
    } else if (strength === 1) {
        strengthMeter.classList.add("strength-weak");
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
    } else if (strength === 2) {
        strengthMeter.classList.add("strength-medium");
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";
    } else if (strength >= 3) {
        strengthMeter.classList.add("strength-strong");
        strengthText.textContent = "Strong";
        strengthText.style.color = "green";
    }
});
