import React from "react";
import ReactDOM from "react-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "../../event.json";

//import "./styles.css";

function Education() {
  return (
    <div
      className="App"
      style={{ background: "#8c8481", fontFamily: "Trebuchet Ms" }}
    >
      <h1 className='condiv'> Education </h1>
  
      <VerticalTimeline>
        {events.map(event => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={event.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.title }}
            />
             <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.where }}
            />
             <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.from }}
            />
           
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Education />, rootElement);


export default Education;