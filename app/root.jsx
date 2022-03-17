import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";

import styles from "~/styles/globals.css";
import aos from 'aos/dist/aos.css';
import swiper from 'swiper/swiper-bundle.css';
import Index from './index'
import { API, parseCookie } from "./config/variables";
import axios from "axios";
export function meta() {
  return { title: "لقطة" };
}
export function links() {
  return [{ rel: "stylesheet", href: styles },{ rel: "stylesheet", href: aos },{ rel: "stylesheet", href: swiper }];
}
export async function loader ({ request,params }){
  const cookieHeader = parseCookie(request.headers.get("Cookie"));
  console.log(cookieHeader)
  if(cookieHeader){
    console.log(cookieHeader)
    const user = await axios.get(`${API}/user/data`, {
      headers: {
        'Authorization': `${cookieHeader.token}`
      }
    })
    .then((res) => {
      return res.data.user
    })
    .catch((error) => {
      console.error(error)
      return false
    })
    return user
  }

  return false

}

export default function App() {
  const loaderData = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <Meta />
        <Links />
      </head>
      <body>
        <Index loaderData={loaderData} >
          <Outlet />
        </Index>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
