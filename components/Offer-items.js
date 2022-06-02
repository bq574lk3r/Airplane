const offerItems = document.getElementById('offer-items');
offerItems.innerHTML = `<div class="offer-items-bg"></div>
<div class="offer-items-section">
  <h2>Сервис предлагает всё для вашего спокойного отдыха в пути</h2>
  <div class="offer-items-group">
    <div>
      <div class="svg-box">
        <svg>
          <use href="#wi-fi" />
        </svg>
      </div>
      <h5>Бесплатный wifi</h5>
    </div>
    <div>
      <div class="svg-box">
        <svg>
          <use href="#utensils" />
        </svg>
      </div>
      <h5>Комплексные обеды</h5>
    </div>
    <div>
      <div class="svg-box">
        <svg>
          <use href="#credit-card" />
        </svg>
      </div>
      <h5>Бесконтактные платежи</h5>
    </div>
    <div>
      <div class="svg-box">
        <svg>
          <use href="#parking" />
        </svg>
      </div>
      <h5>Охраняемая стоянка</h5>
    </div>
  </div>
</div>`