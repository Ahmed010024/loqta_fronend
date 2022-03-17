import { useLoaderData } from "remix";
import AdsPage from "~/components/ads/adsPage";
import CoverImg from "~/components/home/coverImg";
export function meta() {
    return { title: "لقطة - الإعلانات" };
  }

  export async function loader ({ request,params }){
    const {ID} = params
    if(ID){
     return ID
    }
    throw new Response("Not Found", {status: 404});
  }
export default function Ad() {
  const data = useLoaderData()
    return (
        <>
            <CoverImg/>
            <AdsPage branch={data}/>
        </>
  );
}
