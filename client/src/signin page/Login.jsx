import Form from "./src/Form";
import logo from "../assets/logos/logo.svg";
import schoolboy from "../assets/images/Student.svg";
import buildings from "../assets/elements/buildings.png";
import bling from "../assets/elements/bling.png"
import bbook from "../assets/elements/bbook.png";
import ybook from "../assets/elements/ybook.png";
import globe from "../assets/elements/globe.png";
import paper from "../assets/elements/paper.png";
import cloud from "../assets/elements/cloud.png";
import bird from "../assets/elements/bird.png";

const Login = () => {
  return (
    <div className="bg-primary h-screen overflow-hidden">
      <div className="flex h-screen mx-auto max-w-[1400px] max-h-[900px] items-center">

        <div className="flex flex-col place-self-start">
          <header className="ml-6 mt-6 flex items-center gap-6">
            <img src={logo} alt="logo" className="" />
            <h2 className=" text-[2rem] tracking-wider text-nightblue">
              Elites School E-learning platform
            </h2>
          </header>

          <div className="relative h-[660px]">
            <img
              src={schoolboy}
              className="absolute bottom-0 left-52 z-20 w-60"
            />
            <img src={buildings} className="absolute bottom-0 left-[8rem] z-10 w-[25rem]" />
            <img src={globe} className="absolute bottom-[30%] left-24 z-20" />
            <img src={bbook} className="absolute bottom-52 left-[38%]" />
            <img src={ybook} className="absolute bottom-[55%] left-36 z-20" />
            <img
              src={paper}
              className="absolute bottom-[50%] left-[38%] z-20 w-24"
            />
            <img
              src={bling}
              className="absolute bottom-[36%] left-[22%] z-30"
            />
            <img
              src={bling}
              className="absolute bottom-[40%] left-[35%] z-30"
            />
            <img
              src={bling}
              className="absolute bottom-[25%] left-[36%] z-30"
            />
            <img src={bling} className="absolute bottom-[6%] left-[24%] z-30" />
            <img src={cloud} className="absolute bottom-[64%] left-28 z-0" />
            <img src={cloud} className="absolute bottom-[65%] left-[40%] z-0" />
            <img src={bird} className="absolute bottom-[6%] left-[24%] z-30" />
          </div>
        </div>

          <div className=" mx-auto">
            <Form />
          </div>
      </div>
    </div>
  );
};

export default Login;
/*absolute bottom-0 left-[19%]*/