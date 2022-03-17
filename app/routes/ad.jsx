import AdPage from "~/components/ads/adPage";
import CoverImg from "~/components/home/coverImg";
import Footer from "~/components/tmp/footer";
import Header from "~/components/tmp/header";
import TopHeader from "~/components/tmp/topHeader";
export function meta() {
    return { title: "لقطة - اسم الاعلان" };
  }
export default function Ad() {
    return (
      <>
        <CoverImg/>
        <AdPage/>
      </>
  );
}
