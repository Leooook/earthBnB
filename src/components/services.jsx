import React, { Component } from 'react'

import servicePic1 from '../images/services/service1.jpg'
import servicePic2 from '../images/services/service2.jpg'
import servicePic3 from '../images/services/service3.jpg'
import servicePic4 from '../images/services/service4.jpg'

class Services extends Component {
  state = {
    services: [
      {
        pic: servicePic1,
        topic: 'Unique Trips',
        info: 'Unique activities we can do together, led by a world of hosts.',
      },
      {
        pic: servicePic2,
        topic: 'Amazing Stays',
        info: 'Spaces that are more than just a place to sleep.',
      },
      {
        pic: servicePic3,
        topic: 'Entire Homes',
        info: 'Comfortable private places, with room for friends or family.',
      },
      {
        pic: servicePic4,
        topic: 'Safe Journey',
        info: 'Safe and private service, with online support everytime.',
      },
    ],
  }

  render() {
    return (
      <section className="services">
        {this.state.services.map((item) => {
          return (
            <article key={`item-${item.topic}`} className="serviceEach">
              <img src={item.pic} className="servicePic" alt="service" />
              <h3 className="serviceTopic">{item.topic}</h3>
              <p className="serviceInfo">{item.info}</p>
            </article>
          )
        })}
      </section>
    )
  }
}

export default Services
