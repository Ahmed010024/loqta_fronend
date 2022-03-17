import CoverImg from "~/components/home/coverImg";
import BookmarksPage from "../components/bookmarks/bookmarksPage";
export function meta() {
    return { title: "لقطة - المفضلة" };
  }
export default function Ad() {
    return (
        <>
            <CoverImg/>
            <BookmarksPage/>
        </>
  );
}
