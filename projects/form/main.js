document.getElementById('submitBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const greetingElement = document.getElementById('greeting');

    if (firstName === '' && lastName === '') {
        greetingElement.textContent = 'Пожалуйста, введите ваше имя и фамилию.';
    } else if (firstName === '') {
        greetingElement.textContent = 'Пожалуйста, введите ваше имя.';
    } else if (lastName === '') {
        greetingElement.textContent = 'Пожалуйста, введите вашу фамилию.';
    } else {
        greetingElement.textContent = `Здравствуйте, ${firstName} ${lastName}!`;
    }
});