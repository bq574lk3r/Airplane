import { pages } from '../scripts/pagesRef.js';

const footer = document.getElementsByTagName('footer');
footer[0].innerHTML = 
`<div class="footer-information">
  <div class="logo">
    <svg>
      <use href="#logo" />
    </svg>
  </div>
  <div class="footer-information-menu">
    <div>
      <h4>
        Частное предприятие “Аэропорт” Республика Беларусь, Минская обл., Рогачевский район,
        М-1, 391-й км., 4
      </h4>
      <a href="${pages.food.foods.restaurant}"><h5>Ресторан</h5></a>
      <a href="${pages.food.foods.cafe}"><h5>Кафе</h5></a>
      <a href="${pages.hotel}"><h5>Гостиница</h5></a>
      <a href="${pages.rest}"><h5>Отдых</h5></a>
      <a href="${pages.parking}"><h5>Стоянка</h5></a>
      <a href="${pages.pay}"><h5>Оплата beltoll</h5></a>
    </div>
    <div class="footer-information-contacts">
      <p>
        Минский район, д. Тюхиничи. <br />E-mail: comfort_minsk@mail.ru <br />GPS: N 52.1520 E
        23.6766
      </p>
      <p>
        <b>Гостиница:</b><br />
        Тел.: +375 (29) 209-75-76 <br />Тел.: +375 (162) 58-01-01 <br />Факс: +375 (162)
        51-80-51
      </p>
      <p>
        <b>Ресторан:</b><br />
        Тел.: +375 (162) 29-75-76 <br />Тел.: +375 (29) 209-75-88 <br />Факс: +375 (162)
        29-75-77
      </p>
    </div>
  </div>
</div>
<div class="footer-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.280773016871!2d23.675177531333023!3d52.1515051390731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5221a7b5fa3e31b8!2zNTLCsDA5JzA3LjIiTiAyM8KwNDAnMzUuOCJF!5e1!3m2!1sru!2sby!4v1653140166987!5m2!1sru!2sby"
    width="600"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>`
