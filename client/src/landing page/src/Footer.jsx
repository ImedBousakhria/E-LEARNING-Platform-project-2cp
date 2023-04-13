import React from "react";
import { wiliya } from "../content/footer";
import Wiliya from "../../components/landing/Wiliya";
import facebook from "../../assets/socials/facebook.svg"; 
import instagram from "../../assets/socials/instagram.svg"; 
import tik_tok from "../../assets/socials/tik_tok.svg" ; 



const Footer = () => {
  return (
    <footer className="bg-nightblue mt-[3rem] " id="Contact">
      <div className="mx-auto max-w-[1280px]">
        <section className="flex justify-between">
          {wiliya.map((Element) => {
            return (
              <Wiliya
                name={Element.name}
                locaiton={Element.locaiton}
                email={Element.email}
                phone={Element.telephone}
              />
            );
          })}
        </section>
        <section className="text-white flex justify-between py-4">
          <p>Elites School of English .</p>
          <div className="flex gap-3">
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={tik_tok} />
            </a>
          </div>
          <p>Copyright  All rights reserved .</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
