  const createTicketDOM = (ticketData) => {
      let ticket = ``;

      for (let i = 0; i < ticketData.length; i++) {
          ticket += `<div class="card ${ (i === 0) ? 'mb-4' : '' }">`;

          for (let j = 0; j < ticketData[i].length; j++) {
              ticket += `<div class="d-flex">`;

              for (let k = 0; k < ticketData[i][j].length; k++) {
                  ticket += `<span class = "p-relative"><strong>${ticketData[i][j][k]}</strong></span>`;
              }

              ticket += `</div>`;
          }
          ticket += `</div>`;
      }

      document.querySelector('.ticket').innerHTML = ticket;
  }


  const createBarrelDOM = (out = []) => {
      let barrels = '';

      for (let i = 0; i < out.length; i++) {
          barrels += `<span>${out[i]}</span>`;
      }

      document.querySelector('#out').innerHTML = barrels;
  }