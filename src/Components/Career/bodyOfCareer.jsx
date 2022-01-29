import Job from "./Job";
import logo from '../../images/Career/logo_horizontal.svg'
const BodyOfCareer = () => {
  return (
    <>
      <div class="body-content mb-5 pb-5">
        <section class="section1">
          <div class="container">
            <h3 class="text-center mb-5">ABOUT ELMENUS</h3>
            <p>
              elmenus is a venture-backed food discovery startup based in Egypt
              that serves over 1.5 Million monthly users. With venture funding
              in total of $20M, we are building a platform that combines a
              social, visual and personalized experience to help people discover
              and order the food they will love.
            </p>
            <p>
              We answer the global existential question of “What will I eat
              today?”. elmenus has become the leading food discovery platform in
              Egypt by providing over 1.5 Million users every month with
              comprehensive restaurant information for over 12,000 restaurants
              including their menus, reviews, food photos all powered by a
              machine learning food recommender that personalizes the experience
              on the <strong>dish</strong> level to our users.
            </p>
          </div>
        </section>
        {/* ----------------------------------------------------------------------- */}
        <section class="mt-5">
            <div class="container">
                <h3 class="text-center">Join Us</h3>
                <h6 class="text-center mb-5">CURRENT OPENINGS</h6>
                <div class="view-jobs">
                    <Job title="test"/>

                </div>
            </div>
        </section>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      <div class="bg position-relative">
        <div class="bg2 position-absolute"></div>
    </div>
    <footer class="container mb-5 text-center">
        <a href="https://recruitee.com/">
            <span class="mt-2">Hiring With</span>
            <span>  <img src={logo}/></span>
          
        </a>
    </footer>
    </>
  );
};

export default BodyOfCareer;
