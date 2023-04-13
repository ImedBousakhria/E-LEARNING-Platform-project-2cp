import Profile from "../reusable/Profile";

const Notificationcontentelement = ({ notificationelement }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="before:m-auto before:block before:h-[1px] before:w-[90%]  before:bg-darkgray before:content-[''] ">
        <p className="text-center text-[1rem] text-darkgray">
          {notificationelement.date}
        </p>
      </div>
      <div className="gridlayout gap-x-2 ">
        <div className=" ">
          <img
            className="h-full  w-full object-contain"
            src={notificationelement.profile.picture}
          />
        </div>
        <div>
          <p className="text-[1rem]">
            <span className=" mr-1  font-medium ">
              {notificationelement.profile.name}
            </span>
            {notificationelement.action}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notificationcontentelement;
