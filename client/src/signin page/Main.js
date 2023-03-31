import Form from "./src/Form";
import logo from "./../src/assets/logos/logo.svg"
import schoolboy from "./../src/assets/images/Student.svg"
import buildings from "./../src/assets/elements/buildings.svg"

const App = () => {
    return (
      <div className="bg-primary1 w-screen h-screen flex flex-col">

        <header className="flex items-center gap-8 w-max h-max pl-14 pt-14">
          <img src={logo}/>
          <h1 className="font-bold text-gray-800">Elites School E-learning platform</h1>
        </header>


          <img src={schoolboy} className=" w-56 absolute bottom-0 left-48 z-10" />
          <img src={buildings} className=" w-96 absolute bottom-0 left-28 z-0"/>
          <div className=" self-end mr-24">
            <Form/>   
          </div>
        </div>
      
    )
}

export default App;