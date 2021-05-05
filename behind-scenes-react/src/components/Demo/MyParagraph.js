import React from "react";

export default function MyParagraph(props) {
  console.log("[MyParagraph] running");
  return <p>{props.children}</p>;
}
