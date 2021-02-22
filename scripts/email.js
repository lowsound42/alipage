// call to nodemailer backend
function emailCall(input){
  (async () => {
    const rawResponse = await fetch('https://homepage-mcquack.herokuapp.com/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: input.email,
        message: input.message
      }),    
    });
    const content = await rawResponse.json();
    console.log(content);
  })();
  console.log(input);
}



const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  let subject = document.getElementById('subject');
console.log(email.value);
console.log(message.value);
  let mail = {
    email: email.value,
    text: message.value,
  }

  emailCall(mail);
  console.log(mail);
});
