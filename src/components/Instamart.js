import React from "react";

const Section = ({ title, description }) => {
  return (
    <div className="border border-orange-900  p-3 m-2 text-medium shadow-lg">
      <h3 className="font-bold my-2 text-gray-900 ">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mx-2 my-2 p-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
      />
      <Section
        title={"Team - Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
      />
      <Section
        title={"Careers - Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        }
      />
    </div>
  );
};

export default Instamart;
