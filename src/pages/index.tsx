import { stat } from "fs";
import { useState } from "react";
import Content from "../components/contents/content";
import Swiper from "../components/contents/swipe/swiper";
import Header from "../components/header";
import Hooter from "../components/hooter";
import HeaderSample from "../components/sample_header";
import Sample from "../components/sample_header";

export default function Test1() {
  const [state, setState] = useState("bg-gray-900");
  return (
    <div className={state}>
      <HeaderSample />
      <Swiper />
      <Content />
      <Hooter />
    </div>
  );
}
