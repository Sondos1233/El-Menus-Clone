import "./AboutUs.css";
import SectionRight from "./SectionRight";
import Asst  from "../../images/AboutUs/Asset4.png";
import Asst2  from "../../images/AboutUs/Asset1.png";
import Asst3 from "../../images/AboutUs/Asset2.png";
import Asst4 from "../../images/AboutUs/Asset3.png";
import SectionLeft from "./SectionLeft";
import { useTranslation} from "react-i18next";
export function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid">
        <div className="aboutus_para container" style={{"width":"79%"}}>
          <p>
            {t('about_desc')}
          </p>
          <h1 className="aboutus_whatis my-5">
            <span> {t('WHAT_IS_ELMENUS')}</span>
          </h1>
        </div>
        <SectionRight
          srcImg={Asst}
          num="01"
          para={t('para1')}
          text={t('text1')}
        />
        
         <SectionLeft
          srcImg={Asst2}
          num="02"
          para={t('para2')}
          text={t('text2')}
        />
         <SectionRight
          srcImg={Asst3}
          num="03"
          para={t('para3')}
          text={t('text3')}
        />
          <SectionLeft
          srcImg={Asst4}
          num="04"
          para={t('para4')}
          text={t('text4')}
        />
      
      </div>
      
    </>
  );
}
