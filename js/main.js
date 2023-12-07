
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
const counterText = document.getElementById('txt-counter');

document.getElementById('btn-counter').onclick = () => {
count = count + 1;
counterText.innerHTML = `Give ❤️‍🔥: ${count}`;

if (count % 2 === 0) {
    counterText.classList.remove('odd');
    counterText.classList.add('even');
} 
else {
    counterText.classList.remove('even');
    counterText.classList.add('odd');
}
};


const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
  const listItem = document.createElement('li'); // Create a new <li> element

  // Set the text content based on whether the index is even or odd
if (i % 2 === 0) {
    listItem.textContent = `Even - ${i}`;
} else {
    listItem.textContent = `Odd - ${i}`;
}

  numbersList.appendChild(listItem); // Append the <li> element to the ordered list
}

const paintingsList = document.getElementById('paintings');

// 무작위 색상 생성 함수
function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

// 리스트 항목 생성
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li'); // 새 <li> 요소 생성
  listItem.textContent = `Painting ${i}`; // 텍스트 설정

  // 무작위 배경색 적용
listItem.style.backgroundColor = getRandomColor();

  listItem.classList.add('colorful-item'); // 클래스 추가
  paintingsList.appendChild(listItem); // 리스트에 추가
}
