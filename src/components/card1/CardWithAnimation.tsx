import React from "react";
import CardStyle from "./CardStyle";
function CardWithAnimation() {
  const data = [
    {
      img: "",
      title: "lorem Ipsum",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
    {
      img: "",
      title: "Sed ut perspiciatis",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    },
    {
      img: "",
      title: "Magni Dolores",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      img: "",
      title: "Nemo Enim",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
  ];
  return (
    <CardStyle>
      <img src="/assets/svgs/heart-pulse-fill.svg" alt="" />
      <h2></h2>
      <p></p>
    </CardStyle>
  );
}

export default CardWithAnimation;
