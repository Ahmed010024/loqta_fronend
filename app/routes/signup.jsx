import CoverImg from "~/components/home/coverImg";
import SignUpPage from "~/components/login/signUpPage";

export function meta() {
    return { title: "لقطة - تسجيل جديد" };
}
export default function Signup() {
    return (
        <>
            <CoverImg/>
            <SignUpPage/>
        </>
  );
}
