import React from 'react'
import './card-office.css'

const CardOffice = props => {
    const { OfficeTitle, OfficeLocation, OfficeImage } = props;
    return (
    <div className="card-office" style={{ backgroundImage: `url(${OfficeImage})`}}>
      <h2 className="card-office__title">{ OfficeTitle }</h2>
      <p className="card-office__location">{ OfficeLocation }</p>
    </div>
    );     
};

export default CardOffice


/* <div className="card-office" style={`background-image: url('../img/offices/office01.jpg'${OfficeImage})`}>
      <h2 className="card-office__title">{ OfficeTitle }</h2>
      <p className="card-office__location">{ OfficeLocation }</p>
    </div> */