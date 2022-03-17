import Ads from "~/components/home/ads";
import CategSection from "~/components/home/categSection";
import CoverImg from "~/components/home/coverImg";
export function meta() {
  return { title: "لقطة - الرئيسية" };
}
export default function Index() {
  return (
    <>
      <CoverImg/>
      <CategSection/>
      <Ads/>
    </>
  );
}
