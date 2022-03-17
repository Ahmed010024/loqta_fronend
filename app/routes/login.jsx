import CoverImg from "~/components/home/coverImg";
import LoginPage from "~/components/login/loginPage";
export function meta() {
    return { title: "لقطة - تسجيل الدخول" };
}
export default function Login() {
    return (
        <>
            <CoverImg/>
            <LoginPage/>
        </>
  );
}
