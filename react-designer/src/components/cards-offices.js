import React from 'react'
import './cards-offices.css'
import CardOffice from './card-office';

const CardsOffices = ({ siteTitle }) => (
  <section className="cards-offices">
    <div className="wrapper">
      <h2 className="cards-offices__title">Pick your place to visit</h2>
      <ul className="cards-offices__list">
        <li className="cards-offices__item">
          <CardOffice
            OfficeImage={require('../img/offices/office01.jpg')}
            OfficeTitle="Cozy office"
            OfficeLocation="Boston"
          />
        </li>
        <li className="cards-offices__item">
          <CardOffice
            OfficeImage={require('../img/offices/office02.jpg')}
            OfficeTitle="Friendly atmosphere"
            OfficeLocation="SF / Bay area"
          />
        </li>
        <li className="cards-offices__item">
          <CardOffice
            OfficeImage={require('../img/offices/office03.jpg')}
            OfficeTitle="Cozy office"
            OfficeLocation="Boston"
          />
        </li>
        <li className="cards-offices__item">
          <CardOffice
            OfficeImage={require('../img/offices/office04.jpg')}
            OfficeTitle="Friendly atmosphere"
            OfficeLocation="SF / Bay area"
          />
        </li>
      </ul>
    </div>
  </section>
)

export default CardsOffices
