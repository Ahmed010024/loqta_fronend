import CoverImg from "~/components/home/coverImg";
import UserAds from "../components/ads/userAds";
export function meta() {
    return { title: "لقطة - إعلاناتي" };
  }
export default function myAds() {
    return (
        <>
            <CoverImg/>
            <UserAds/>
        </>
  );
}
