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

  const dots = document.querySelectorAll('.dot');
  dots[1].style.opacity = '0';
  dots[4].style.opacity = '0';
  dots[7].style.opacity = '0';

  addEvent('button', 'click', () => {
      for (let j = 0; j < 2; j++) {
          const rand = random(0, 5);
          console.log(rand + 1);

          for (let i = 0; i < dots.length; i++) {
              dots[i].style.opacity = '0';
          }

          for (let i = 0; i < dices[rand].length; i++) {
              dots[dices[rand][i]].style.opacity = '1';
          }

      }
  });