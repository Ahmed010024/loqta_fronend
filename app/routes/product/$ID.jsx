import axios, { Axios } from "axios";
import { useLoaderData } from "remix";
import AdPage from "~/components/ads/adPage";
import CoverImg from "~/components/home/coverImg";
import Footer from "~/components/tmp/footer";
import { API } from "~/config/variables";
export function meta() {
    return { title: "لقطة - اسم الاعلان" };
}
export async function loader ({ request,params }){
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang")
  const {ID} = params
  if(ID){
    const product = await axios.get(`${API}/product/${ID}`).then((res) => {
      if(res.status === 200){
        return {
          product:res.data.product,
          images:res.data.images
        }
      }
      return false
    }).catch((err) => {
      console.log(err)
    })
    return product

  }else{
    throw new Response("Not Found", {status: 404});
  }

}

export default function Ad() {
  const product = useLoaderData()
    return (
      <>
        <CoverImg/>
        <AdPage product={product}/>
      </>
  );
}
