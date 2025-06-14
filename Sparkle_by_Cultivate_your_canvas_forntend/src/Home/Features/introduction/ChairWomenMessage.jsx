import React from "react";
// images
import ChairWomenPicture1 from "../../../assets/image/people/chairWomen/chairwomen.webp";
import Picture1 from "../../../assets/image/program/art/art.webp";
import ChairWomenPicture2 from "../../../assets/image/people/chairWomen/chairwomen1.webp";

// bg taxture
import texture from "../../../assets/texture/bg-texture/white_linen_texture.webp";

// icon image
import pin from "../../../assets/image/vector/red-drawing-pin.webp";
import plane from "../../../assets/image/vector/paper-airplane-with-dot.webp";
import book from "../../../assets/image/vector/books.webp";

// animation
import AnimatedComponent from "../../../components/Animation/AnimatedComponent";
import AnimatedComponent2 from "../../../components/Animation/AnimatedComponent2";

const ChairWomenMessage = () => {
  return (
    <div className="pt-20 pb-10 ">
      <div
        className="p-10 bg-cover bg-center "
        style={{ backgroundImage: `url(${texture})` }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 spaace-y-5 max-lg:justify-items-center gap-5">
          {/* message */}
          <div className="lg:col-span-7 max-lg:order-2 space-y-5 relative">
            {/* plane */}
            <img
              src={plane}
              alt="plane"
              className="absolute z-10 w-[200px] -top-[7%] lg:-top-[15%]"
            />

            {/* heading */}
            {/* <AnimatedComponent> */}
            <h2 className="font-bold text-4xl text-gray-800">
              Message From CEO
            </h2>
            {/* </AnimatedComponent> */}
            {/* <AnimatedComponent> */}
            <p className="text-gray-700">
              As a mother of a little one, I understand the importance of
              nurturing a child's potential from an early age. My deep love for
              children and a keen awareness of what our generation missed during
              our formative years inspired me to create Sparkle. Our academy is
              designed to be a one-stop destination for children to explore,
              learn, and grow through various workshops and training sessions.
              <br />
              Sparkle is not just a business venture; it's a mission to provide
              today's children with the opportunities that were once unavailable
              to us. I believe that learning is a lifelong journey with endless
              possibilities, and through Sparkle, we aim to empower every child
              to reach their fullest potential. This initiative is dedicated to
              parents like myself, who want to see their children thrive in a
              supportive and enriching environment.
              <br />
              Thank you for being a part of this journey with us.
            </p>
            {/* </AnimatedComponent> */}
          </div>

          {/* img frame */}
          <div className="md:col-span-5 max-lg:order-1 p-2 max-w-[540px]">
            {/* <AnimatedComponent2> */}
            <div className="relative lg:h-full lg:w-full h-[300px] w-[350px] ">
              {/* pin */}
              <img
                src={pin}
                alt="push pin"
                className="absolute z-10 size-5 -top-[4%] -left-[5%] md:-top-[5%] md:-left-[23%] lg:-top-[20px] lg:left-[0%]"
              />

              <img
                src={pin}
                alt="push pin"
                className="absolute z-10 size-10 right-[17%] -top-[10%] md:-top-[26%] md:right-[4%] lg:-bottom-[10%] lg:left-[55%] rotate-45"
              />

              <img
                src={pin}
                alt="push pin"
                className="absolute z-10 size-5 bottom-[58%] -right-[4%] md:bottom-[54%] md:right-[3%] lg:top-16 lg:right-6 rotate-45 "
              />
              {/* books */}
              <img
                src={book}
                alt="plane"
                className="absolute z-10 size-[200px] lg:top-[200px] max-lg:hidden md:-right-[60%] lg:right-[2%]"
              />

              {/* img */}

              <img
                src={ChairWomenPicture1}
                alt="Chair Women Picture"
                className="size-[250px] md:size-[300px] lg:size-[300px] border-8 border-white shadow-xl -rotate-6 absolute md:-top-[16%] lg:-top-[20%] left-[10%]"
              />

              {/* img */}
              <img
                src={Picture1}
                alt="hands color print "
                className="size-[120px] lg:size-[150px] border-4 border-yellow-500 rotate-6 absolute top-[0%] -left-[5%]  md:-left-20 lg:left-0 shadow-xl"
              />

              {/* img */}
              <img
                src={ChairWomenPicture2}
                alt="Chair Women Picture"
                className="size-[100px] lg:size-[120px] border-4 border-green-500 -rotate-12 absolute top-[40%] -right-[5%] md:-right-20 lg:right-5 lg:top-20 shadow-xl"
              />
            </div>
            {/* </AnimatedComponent2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairWomenMessage;
