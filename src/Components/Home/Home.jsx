import Body from "./body/bodyofHome";
import Header from "./Header/header";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const language = useSelector((state) => state.language.lang);

    return (
      
      <>
      <div  dir={language == "English" ? "rtl" : "ltr"}>
        <Header/>
        <Body/>
      </div>
      </>
    );
  }
  