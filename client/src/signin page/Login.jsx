import Form from "./src/Form";
import logo from "../assets/logos/logo.svg";
import schoolboy from "../assets/images/Student.svg";
import buildings from "../assets/elements/buildings.svg";

const Login = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-primary1">
      <header className="flex h-max w-max items-center gap-8 pl-14 pt-14">
        <img src={logo} />
        <h1 className="font-bold text-gray-800">
          Elites School E-learning platform
        </h1>
      </header>

      <img src={schoolboy} className=" absolute bottom-0 left-48 z-10 w-56" />
      <img src={buildings} className=" absolute bottom-0 left-28 z-0 w-96" />
      <div className=" mr-24 self-end">
        <Form />
      </div>
    </div>
  );
};

export default Login;
