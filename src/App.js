import React from 'react';
import Slider from "react-slick";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, fontSize: "5rem", display: "relative", background: "grey", color: 'white'}}
      onClick={onClick}
    />
  );
}

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div style={{display: 'absolute'}}>
      <h2>Custom Arrows</h2>
    <Slider {...settings}>
    <div>
      <img src="https://scontent.fcgh36-1.fna.fbcdn.net/v/t1.0-9/p960x960/91500049_1557019077781776_8715832646225100800_o.png?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=7WNuIwN6-NsAX9rxYKW&_nc_ht=scontent.fcgh36-1.fna&oh=eab8eb2fc6db891daddbe7aaa7b01666&oe=5EAA2A22"></img>
    </div>
    <div>
    <img src="https://scontent.fcgh36-1.fna.fbcdn.net/v/t1.0-9/p960x960/92010952_1557019037781780_5593007701064941568_o.png?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=ZLwiFX2ReuwAX9Rfnwf&_nc_ht=scontent.fcgh36-1.fna&oh=230878664a953ac1904a283c14807fbe&oe=5EAB59EA"></img>
    </div>
    <div>
    <img src="https://scontent.fcgh36-1.fna.fbcdn.net/v/t1.0-9/p960x960/91565915_1556833261133691_8971510142390501376_o.png?_nc_cat=103&_nc_sid=2d5d41&_nc_ohc=So2ic0-m9U4AX9Rp53L&_nc_ht=scontent.fcgh36-1.fna&oh=c2356e795c9e1db825bafe59ebe8396c&oe=5EAB69DF"></img>
    </div>
  </Slider>
  </div>
  );
}

export default App;
