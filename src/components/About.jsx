import Img from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row justify-center items-center md:items-start py-8 md:pt-16 gap-10 bg-blue-700 w-full h-auto md:h-screen gradient-bg-page">
      <div className="w-[80%] md:w-80 h-auto md:h-40 ">
        <img
          className="rounded-md w-full h-64 bg-no-repeat bg-contain"
          src={Img}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 w-[80%] md:w-[400px]">
        <h2 className="font-bold text-red-300">ABOUT ME</h2>
        <div className="text-white font-bold text-xl md:text-2xl text-gradient">
          A dedicated Front-end Developer that lives in Lagos, Nigeria.
        </div>
        <div className="text-white text-lg md:text-base font-medium">
          As an Junior Front-end Developer, I possess the quality and skills of
          a passionate developer using our most utilized technology: HTML, CSS,
          JavaScript, React, Tailwindcss, and SCSS. I excel in designing fully
          responsive and maintainable website, that gives our users good
          experience. I equally love or would love working with teams to
          accomplish stand-out results as expectected.
        </div>
      </div>
    </div>
  );
};

export default About;
