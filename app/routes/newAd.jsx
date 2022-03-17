import NewAd from "~/components/ads/newAd";
import CoverImg from "~/components/home/coverImg";
export function meta() {
    return { title: "لقطة - إضافة إعلان" };
  }
export default function New() {
    return (
        <>
            <CoverImg/>
            <NewAd/>
        </>
  );
}
