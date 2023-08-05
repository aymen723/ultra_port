import React, { useState } from "react";
import "./Ourwork.css";
import img1 from "./res/1.jpg";
import img2 from "./res/2.jpg";
import img3 from "./res/3.jpg";
import img4 from "./res/4.jpg";
import img5 from "./res/5.jpg";
import { MdHomeRepairService } from "react-icons/md";
import Card from "./Card";
export default function Ourwork() {
  const array1 = [img1, img2, img3, img4, img5];

  return (
    <div className="ourwork">
      <div className="title">
        <div className="titlecontent">
          <MdHomeRepairService size={45} color="white" />
          <h1 className="title_style">Our Work</h1>
        </div>
      </div>
      <div className="ourcard">
        <Card data={array1}></Card>
        <Card data="test"></Card>
        <Card data="test"></Card>
      </div>
    </div>
  );
}
