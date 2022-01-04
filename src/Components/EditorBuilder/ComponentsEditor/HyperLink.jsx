import React from "react";
import { useSelector } from "react-redux";
import { selectHyperLink } from "../../../redux/mySlice";
export default function HyperLink() {
  const link = useSelector(selectHyperLink);
  console.log(link, "link");
  return (
    <div>
      {[link].map((item, index) => {
        console.log(item, "item");
        return (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
}

//   <a href={link.link} alt="Google">
//     Google
//   </a>
