import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton from "../GetAQuoteButton";
import "./HeaderWithBackground.css";

function HeaderWithBackground(props) {
  const { place, text1, text2, text3, text4, text5, text6, text7, group86Props, getAQuoteButtonProps } = props;

  return (
    <div className="header-with-background">
      <div className="frame-35">
        <Group86 layer1={group86Props.layer1} group85={group86Props.group85} />
        <div className="frame-34">
          <div className="frame-27">
            <div className="group-87">
              <div className="overlap-group">
                <div className="rectangle-61"></div>
                <div className="place valign-text-middle typographybodycaption-14-semi-bold">{place}</div>
              </div>
            </div>
            <div className="text-1 valign-text-middle typographybodycaption-14-semi-bold">{text1}</div>
            <div className="text-2 valign-text-middle typographybodycaption-14-semi-bold">{text2}</div>
            <div className="text-3 valign-text-middle typographybodycaption-14-semi-bold">{text3}</div>
            <div className="text-4 valign-text-middle typographybodycaption-14-semi-bold">{text4}</div>
            <div className="text-5 valign-text-middle typographybodycaption-14-semi-bold">{text5}</div>
            <div className="text-6 valign-text-middle typographybodycaption-14-semi-bold">{text6}</div>
            <div className="text-7 valign-text-middle typographybodycaption-14-semi-bold">{text7}</div>
          </div>
          <GetAQuoteButton>{getAQuoteButtonProps.children}</GetAQuoteButton>
        </div>
      </div>
    </div>
  );
}

export default HeaderWithBackground;
