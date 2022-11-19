const refs = {
  startActiont: document.querySelector('[data-start]'),
  stopAction: document.querySelector('[data-stop]'),
  body: document.querySelector('body')
}
const SWITCHER_INTERVAL = 1000


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

refs.startActiont.addEventListener('click', startSwitch)
refs.stopAction.addEventListener('click', stopSwitch)
let intervalId;

function startSwitch(){
    refs.startActiont.disabled = true;
    refs.stopAction.disabled = false;

intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
}, SWITCHER_INTERVAL);
}

function stopSwitch (){
 clearInterval(intervalId);

 refs.startActiont.disabled = false;
 refs.stopAction.disabled = true;
}
