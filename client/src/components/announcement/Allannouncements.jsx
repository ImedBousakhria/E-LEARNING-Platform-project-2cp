import React from "react";
import Announcementelement from "../super elements/Announcemento";
import "swiper/swiper-bundle.css";
import "swiper/css";
import arrow from "../../assets/icons/annouarrow.svg";
import "swiper/css/navigation";
import { useContext, useState, useEffect } from "react";
import { AnnouncementContext } from "../../content page/Announcements/Teacherannounce";
import axios from "axios";
import { propsContext } from "../../content page/Mainapp";
import { authContext } from "../../App";

const Allannouncements = ({ activeCardIndex, setActiveCardIndex }) => {
  // GET announcements
  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/announcement/getAll"
        );
        setAnnouncements(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAnnouncements();
  }, []);

  const [currentId, setCurrentId] = useState(null);
  /* // get by id
  const handleUpdateAnnouncement = (id, updatedAnnouncement) => {
    axios
      .put(`http://localhost:3000/announcement/${id}`, updatedAnnouncement)
      .then((response) => {
        // handle success, update state or trigger a re-fetch of the data
      })
      .catch((error) => {
        // handle error
      });
  }; */

  const {
    setContentToEdit,
    editMode,
    setBarContent,
    barContent,
    announcements,
    setAnnouncements,
  } = useContext(AnnouncementContext);

  // GET announcements
  //const [announcements, setAnnouncements] = useState([]);

  /* useEffect(() => {
  const getAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:3000/announcement/getAll");
      setAnnouncements(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  getAnnouncements();
}, []);
 */

  const { data } = useContext(propsContext);
  const { userID } = useContext(authContext);
  const user = "said";
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = announcements.slice(firstPostIndex, lastPostIndex);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = lastPostIndex >= announcements.length;

  const lastElement = announcements.slice(-4);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      className={` ${
        editMode ? " pointer-events-none blur-sm filter" : ""
      } flex flex-col gap-4 rounded-[10px] bg-white px-8 py-6`}
    >
      <div className="flex items-center justify-between">
        <p className="mb-3 text-lg font-semibold text-nightblue">
          Announcements
        </p>

        <div className="flex items-center gap-4">
          <button
            className={`${
              isPrevDisabled ? "opacity-50" : ""
            } rotate-180 cursor-pointer`}
            alt=""
            onClick={handlePrevClick}
            disabled={isPrevDisabled}
          >
            <img src={arrow} alt="" />
          </button>
          <button
            className={`${isNextDisabled ? "opacity-50" : ""} cursor-pointer`}
            onClick={handleNextClick}
            disabled={isNextDisabled}
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <section className="grid grid-cols-2 grid-rows-2 gap-4">
        {currentPosts.map((Element, index) => {
          console.log(Element);
          return (
            <Announcementelement
              /* self = { userID === Element.sender._id } */
              title={Element.title}
              isDisplayed={false}
              onClick={() => {
                setActiveCardIndex(index);
                setBarContent(Element);
                setContentToEdit(Element);
              }}
              isActive={activeCardIndex === index && barContent !== null}
              /* profilepicture={Element.profilepicture} */
              /* person={Element.sender.firstName + ' ' + Element.sender.lastName} */
              content={Element.description}
              /* image={Element.image} */
            />
          );
        })}
      </section>
    </div>
  );
};

export default Allannouncements;
