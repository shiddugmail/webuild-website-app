import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton.css";

function GetAQuoteButton(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i141884064120TimelineData);
  }, []);

  return (
    <div className="i1418840-64120 component component-wrapper not-ready">
      <div className="master-button-4l2u6Y">
        <div className="button-i141884064-tLUK3N valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i141884064120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i1418840-64120",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default GetAQuoteButton;
