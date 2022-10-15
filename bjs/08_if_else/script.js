let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

minValue = minValue || 0; // Если minValue не число, то minValue = 0
maxValue = maxValue || 100; // Если maxValue не число, то maxValue = 100

// Если minValue > maxValue,
// то minValue = 0, а maxValue = 100 (default values)
if (minValue > maxValue) {
  minValue = 0;
  maxValue = 100;
}

// Если minValue < -999, то minValue = -999
minValue = minValue < -999 ? -999 : minValue;

// Если maxValue > 999, то maxValue = 999
maxValue = maxValue > 999 ? 999 : maxValue;

alert(
  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
);

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
  minValue = 0;
  maxValue = 100;
  orderNumber = 0;
  window.location.reload();
});

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      answerField.innerText =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseRandom = Math.round(Math.random());
      answerField.innerText =
        phraseRandom < 1
          ? `Да это легко! Вы загадали ${answerNumber}?`
          : phraseRandom > 1
          ? `Наверное, это число ${answerNumber}?`
          : `Это, скорее всего, число ${answerNumber}?`;
    }
  }
});

document.getElementById('btnEqual').addEventListener('click', function () {
  if (gameRun) {
    const phraseRandom = Math.round(Math.random() * 2);
    console.log(phraseRandom);
    answerField.innerText =
      phraseRandom < 1
        ? 'Я всегда угадываю!\n\u{1F60E}'
        : phraseRandom > 1
        ? 'Ура!\n\u{1F60E}'
        : 'Я никогда не ошибаюсь!\n\u{1F60E}';
    gameRun = false;
  }
});

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      answerField.innerText =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.ceil((maxValue + minValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseRandom = Math.round(Math.random());
      answerField.innerText =
        phraseRandom < 1
          ? `Да это легко! Вы загадали ${answerNumber}?`
          : phraseRandom > 1
          ? `Наверное, это число ${answerNumber}?`
          : `Это, скорее всего, число ${answerNumber}?`;
    }
  }
});
