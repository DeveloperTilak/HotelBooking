import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Mail from "../../components/mail/Mail";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/294001412.jpg?k=eb76f50726e0fb4e0e3e843a55115bc36380053b91dad05bd34f25a5e98f40a7&o=&hp=1 ",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/294001789.jpg?k=6f0ec52d3affbb0ca582b391ecc5a6faa0a86a034f7913eef1cc2515edd7a4ac&o=&hp=1 ",
    },
    {
      src: " https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/294001425.jpg?k=08f0bbe0ae3ea600c573a5a21b5cc3dbeeafa9aaa5776065c05afb54a0bd70b1&o=&hp=1",
    },
    {
      src: " https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/294001832.jpg?k=9c8180d6a495ed3358a012d330fb8c1c896d93b35bc8f746e6823f9823af73c1&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/294001558.jpg?k=eb1673f558b74d6d5549aca331aa9275fb8c8c63784b5b4b7be2ca3c37e1e474&o=&hp=1 ",
    },
    {
      src: " https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/294001705.jpg?k=57248e09549c789c99108981873aae617a036c6a5fbd51b1c4c2b69d41e0d0bb&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {/* slider code */}
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImg"
                
              />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now!</button>
          <h1 className="hotelTitle">FabExpress The Uhas Gomti Nagar.</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              4 Virat Khand Road Near Maharaja agrasen Public school virat
              khand, Gomti Nagar, 226010 Lucknow, India –
            </span>
          </div>
          <span className="hotelDistance">Great location</span>
          <span className="hotelPriceHighlight">
            Book a stay over $112 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDtailsTexts">
              <h1 className="hotelTitle">Stay for a 1-night!</h1>
              <p className="hotelDesc">
                At the hotel, every room comes with a desk. Complete with a
                private bathroom equipped with a shower and free toiletries,
                guest rooms at FabExpress The Uhas Gomti Nagar have a
                flat-screen TV and air conditioning, and selected rooms include
                a seating area.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property Highlights</h1>
              <span>
                Continental, Vegetarian, Buffet Free parking available at the
                hotel
              </span>
              <h2>
                <b>Perfect for a 1-night stay!</b>
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
