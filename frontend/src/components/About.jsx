import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             
For our restaurant, offering a blend of delicious regional dishes will attract food lovers looking for authentic flavors. You can serve specialties like Aloo Ke Gutke (spicy potato dish), Kafuli (a nutritious green leafy vegetable curry), Chainsoo (a protein-rich black gram dal), and Bal Mithai (a popular sweet made from khoya and sugar balls). Must-try dishes include Awadhi Biryani (fragrant rice with meat or vegetables), Galouti Kebabs (melt-in-the-mouth minced meat patties), Peda (a sweet made from condensed milk), Chole Bhature (spicy chickpeas with deep-fried bread), and Aloo Tikki Chaat (spicy potato patties with chutneys). These dishes will provide a delightful culinary experience, celebrating the rich and diverse food culture of the region.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
