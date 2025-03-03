import React from "react";
import StaticHeader from "../../components/StaticHeader/StaticHeader";

// bannerImage
import bannerImage from "../../assets/image/useables/bg-cover.jpg";

// program imgs
import arts from "../../assets/image/program/art/art.webp";
import yoga from "../../assets/image/program/yoga/yoga1.webp";
import publicSpeaking from "../../assets/image/people/chairWomen/chairwomen1.webp";
import dance from "../../assets/image/program/dance/dance.webp";
import personallityDevelopment from "../../assets/image/program/art/kid2.webp";
import chess from "../../assets/image/useables/chess.jpg";
import diningEtiquette from "../../assets/image/useables/dining_etiquette.jpg";
import oralHealth from "../../assets/image/useables/kids-oral-health.jpg";
import music from "../../assets/image/useables/music-class.png";
import summer_camp from "../../assets/image/useables/summer_camp.jpg";
import Weekend_Camp from "../../assets/image/useables/Weekend_Camp.jpg";
import Session_Break_Camp from "../../assets/image/useables/Session_Break_Camp.jpg";
import Winter_Camp from "../../assets/image/useables/Winter_Camp.jpg";
import After_School_Program from "../../assets/image/useables/After_School_Program.jpg";
import festival_camp from "../../assets/image/useables/festival.jpg";

// icons
import prop1 from "../../assets/icons/arts.svg";
import prop2 from "../../assets/icons/yoga.svg";
import prop3 from "../../assets/icons/publicSpeaking.svg";
import prop4 from "../../assets/icons/dance-.svg";
import prop5 from "../../assets/texture/useableImages/mindful.webp";
import prop6 from "../../assets/icons/chess.png";
import prop7 from "../../assets/icons/table-etiquette.png";
import prop8 from "../../assets/icons/oral.jpg";
import prop9 from "../../assets/icons/music.png";
import prop10 from "../../assets/icons/school.png";
import prop11 from "../../assets/icons/winter_camp.png";
import prop12 from "../../assets/icons/session.png";
import prop13 from "../../assets/icons/Vacation.png";
import prop14 from "../../assets/icons/summer.png";
import prop15 from "../../assets/icons/camp.png";
import prop16 from "../../assets/icons/art_woorkshop.png";

import AnimatedComponent2 from "../../components/Animation/AnimatedComponent2";
import AnimatedComponent from "../../components/Animation/AnimatedComponent";
import Useable from "../../components/Useable/Useable";
import Booking from "../../components/Booking";

