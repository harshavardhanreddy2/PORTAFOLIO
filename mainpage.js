function validateContactForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const num = document.getElementById('num').value.trim();

  if (!name || !email || !num) {
    alert('Please fill in Name, Email, and Mobile Number.');
    return false;
  }else{
  alert('Message sent successfully.');
  document.getElementById('contact-form').reset();
  return true;
}
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', validateContactForm);
  }
});