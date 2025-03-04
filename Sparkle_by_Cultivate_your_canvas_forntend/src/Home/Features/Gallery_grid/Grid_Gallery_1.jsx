import React from "react";

// imgs
import img1 from "../../../assets/image/people/chairWomen/chairwomen.webp";
import img2 from "../../../assets/image/program/yoga/yoga.webp";
import img3 from "../../../assets/image/useables/grpbannerhold.webp";
import img4 from "../../../assets/image/program/art/art.webp";

// texture images
import taxture from "../../../assets/texture/bg-texture/white_linen_texture.webp";
import butterfly from "../../../assets/image/vector/rainbow-butterfly.webp";


// splash images
import splashRed from "../../../assets/texture/splash/modern-red-watercolor.png";
import splashGreen from "../../../assets/texture/splash/elegant-green-watercolor.png";
import splashYelow from "../../../assets/texture/splash/modern-yellow-orange-watercolor.png";
import splashOrange from "../../../assets/texture/splash/abstract-orange-watercolor.png";
import splashPink from "../../../assets/texture/splash/abstract-pink-watercolor.png";

// crusor

import cursor from "../../../assets/icons/cursor.png";


// styles css
import "./gallery.css";

// animation
import AnimatedComponent from "../../../components/Animation/AnimatedComponent";
import AnimatedComponent2 from "../../../components/Animation/AnimatedComponent2";
import { NavLink } from "react-router-dom";

// animation

const GridGallery_1 = () => {

  const gridImg = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ]




  return (
    <div className="grid-gallary-1-container">
      {/* img */}
      <div className="grid-gallery-1-container-box relative">
        <AnimatedComponent>
          <img src={butterfly} alt="butterfly" className="butterfly" />
          <div
            className="grid-gallery-imgs-grid-box"
            style={{ backgroundImage: `url(${taxture})` }}
          >
            {
              gridImg.map((item, idx) => (

                <div key={idx} className="grid-img ">
                  <img src={item.image} alt={item.image} />
                </div>
              ))
            }
          </div>
        </AnimatedComponent>
      </div>

      {/* text */}
      <div className="grid-gallery-1-container-box ">
        <div className="w-full space-y-5">
          <AnimatedComponent2>
            <h1 className="text-red-500 font-[500] text-4xl ">Empowering Young Minds, Shaping Nepal's Future Leaders Through Creativity and Confidence.</h1>
          </AnimatedComponent2>
          <AnimatedComponent2>
            <p className="p-text italic ">At Sparkle Kids Academy, we nurture young minds by fostering creativity and confidence, equipping Nepal's future leaders with essential life skills for success in an ever-changing world. Our programs are designed to inspire and empower children to reach their full potential.</p>
          </AnimatedComponent2>


          <div className="flex flex-col md:grid md:grid-cols-2 ">
            <ul className="li-container">
              <AnimatedComponent2>
                <li>
                  <img src={splashRed} alt='splash red' className="splash-img " />
                  Art
                </li>
              </AnimatedComponent2>
              <AnimatedComponent2>
                <li>
                  <img src={splashOrange} alt='splash red' className="splash-img" />
                  Yoga
                </li>
              </AnimatedComponent2>
              <AnimatedComponent2>
                <li>
                  <img src={splashGreen} alt='splash red' className="splash-img" />
                  dance
                </li>
              </AnimatedComponent2>
              <AnimatedComponent2>
                <li>
                  <img src={splashPink} alt='splash red' className="splash-img" />
                  Personality Development
                </li>
              </AnimatedComponent2>
            </ul>
            <ul className="li-container ">
              <AnimatedComponent2>
                <li>
                  <img src={splashPink} alt='splash red' className="splash-img" />
                  Chess
                </li>
              </AnimatedComponent2>
              <AnimatedComponent2>
                <li>
                  <img src={splashGreen} alt='splash red' className="splash-img" />

                  Table Etiquette
                </li>
              </AnimatedComponent2>
              <AnimatedComponent2>
                <li>
                  <img src={splashOrange} alt='splash red' className="splash-img" />
                  Public Speaking
                </li>
              </AnimatedComponent2>
              <AnimatedComponent2>
                <li className="text-center mt-3 ml-3">
                  <img src={cursor} alt='splash red' className="cursor w-5 rotate-90" />
                  <NavLink to={'/program'} className={'hover:text-orange-500 underline underline-offset-4'}>See more</NavLink>
                </li>
              </AnimatedComponent2>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridGallery_1;
