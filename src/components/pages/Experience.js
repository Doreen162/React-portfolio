import React from "react";
import ReactDOM from "react-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "../../events.json";

//import "./styles.css";

function Experience() {
  return (
    <div
      className="App"
      style={{ background: "#e96224", fontFamily: "Trebuchet Ms" }}
    >
      <h1 className='condiv'>Work Experience</h1>
  
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
ReactDOM.render(<Experience />, rootElement);


export default Experience;