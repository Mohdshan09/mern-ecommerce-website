import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a simple idea: everyday clothing should be
            comfortable, well made and easy to buy. What started as a small
            passion project has grown into an online store offering carefully
            selected apparel for men, women and kids.
          </p>
          <p>
            From breathable cotton tees and tailored trousers to warm jackets
            for the colder months, every piece in our collection is chosen for
            its fabric, fit and durability. We keep adding new styles so you
            can always find something that suits your wardrobe and your budget.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to make good quality fashion accessible to everyone.
            We want shopping with us to be simple and trustworthy, from browsing
            the collection and choosing your size to secure checkout, fast
            delivery and easy returns.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-500">
            Every product is checked for fabric quality, stitching and fit
            before it reaches our store. We only list clothing we would be
            happy to wear ourselves.
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-500">
            Browse by category, filter by style, pay online or with cash on
            delivery, and track your orders from your account, all in a few
            clicks.
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-500">
            Have a question about sizing, an order or a return? Our support
            team is always ready to help and will get back to you as quickly as
            possible.
          </p>
        </div>
      </div>

      <NewsLetter/>
    </div>
  );
};

export default About;
