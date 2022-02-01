import "../main-style.css";
import "../Delivery.scss";
import "../mixins.scss"
const TDishesCard = () => {
  return (
    <>
      <div className="container-fluid aWords" >
        <div className="row">
          <div className="col-6">
            <p id="aTastPar">Discover Top Dishes</p>
          </div>
          <div className="col-6">
            <a className="float-end pt-2 ms-5" id="aSeeallLink" href="#">
              See All{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </a>
          </div>
          <div className="container">
            <div className="row position-relative">
              <div className="col aDivTopDish">
                <a href="#">
                  <img
                    width="100%"
                    src="https://www.elmenus.com/public/img/should-delete/all-dishes.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col aDivTopDish">
                <a href="#">
                  <img
                    width="100%"
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b66b9310-bc6c-449c-a163-4c86947568c0.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col aDivTopDish">
                <a href="#">
                  <img
                    width="100%"
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a9dd12fb-782a-40d7-a9b3-34fba2802d2b.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col aDivTopDish">
                <a href="#">
                  <img
                    width="100%"
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/c4169de0-5ef1-462f-b9da-b190d5616acf.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col aDivTopDish">
                <a href="#">
                  <img
                    width="100%"
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/444d49c0-f073-4cba-bbb6-36838b1933f4.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col aDivTopDish">
                <a href="#">
                  <img
                    width="100%"
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/f7e33790-77d7-4739-8992-d73b810fdc0c.jpg"
                    alt=""
                  />
                </a>
              </div>
              <button type="button" className="aprevious rounded-circle" >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-chevron-left"
                  viewBox="0 0 20 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>{" "}
              </button>
              <button type="button" className="anext rounded-circle" >
                {" "}
                <b>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi bi-chevron-right"
                    viewBox="0 0 20 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>{" "}
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TDishesCard;
