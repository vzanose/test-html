import React from 'react'
import Link from 'gatsby-link'
import './quote.css'

const Quote = ({ siteTitle }) => (
  <section className="quote">
    <div className="wrapper">
    <blockquote className="quote__wrapper">
      <cite className="quote__author">Catherine Jhee</cite>
      <p className="quote__text">
        I very highly recommend the work of Nopio. It has been a real pleasure to work with Piotr and his team of designers and developers. When we needed some updates to the WordPress templates to make our site mobile compatible, the Nopio went above and beyond the expected level of building and testing.
      </p>
    </blockquote>
    </div>
  </section>
)

export default Quote
