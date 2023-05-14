
import React, { useRef } from 'react';
import Mycard from './mycard';
import './imagecarousel.css';

const Imagecarousel = () => {
  const boxRef = useRef(null);

  const btnpressprev = () => {
    const box = boxRef.current;
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const btnpressnext = () => {
    const box = boxRef.current;
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container" ref={boxRef}>
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
        <Mycard cardno="9" />
        <Mycard cardno="10" />
        <Mycard cardno="11" />
        <Mycard cardno="12" />
        <Mycard cardno="13" />
      </div>
    </div>
  );
};

export default Imagecarousel;
