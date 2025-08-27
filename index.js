// section-1
let count = 0;
const loveCount = document.getElementById("love-count");
const loveIcons = document.getElementsByClassName("hardPng");
for (const icon of loveIcons) {
  icon.addEventListener('click', function () {
    count++;
    loveCount.textContent = count;
  });
}

// section-2
let coins = 100;
const coinDisplay = document.getElementById('coin-count');
const callButtons = document.querySelectorAll('.call-btn');
const callCost = 20;

for (const btn of callButtons) {
  btn.addEventListener('click', function() {
    if (coins >= callCost) {
      coins -= callCost;
      coinDisplay.textContent = coins;

      const card = btn.closest('.bg-white');
      const number = card.querySelector('h1').innerText;
      const description = card.querySelector('p').innerText;

      alert(`${description} ${number}...`);
    } else {
      alert('You dont have enough coins.');
    }
  });
}


