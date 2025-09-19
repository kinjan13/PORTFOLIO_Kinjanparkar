import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <div
      id="education"
      style={{
        backgroundColor: "#031926",
        minHeight: "100vh",
        padding: "50px 20px",
        color: "white",
      }}
    >
      {/* Date color fix */}
      <style>
        {`
          .timeline-date {
            color: #ffffff !important; /* white so it's visible */
            font-weight: 600;
          }
        `}
      </style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "left", marginBottom: "40px" }}>Education</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "white", color: "#01111a" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021 - 2025"
            dateClassName="timeline-date"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Computer Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mumbai, India
            </h4>
            <p>
              Bachelor&apos;s Degree
              <br /> CGPA: 8.49
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "white", color: "#01111a" }}
            date="2019 - 2021"
            dateClassName="timeline-date"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Karmaveer Bhaurao Patil College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mumbai, India
            </h4>
            <p>
              HSC (Maharashtra State Board) <br /> Percentage: 88%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "white", color: "#01111a" }}
            date="2010 - 2019"
            dateClassName="timeline-date"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              S.B.o.A Public School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mumbai, India
            </h4>
            <p>
              SSC (Maharashtra State Board) <br /> Percentage: 84%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
