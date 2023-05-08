import React, { useContext, useState, useEffect } from "react";
import profile from "../../../assets/profile/profileholder.png";
import Profile from "../../../components/reusable/Profile";
import Notificaitonhandling from "../../../components/super/Notificaitonhandling";
import grad from "../../../assets/icons/grad.svg";
import { CoursesContext } from "../Teachercourses";
import Lessondisplayed from "../../../components/courses/Lessondisplayed";
import { programs } from "../../../landing page/content/pograms";
import Studentelement from "../../../components/students/components/Studentelement";
import arrow from "../../../assets/icons/Annouarrow.svg";
import { propsContext } from "../../Mainapp";
import Profilepage from "../../../components/super/Profilepage";
import DiscussionForums from "../../../components/super/DiscussionForums";
import { assignmentteacher } from "../../Assignment/content/main";
import Quizzcontainer from "../../../components/quizzes/Quizzcontainer";
import { authContext } from "../../../App";
import axios from "axios";
import StudentAssignmentSubmit from "../../../components/reusable/StudentAssignmentSubmit";

const Coursebar = () => {
  const { barContent, setBarContent, activeProgIndex } =
    useContext(CoursesContext);

  const { userID } = useContext(authContext);
  const [connectedUser, setConnetedUser] = useState();
  const { userType } = useContext(propsContext);

  useEffect(() => {
    const getUserById = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/get/${id}`
        );
        const user = response.data;
        console.log(user);
        setConnetedUser(user);
      } catch (error) {
        console.error(error);
      }
    };
    getUserById(userID);
    console.log(connectedUser);
  }, [userID]);

  const { notificaiton, profileShown } = useContext(propsContext);

  const firstContent = useState(assignmentteacher);
  const { showQuizzContainer, setShowQuizzContainer } =
    useContext(CoursesContext);

  const { dataElements, elementIndex } = useContext(CoursesContext); ; 

  return (
    <div className="sticky right-0 top-0 flex max-h-screen basis-[23%] flex-col gap-4 border-l border-gray bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <Notificaitonhandling isnotification={notificaiton} />
        {/* <DiscussionForums type={"lesson"} firstContent={firstContent} /> */}
        {connectedUser && (
          <Profile
            profilepicture={profile}
            person={connectedUser.firstName + " " + connectedUser.lastName}
            order={3}
          />
        )}
      </div>

      { profileShown ? (
        <Profilepage name={"imed"} />

      ) : showQuizzContainer ? (
        <Quizzcontainer />
      ) : elementIndex[0]?(<StudentAssignmentSubmit/>) : barContent === null ? (
        userType.isAdmin && activeProgIndex !== null ?  (
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 flex items-center justify-between pl-2">
                <h4>Teachers</h4>
                <div className="flex gap-4">
                  <img src={arrow} alt="" className=" -z-10 rotate-180" />
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-2">
                {programs[activeProgIndex].teachers.map((e, index) => (
                  <Studentelement
                    profilepicture={profile}
                    person={e}
                    user={"admin"}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between pl-2">
                <h4>Students</h4>
                <div className="flex gap-4">
                  <img src={arrow} alt="" className=" -z-10 rotate-180" />
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-2">
                {programs[activeProgIndex].students.map((e, index) => (
                  <Studentelement
                    profilepicture={profile}
                    person={e}
                    user={"admin"}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className=" m-auto">
            <img src={grad} />
            <p className=" text-md mt-2 text-center font-semibold text-gray ">
              Select a lesson ...
            </p>
          </div>
        )
      ) : (
        <div className="mt-6 w-full">
          {
            <Lessondisplayed
              /* self={user === barContent.person} */
              content={barContent.description}
              isDisplayed={true}
              setBarContent={setBarContent}
            />
          }
        </div>
      )}
    </div>
  );
};
export default Coursebar;
