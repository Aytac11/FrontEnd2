  const addEvent = (selector, event, func) => {
      const elements = document.querySelectorAll(selector);

      for (var i = 0; i < elements.length; i++) {
          elements[i].addEventListener(event, func)
      }
  }

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const dices = [
      [4],
      [0, 8],
      [0, 4, 8],
      [0, 2, 6, 8],
      [0, 2, 4, 6, 8],
      [0, 2, 3, 5, 6, 8],
  ];

  const dots1 = document.querySelectorAll('.dot');
  const dots2 = document.querySelectorAll('.dot2');

  dots1[1].style.opacity = '0';
  dots1[4].style.opacity = '0';
  dots1[7].style.opacity = '0';

  dots2[1].style.opacity = '0';
  dots2[4].style.opacity = '0';
  dots2[7].style.opacity = '0';

  addEvent('button', 'click', () => {
      const rand = random(0, 5);
      const rand2 = random(0, 5);
      //console.log(rand2 + 1);

      for (let i = 0; i < dots1.length; i++) {
          dots1[i].style.opacity = '0';
      }

      for (let i = 0; i < dices[rand].length; i++) {
          dots1[dices[rand][i]].style.opacity = '1';
      }
      for (let j = 0; j < dots2.length; j++) {
          dots2[j].style.opacity = '0';
          //console.log(dots2[j])
      }

      for (let j = 0; j < dices[rand2].length; j++) {
          dots2[dices[rand2][j]].style.opacity = '1';
      }

      var score = document.querySelector('.score');
      let sum = rand + rand2 + 2;
      score.innerText = sum;

  });