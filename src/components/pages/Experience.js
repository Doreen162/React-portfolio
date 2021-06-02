import React from "react";
import ReactDOM from "react-dom";
import "react-vertical-timeline-component/style.min.css";


function Experience() {
  return (

   
    <section class="timeline-wrapper">
       <h1>Work Experience</h1>
    <div class="middle-line"></div>
    <div class="box box-bottom">
        <div class="date">
            <p>DEC 2012</p>
            <p>- JUN 2013</p>
        </div>
        <div class="box-content">
            <p>Cashier</p>
        </div>
    </div>

    <div class="box box-top">
        <div class="date">
            <p>Jun 2020</p>
            <p>- NOV 2016</p>
        </div>
        <div class="box-content">
            <p>Picker/Packer at Rainbow Factory</p>
        </div>
    </div>

    <div class="box box-bottom">
        <div class="date">
            <p>NOV -</p>
            <p>DEC 2017</p>
        </div>
        <div class="box-content">
            <p>Volunteer Caregiver </p>
        </div>
    </div>

    <div class="box box-bottom">
        <div class="date">
            <p>APR - </p>
            <p>MAY 2018</p>
        </div>
        <div class="box-content">
            <p>Caregiver at Creative Wellness</p>
        </div>
    </div>

    <div class="box box-top">
        <div class="date">
            <p>SEPT 2020</p>
            <p>- Present</p>
        </div>
        <div class="box-content">
            <p>Intern Developer at Salasian Lifechoices</p>
        </div>
    </div>
</section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Experience />, rootElement);


export default Experience;