import SectionContainer from "./SectionContainer";
const socialIcon = [
  {
    id: 1,
    iconName: "icon-linkedin-squared",
    link: "https://www.linkedin.com/in/lucasfreitas-dev/",
  },
  {
    id: 2,
    iconName: "icon-github-squared",
    link: "https://github.com/lucasfreitas-dev",
  },
  {
    id: 3,
    iconName: "icon-twitter-squared",
    link: "https://twitter.com/barranull/",
  }
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/avatar.jpeg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Lucas <span>Freitas</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                Hello! My name is Lucas Freitas. I have been working with IT for 9 years now. <br/><br/>
                I`m curently working as Tech Lead at Hurb.<br/>      
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
