import "./AboutUs.css";
import SectionRight from "./SectionRight";
import Asst  from "../../images/AboutUs/Asset4.png";
import Asst2  from "../../images/AboutUs/Asset1.png";
import Asst3 from "../../images/AboutUs/Asset2.png";
import Asst4 from "../../images/AboutUs/Asset3.png";
import SectionLeft from "./SectionLeft";
export function AboutUs() {
  return (
    <>
      <div className="container-fluid">
        <div className="aboutus_para container" style={{"width":"79%"}}>
          <p>
            Millions of people around the world ask the same question everyday
            “What will I eat today?” It’s the question that triggered the
            journey to build elmenus. elmenus is an Egypt based company that
            started in 2011 with the vision to help people decide what to eat.
            We are building a platform that combines a social, visual and
            personalized experience to help people discover and order the food
            they love.
          </p>
          <h1 className="aboutus_whatis my-5">
            <span>WHAT IS ELMENUS</span>
          </h1>
        </div>
        <SectionRight
          srcImg={Asst}
          num="01"
          para="A comprehensive platform with over 6,000 restaurants"
          text="Whether you’re looking for Delivery or Dineout restaurants,
                you will find them all on elmenus Because we do our best to ensure
                we have all the info on every restaurant in Egypt and always up to date."
        />
        
         <SectionLeft
          srcImg={Asst2}
          num="02"
          para="Discovery to the dish level"
          text="Whether you want to know the best steaks in your area or the best restaurants serving fatta,
                we’ve got you covered. Discover food by the dish 
                you’re craving with specially curated food photos to visualize your next meal."
        />
         <SectionRight
          srcImg={Asst3}
          num="03"
          para="Order in a click of a button"
          text="To make your ordering experience easier, 
                we introduced our fully automated online ordering in mid 2018. 
                Follow this icon(Order online icon) to Customize your order, 
                pay with your credit card and your food will be on its way."
        />
          <SectionLeft
          srcImg={Asst4}
          num="04"
          para="The Foodie Community"
          text="elmenus has a vibrant and growing foodie community, 
                brought together by their passion to share their food experiences through photos and reviews. 
                Share your experiences too and help millions others decide what and where to eat."
        />
      
      </div>
      
    </>
  );
}
