import React from "react";
import MyParagraph from "./MyParagraph";

export default function DemoOutput(props) {
  console.log("[demo output] running");
  return <MyParagraph>{props.show ? "This is a new" : ""}</MyParagraph>;
}