const Program = () => {
  const programData = [
    {
      image: arts,
      icon: prop1,
      title: "Art Classes",
      para: `At <strong>Sparkle Kids Academy</strong>, our art classes, guided by the talented young artist, provide children with a unique opportunity to unleash their creativity and imagination. Art is an essential part of a child's development, enabling them to express their thoughts and emotions in visual and tangible ways. Through our art program, students will enhance their fine motor skills, problem-solving abilities, and visual-spatial understanding.
      <br />
      Art helps children think critically, make decisions, and explore different perspectives. It encourages creativity and innovation, allowing them to experiment with colors, shapes, and techniques, leading to a richer understanding of the world around them. Under the mentorship of Lujala Shakya, students are inspired to create and express themselves freely, building confidence and self-esteem. Participating in art not only nurtures a child’s artistic talents but also contributes to their cognitive and emotional development, making it an essential part of a well-rounded education.`
    },
    {
      image: arts,
      icon: prop16,
      title: "Art Workshop",
      para: `Discover your creative potential at our Art Workshop! Led by experienced artists, this workshop at Sparkle Kids Academy provides a dynamic environment where participants can explore various artistic techniques and mediums. Whether you're a beginner or seasoned artist, join us to refine your skills, express your imagination, and connect with fellow art enthusiasts.
      <br />
      Our workshops focus on fostering creativity, developing artistic confidence, and encouraging experimentation. Through hands-on activities and personalized guidance, you'll unlock new perspectives and gain valuable insights into the world of art. Embrace the joy of creating and take your artistic journey to the next level with us.`,
    }
    ,
    {
      image: yoga,
      icon: prop2,
      title: "Yoga",
      para: `At <strong>Sparkle Kids Academy</strong>, our yoga program, led by the experienced, is designed to provide children with a holistic approach to physical and mental well-being. Yoga offers a myriad of benefits for young learners, fostering not only physical strength and flexibility but also mental clarity and emotional balance. Through carefully structured sessions, Ira guides students in practicing various yoga poses, breathing exercises, and mindfulness techniques that are tailored to their developmental needs.
            <br />
            Children engaged in our yoga program will experience improved focus, enhanced concentration, and better stress management. The practice of yoga helps in developing body awareness, promoting healthy posture, and increasing overall physical coordination. Additionally, yoga encourages self-discipline and cultivates a sense of inner calm, empowering children to navigate life's challenges with resilience and confidence. Under Ira Sushmita Chamling Rai's expert instruction, our students are nurtured in a supportive environment where they can grow both physically and emotionally, laying a strong foundation for lifelong health and well-being.`,
    },
    {
      image: publicSpeaking,
      icon: prop3,
      title: "Public Speaking",
      para: `At <strong>Sparkle Kids Academy</strong>, our public speaking program, led by certified trainer <strong>Snehalata Raut Thapa</strong>, is designed to empower children with the confidence and communication skills they need to succeed. Public speaking is a vital skill that helps students articulate their thoughts clearly, organize their ideas effectively, and engage with an audience. Through our program, children learn to overcome the fear of speaking in public, building self-assurance and poise in various social and academic settings. These skills are essential for future leadership roles, as they enable students to express themselves confidently and persuasively. Under Snehalata Raut Thapa's expert guidance, our students develop not only as communicators but also as thoughtful and articulate individuals, ready to take on the challenges of the future.`,
    },
    {
      image: dance,
      icon: prop4,
      title: "Dance",
      para: `At <strong>Sparkle Kids Academy</strong>, our dance program, led by esteemed instructor, offers children an exceptional opportunity to explore the art of dance. This program is designed to foster both physical and cognitive development in a structured yet creative environment. Through our curriculum, students will enhance their coordination, balance, and flexibility, while also cultivating discipline and focus. Dance encourages self-expression and creativity, providing children with the tools to build confidence and resilience. Under Rosy Shrestha's expert guidance, our program not only teaches the technical aspects of dance but also instills a deep appreciation for the art form, preparing students for future success both on and off the stage.`,
    },
    {
      image: personallityDevelopment,
      icon: prop5,
      title: "Personality Development",
      para: `At <strong>Sparkle Kids Academy</strong>, our Personality Development program is meticulously designed to provide children with the essential grooming and life skills they need to excel in all aspects of life. This comprehensive course goes beyond basic education to encompass personal hygiene, dining etiquette, effective communication, and social interaction. We place a strong emphasis on instilling self-discipline, confidence, and a positive self-image, which are critical components of a well-rounded personality.
            <br />
            Through carefully crafted lessons and practical experiences, students learn how to present themselves with grace and professionalism in various settings. They acquire the social skills necessary to interact confidently and respectfully with others, preparing them for both personal and professional success. By the end of the program, children are not only well-versed in proper etiquette but also equipped with the self-assurance needed to navigate diverse social and academic environments. This program is a pivotal step in their journey towards becoming confident, polished, and future-ready individuals.`,
    },
    {
      image: chess,
      icon: prop6,
      title: "Chess",
      para: `At <strong>Sparkle Kids Academy</strong>, our chess classes offer children a stimulating environment to enhance their strategic thinking and problem-solving skills. Chess is a fantastic tool for developing critical thinking, as it encourages students to plan ahead, make strategic decisions, and anticipate their opponent's moves. Through our chess program, students will improve their concentration, memory, and logical reasoning abilities.
                <br />
                Chess fosters patience and perseverance, teaching children to approach challenges methodically and stay focused on their goals. Engaging in chess not only sharpens a child's cognitive abilities but also enhances their ability to work through complex problems, making it a valuable addition to their educational journey.
                <br />
                This program brings expert knowledge and a passion for teaching critical thinking and strategy to young learners.`
    },
    {
      image: diningEtiquette,
      icon: prop7,
      title: "Dining Etiquette",
      para: `At <strong>Sparkle Kids Academy</strong>, our dining etiquette classes provide children with essential skills for formal dining and social interactions. Proper dining etiquette is crucial for fostering respect, manners, and confidence in social settings. Through our dining etiquette program, students will learn the art of table manners, including how to properly use utensils, engage in polite conversation, and demonstrate respect for others at the table.
                <br />
                <i>Dining etiquette</i> helps children develop a sense of decorum and self-assuredness in various social contexts. Students will practice and master the nuances of dining etiquette, from basic table settings to sophisticated social interactions. This program not only prepares children for formal events but also instills a lifelong appreciation for social grace and etiquette, contributing significantly to their personal and social development.
                <br />
                This program brings expert knowledge and a passion for teaching social skills to young learners.`
    },
    {
      image: oralHealth,
      icon: prop8,
      title: "Oral Health",
      para: `At <strong>Sparkle Kids Academy</strong>, our oral health classes provide children with essential knowledge to maintain good oral hygiene and develop healthy habits. Oral health is crucial for overall well-being, and our program aims to teach children the importance of brushing, flossing, and regular dental check-ups. Students will learn the proper techniques for maintaining a clean and healthy mouth, as well as the impact of diet on dental health.
                <br />
                Good oral hygiene helps prevent cavities, gum disease, and other dental issues. Through interactive lessons, children will understand the significance of taking care of their teeth, gums, and overall oral health. This program not only promotes a healthier lifestyle but also instills confidence in children by encouraging them to smile brightly and take pride in their dental care.
                <br />
                This program is led by our a dedicated professional with a passion for educating young learners about the importance of oral health and hygiene.`
    },
    {
      image: music,
      icon: prop9,
      title: "Music Class (Guitar, Keyboard)",
      para: `At <strong>Sparkle Kids Academy</strong>, our music classes are designed to foster creativity and a love for music in children. Through fun and interactive sessions, students will explore the basics of music, rhythm, and melody while learning to play simple instruments and develop vocal skills. 
                  <br />
                  Music is not only a source of joy but also enhances cognitive development, coordination, and emotional expression. Our program encourages children to embrace different musical styles, improve their listening skills, and express themselves creatively. Students will have the opportunity to participate in group performances, helping them build confidence and teamwork skills.
                  <br />
                  The music program is led by a talented and passionate instructor who believes in making music education enjoyable, helping each child discover their unique musical potential.`
    },
    {
      image: After_School_Program,
      icon: prop10,
      title: "After School Program",
      para: `At <strong>Sparkle Kids Academy</strong>, our After School Program offers a safe, fun, and enriching environment for children once the school day ends. We provide a variety of activities designed to support learning, creativity, and social development. 
              <br />
              From homework assistance and educational games to arts, crafts, and recreational activities, our program keeps students engaged and productive. We aim to help children build valuable life skills, explore new interests, and make lasting friendships in a supportive setting.
              <br />
              Led by caring and experienced staff, our After School Program ensures that every child enjoys a balanced mix of study time and playtime, fostering confidence, teamwork, and a love for learning beyond the classroom.`
    },
    {
      image: Winter_Camp,
      icon: prop11,
      title: "Winter Camp",
      para: `At <strong>Sparkle Kids Academy</strong>, our Winter Camp offers an engaging and enriching experience for children during the winter season. We provide a variety of activities designed to support learning, creativity, and personal development.
              <br />
              Our camp includes sessions on Yoga, Oral Health, Dining Etiquette, Public Speaking, and more, ensuring that children stay active and continue learning in a fun environment. We aim to help children build valuable life skills, explore new interests, and make lasting friendships in a supportive setting.
              <br />
              Led by caring and experienced staff, our Winter Camp ensures that every child enjoys a balanced mix of educational and recreational activities, fostering confidence, teamwork, and a love for learning beyond the classroom.`
    },
    {
      image: Session_Break_Camp,
      icon: prop12,
      title: "Session Break Camp",
      para: `At <strong>Sparkle Kids Academy</strong>, our Session Break Camp provides children with an exciting and productive way to spend their school breaks. We offer a diverse range of activities designed to promote learning, creativity, and personal growth.
              <br />
              Our camp includes engaging sessions on Art, Dance, Public Speaking, and various games, ensuring that children remain active and continue learning in an enjoyable environment. We aim to help children develop essential life skills, discover new passions, and form lasting friendships in a supportive setting.
              <br />
              Led by our dedicated and experienced team, the Session Break Camp ensures that every child experiences a harmonious blend of educational and recreational activities, fostering self-confidence, teamwork, and a lifelong love for learning beyond the traditional classroom.`
    },
    {
      image: festival_camp,
      icon: prop13,
      title: "Dashain and Tihar Vacation Camp",
      para: `At <strong>Sparkle Kids Academy</strong>, our Dashain and Tihar Vacation Camp offers children a unique opportunity to celebrate these auspicious festivals with a blend of cultural immersion and engaging activities. We provide a variety of programs designed to foster learning, creativity, and community spirit during the festive season.
              <br />
              Our camp features a range of activities, including arts and crafts, kite making and flying, traditional games, music, dance, and excursions to local cultural sites. These activities aim to help children understand the cultural significance of Dashain and Tihar while developing valuable skills and forming lasting friendships.
              <br />
              Led by our dedicated and experienced staff, the Dashain and Tihar Vacation Camp ensures that every child enjoys a balanced mix of educational and recreational activities, fostering cultural awareness, creativity, and a sense of community during these special times of the year.`
    },
    {
      image: summer_camp,
      icon: prop14,
      title: "Summer Camp",
      para: `At <strong>Sparkle Kids Academy</strong>, our Summer Camp offers an exciting and fun-filled way for children to make the most of their school vacation. We provide a wide variety of activities designed to keep children engaged, active, and learning throughout the summer.
              <br />
              From outdoor adventures and sports to arts, crafts, and music, our camp offers a balanced mix of recreational and educational experiences. We aim to help children explore new hobbies, build valuable life skills, and make lifelong memories with friends.
              <br />
              Led by our enthusiastic and experienced staff, the Summer Camp ensures that every child enjoys a healthy blend of physical activity, creative expression, and personal development in a safe and supportive environment.`
    },
    {
      image: Weekend_Camp,
      icon: prop15,
      title: "Weekend Camp",
      para: `At <strong>Sparkle Kids Academy</strong>, our Weekend Camp offers children a fantastic way to make the most of their weekends with fun and enriching activities. We provide a variety of programs designed to support learning, creativity, and social development.
              <br />
              Our Weekend Camp includes exciting activities such as arts, crafts, music, games, and team-building exercises, ensuring children stay active and engaged during their time off from school. We aim to help children build valuable skills, explore new interests, and foster lasting friendships in a positive and supportive environment.
              <br />
              Led by our dedicated and experienced staff, the Weekend Camp guarantees that every child enjoys a perfect mix of education and fun, fostering confidence, teamwork, and a love for learning beyond the classroom.`
    },
  ];

  return (
    <div className="bg-[#CCE0FF] overflow-hidden">
      <StaticHeader />
      <div className="space-y-5">
        {/* heading */}
        <Useable
          message={"Sparklye by CYC"}
          mainText={"Building Tomorrows Leaders:"}
          subText={"Inspiring Innovation and Confidence in Every Child"}
        />

        {/* Banner Image */}
        <div className="w-[90vw] mx-auto object-cover border-t-8 border-t-red-500 border-r-8 border-r-green-500 border-b-8 border-b-blue-500 border-l-8 border-l-yellow-500 rounded-3xl overflow-hidden">
          <img src={bannerImage} alt={bannerImage} />
        </div>

        {/* Program Sections */}
        {programData.map((program, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex ${index % 2 === 0
                ? "max-lg:flex-col"
                : "flex-row-reverse max-lg:flex-col"
                } gap-6 md:gap-24 p-10 items-center`}
            >
              <div className="lg:w-[40%]">
                <AnimatedComponent>
                  <img
                    src={program.image}
                    alt={program.title}
                    className={`animate-animate object-cover max-sm:h-full max-md:hidden size-[500px]`}
                  />
                </AnimatedComponent>
              </div>
              <div className="lg:w-[60%]">
                <AnimatedComponent2>
                  <div className="flex justify-center items-start flex-col">
                    <img src={program.icon} alt="" className="size-[100px]" />
                    <h2 className="font-bold text-[30px]">{program.title}</h2>
                  </div>
                  <p
                    className="p-text"
                    dangerouslySetInnerHTML={{ __html: program.para }}
                  />
                </AnimatedComponent2>
              </div>
            </div>

            {index === 2 && <Booking />}
          </React.Fragment>
        ))}

        <p className="px-2 text-xs text-gray-600 italic">
          Disclaimer: Some images displayed on this page are sourced from the internet and are not owned by us.
        </p>
      </div>
    </div>
  );
};

export default Program;
