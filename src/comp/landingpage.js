import React from "react";
import { useEffect, useState } from "react";
import "./landingpage.css";

export default function Landingpage() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.pageX,
        y: event.pageY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };

    console.log(coords.x);
    console.log(coords.y);
  }, []);
  return (
    <div className="landingpage">
      <div className="header">
        <div className="part1">
          <div className="icon">ULTRA DESGIN</div>
        </div>
        <div className="part">
          <button className="buttons_div">About Us</button>
          <button className="buttons_div">Our Work</button>
          <button className="buttons_div">Social media</button>
        </div>
      </div>
      <div className="content">
        <span
          id="circle"
          class="circle"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        ></span>
        <div className="aboutus_div">
          <h1 className="aboutus">
            Hi there, my name is Michael. Photography of Michael Schmid I'm a
            Digital Designer Image of Bischof brand and web design and Web
            Developer Image of Hockenheimring website design and development
            based in Germany. Photography of Rheinland-Pfalz, Germany
          </h1>
        </div>
      </div>
    </div>
  );
}
