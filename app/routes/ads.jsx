import AdsPage from "~/components/ads/adsPage";
import CoverImg from "~/components/home/coverImg";
export function meta() {
    return { title: "لقطة - الإعلانات" };
  }
export default function Ad() {
    return (
        <>
            <CoverImg/>
            <AdsPage/>
        </>
  );
}
