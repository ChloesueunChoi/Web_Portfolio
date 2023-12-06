
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

document.getElementById('dayButton').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
});

document.getElementById('nightButton').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
});

// 알람 버튼 요소 가져오기
const btnAlert = document.getElementById('btn-alert');

// 버튼 클릭 시 알림 표시
btnAlert.addEventListener('click', function() {
    alert('Welcome to my page! 👻');
});

document.getElementById('copyrightYear').textContent = new Date().getFullYear();

const button = document.getElementById('myButton');
const defaultLabel = 'Hover me';
const newLabel = 'Hello 🧞';

button.addEventListener('mouseover', () => {
button.innerText = newLabel;
});

button.addEventListener('mouseout', () => {
button.innerText = defaultLabel;
});

let count = 1;

document.getElementById('btn-counter').onclick = () => {
count = count + 1;
document.getElementById('txt-counter').innerHTML = `❤️‍🔥: ${count}`;
};