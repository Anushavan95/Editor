import React from "react";
import { useSelector } from "react-redux";
import { selectHyperLink } from "../../../redux/mySlice";
import shortid from "shortid";
export default function HyperLink() {
  const link = useSelector(selectHyperLink);
  let obj = {
    id: shortid.generate()
  };
  console.log(obj);

  return (
    <div key={obj.id}>
      <a href={link.link} alt="Google">
        Google
      </a>
    </div>
  );
}
