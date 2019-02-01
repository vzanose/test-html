import React from 'react'
import './btn-main.css'

const Btn = props => {
    const { value } = props;
    return <button className="button">{value}</button>     
};

export default Btn

/* <button className="button">{props.value}</button> */