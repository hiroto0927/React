import Content from "../components/contents/content";
import Swiper from "../components/contents/swipe/swiper";
import Header from "../components/header";
import Hooter from "../components/hooter";
import Sample from "./sample_header";

export default function Test1() {
  return (
    <div>
      <Sample />
      {/* <Header /> */}
      <Swiper />
      <Content />
      <Hooter />
    </div>
  );
}
