import React from "react";
import Slider from "react-slick";
import "./Home.css";
import DakotaImage from "./Images/Dakota.png";
import FlyingBull from "./Images/FlyingBull.png";

//https://react-slick.neostack.com/ Followed React slick article on how to create the image slider settings and pass these settings into the my html.
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const images = [
    "https://www.blenderseyewear.com/cdn/shop/articles/maxheader1.jpg?v=1680542244",
    "https://shop.mpg-eyewear.com/Content/Images/Manufacturers/RedBull%20SPECT/RB_SPECT_Slider1.png",
    "https://www.boardsportsource.com/wp-content/uploads/2022/01/20201127_RedBull_Spect_009-scaled.jpg",
    "https://www.boardsportsource.com/wp-content/uploads/2023/06/RBS_ToniArbolino_c-JoergMitter-scaled.jpg",
    "https://spectr-magazine.com/wp-content/uploads/2024/03/Red-Bull-SPECT-Eyewear_WING-System_1920x1080_ENG.jpg",
  ];

  return (
    <div>
      <div className="homeIntro">
        <h3>
          Unleash your bold vision with <em>Red Bull Eyewear</em>, where dynamic
          design meets peak performance
        </h3>

        <div className="divSlideshow">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="sliders">
                <img src={img} alt={`slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="dakotaImageContainer">
        <img src={DakotaImage} alt="Wing system specs" width={800} />
        <h3>
          The <em>DAKOTA</em> cycling glasses shine with their sporty look. They
          are perfect for all those who love challenges
        </h3>
      </div>
      <div className="flyingbullContainer">
        <h3>
          Pilot's style with a slightly angular shape developed in cooperation
          with the <em>Flying Bulls.</em> Lightweight stainless-steel frame
        </h3>
        <img src={FlyingBull} alt="Flying Bull SPECT" width={600} />
      </div>

      <footer>
        <div className="footerLogo">
          <h4>
            <em>Red Bull</em> SPECT Eyewear
          </h4>
          <img
            src="https://www.freepnglogos.com/uploads/red-bull-logo/red-bull-energy-png-logo-10.png"
            alt="redbull black logo"
            width={250}
            className="footerImage"
          />
        </div>
        <ul className="footerList">
          <li>
            <a href="https://www.instagram.com/redbull/" target="blank">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://x.com/redbull?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/RedBull/" target="blank">
              Facebook
            </a>
          </li>
        </ul>
        <ul className="footerList">
          <li>
            <a href="https://www.redbull.com/za-en/energydrink" target="blank">
              Energy Drinks
            </a>
          </li>
          <li>
            <a href="https://www.redbullshop.com/en-int/" target="blank">
              Apparel
            </a>
          </li>
          <li>
            <a
              href="https://www.redbull.com/za-en/athletes?filter.countryCode=ZA"
              target="blank"
            >
              Athletes
            </a>
          </li>
        </ul>
        <ul className="footerList">
          <li>
            <a
              href="https://www.youtube.com/watch?v=I8a3YAfW_Cg"
              target="blank"
            >
              Skydivers Specs Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=7sw6lg5lG9o"
              target="blank"
            >
              Wing system Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=w_npsnql0C8"
              target="blank"
            >
              GameChanger Youtube
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Home;
