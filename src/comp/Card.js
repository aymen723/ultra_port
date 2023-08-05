import React, { useEffect, useState } from "react";
import "./card.css";
import { IoMdClose } from "react-icons/io";

export default function Card(props) {
  const [card, setcard] = useState(true);
  const [image, setimage] = useState(0);

  useEffect(() => {
    console.log(card);
  }, []);
  return (
    <>
      {card ? (
        <button
          onClick={(e) => {
            if (card === false) {
              setcard(true);
            } else {
              setcard(false);
            }
            console.log(card);
          }}
          className="card"
        ></button>
      ) : (
        <div className="card_div">
          <div className="closepart">
            <button
              onClick={(e) => {
                if (card === false) {
                  setcard(true);
                } else {
                  setcard(false);
                }
              }}
              className="btn_close"
            >
              <IoMdClose size={35} color="white" />
            </button>
          </div>
          <div className="workpart">
            <div className="wholeimg">
              <img src={props.data[image]} className="imgview"></img>
            </div>
            <div className="sliderimg">
              {props.data.map((value, index) => {
                return (
                  <button
                    className="imgbox"
                    key={index}
                    onClick={() => {
                      setimage(index);
                    }}
                  >
                    <img className="img" src={value}></img>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
