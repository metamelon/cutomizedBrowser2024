const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting= document.querySelector("#greeting");

const HIDDEN_CLASSNAME= "hidden"; //중요한 정보를 담지 않고 그냉 string일땐 대문자 사용
const USERNAME_KEY = "username"; //반복되는 단어가 나오면 오타가 날 확률이 크기 때문에 variable로 지정

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
  }

  function paintGreetings(username){
    greeting.innerText = `Have a nice day. ${savedUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

const greetingElement = document.getElementById('greeting');
greetingElement.style.position = 'absolute';
greetingElement.style.top = '10%';
greetingElement.style.left = '40%';

greetingElement.style.textAlign = 'center';

greetingElement.style.color = 'yellow'; 
