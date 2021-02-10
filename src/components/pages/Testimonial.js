import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Thapelo from '../img/Thapelo.jpg'
import Godwin from '../img/Godwin.jpeg'
import Jason from '../img/Jason.jpeg'
import brittney from '../img/brittney.jpeg'
import cameron from '../img/cameron.jpeg'
import Chad from '../img/Chad.png'
import '../../styles/carousel.css'

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={Thapelo} className='images'/>
          <div className="myCarousel">
            <h3>Thapelo Tsotetsi</h3>
            <h4>Group Lecturer</h4>
            <p>
            Doreen Ligman is a Life Choices Academy students for 2020. One thing you should know  about Doreen is having the ability to learn a new programming and good interpersonal skills
            </p>
          </div>
        </div>

        <div>
        <img src={Godwin} className='images'/>
          <div className="myCarousel">
            <h3>Godwin Dzvapatsva</h3>
            <h4>Head of Curriculum and Learning</h4>
            <p>
            Doreen Ligman is a hard working , observant and dedicated individual. Doreen has encouraged myself and many others to keep on going no matter the case even though she herself was struggling. I believe that she would be a great asset to any work place.
            </p>
          </div>
        </div>

        <div>
        <img src={Chad} className='images'/>
          <div className="myCarousel">
            <h3>Chad Bosch</h3>
            <h4>Team Leader</h4>
            <p>
            Doreen Ligman is motivate student, who is introvent during her time on the programme and committed to working mostly participating and interacting concerning work related.
            </p>
          </div>
        </div>

        <div>
        <img src={Jason} className='images'/>
          <div className="myCarousel">
            <h3>Jason Wandrag</h3>
            <h4>Curriculum Designer</h4>
            <p>
            Doreen Ligman is a very dedicated individual she has pay great attention to details during this programme.
            </p>
          </div>
        </div>

        <div>
        <img src={brittney} className='images'/>
          <div className="myCarousel">
            <h3>Brittney Bowers</h3>
            <h4>Colleague</h4>
            <p>
              Doreen always dedicated herself to doing her work and make sure its on time.
            </p>
          </div>
        </div>

        <div>
        <img src={cameron} className='images'/>
          <div className="myCarousel">
            <h3>Cameron Luyt</h3>
            <h4>Colleague</h4>
            <p>
            Doreen Ligman is very ambitious individual who is always dedicated herself to do best in tasks, projects. She also loves interacting and pushing herself to limit when it comes to her work.I believe she be very great asset in working environment.
            </p>
          </div>
        </div>

      </Carousel>

     
    );
  }
}
