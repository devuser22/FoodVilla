import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-orange-900  p-3 m-2 text-medium shadow-lg">
      <h3 className="font-bold my-2 text-gray-900 ">{title}</h3>
      {isVisible ? (
        <button
          className="  shadow-lg px-2 bg-slate-200 mb-2"
          onClick={() => setIsVisible(true)}
        >
          Hide
        </button>
      ) : (
        <button
          className="  shadow-lg px-2  bg-slate-200 mb-2"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team");

  return (
    <div>
      <h1 className="text-3xl font-bold mx-2 my-2 p-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        isVisible={visibleSection == "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team - Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        isVisible={visibleSection == "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Careers - Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
        isVisible={visibleSection == "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
