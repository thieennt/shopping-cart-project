import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { BsArrowRight } from "react-icons/bs";
import Feature from "../Feature";
import CircleDiscountIcon from "../../icons/CircleDiscount";

export interface IAppProps {}

export default function Header(props: IAppProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="header-container">
      <Slider {...settings}>
        {listSlider?.length > 0 &&
          listSlider?.map((item, index) => {
            return (
              <div
                className="slider-items"
                key={index}
                style={{ display: "flex" }}
              >
                <div className="slider-wrapper">
                  <div className="slider-item">
                    <div className="slider-info">
                      <p className="slider-label">{item.label}</p>
                      <h2 className="slider-title">{item.title}</h2>
                      <button className="slider-button">
                        <p>{item.btn}</p>
                        <span>
                          <BsArrowRight />
                        </span>
                      </button>
                    </div>
                    <div className="slider-image">
                      <img src={item.img} alt="" />
                      <div className="slider-discount">
                        <CircleDiscountIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
      <Feature />
    </div>
  );
}

const listSlider = [
  {
    id: 1,
    label: "Welcome to chairy",
    title: "Best Furniture Collection for your interior.",
    btn: "Shop Now",
    img: "https://s3-alpha-sig.figma.com/img/cdc7/113b/68039af7d7222a3d15eae2a39d068924?Expires=1667174400&Signature=YXEtQBq0GcZpp04JeNqTGG3qtR1J1KvC8vJ~hUIe1rcVihb9docT8bsiAW23wipeMa~baVuT4sbDeDIa4SV80pL7UJLWlRM~8Od2jHA4GADjtrR-a6mx~1Lks3UEpKz1KGCfD~dYcCiYinvymIgVHa7pWcxo7ORSxTP53w~ixJ1xZtygw5mUg6M~X8tK05V4SMy1bB8Z39p-Zlb8raq2Ff79XmN3zaRFsci2xMlH83znZR37hAWd2d6bMZ-1C6VN90glHMGlwfBLiGI~qhfY6k0TaMzAY1kFJ7APRJkhthq9XRXsZB79M2go~mDRxnK3HHY58ZG8GlZUJ-wBI8cFMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    discount: "50%",
  },
  {
    id: 2,
    label: "Welcome to chairy",
    title: "Best Furniture Collection for your interior.",
    btn: "Shop Now",
    img: "https://s3-alpha-sig.figma.com/img/cdc7/113b/68039af7d7222a3d15eae2a39d068924?Expires=1667174400&Signature=YXEtQBq0GcZpp04JeNqTGG3qtR1J1KvC8vJ~hUIe1rcVihb9docT8bsiAW23wipeMa~baVuT4sbDeDIa4SV80pL7UJLWlRM~8Od2jHA4GADjtrR-a6mx~1Lks3UEpKz1KGCfD~dYcCiYinvymIgVHa7pWcxo7ORSxTP53w~ixJ1xZtygw5mUg6M~X8tK05V4SMy1bB8Z39p-Zlb8raq2Ff79XmN3zaRFsci2xMlH83znZR37hAWd2d6bMZ-1C6VN90glHMGlwfBLiGI~qhfY6k0TaMzAY1kFJ7APRJkhthq9XRXsZB79M2go~mDRxnK3HHY58ZG8GlZUJ-wBI8cFMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    discount: "40%",
  },
  {
    id: 3,
    label: "Welcome to chairy",
    title: "Best Furniture Collection for your interior.",
    btn: "Shop Now",
    img: "https://s3-alpha-sig.figma.com/img/cdc7/113b/68039af7d7222a3d15eae2a39d068924?Expires=1667174400&Signature=YXEtQBq0GcZpp04JeNqTGG3qtR1J1KvC8vJ~hUIe1rcVihb9docT8bsiAW23wipeMa~baVuT4sbDeDIa4SV80pL7UJLWlRM~8Od2jHA4GADjtrR-a6mx~1Lks3UEpKz1KGCfD~dYcCiYinvymIgVHa7pWcxo7ORSxTP53w~ixJ1xZtygw5mUg6M~X8tK05V4SMy1bB8Z39p-Zlb8raq2Ff79XmN3zaRFsci2xMlH83znZR37hAWd2d6bMZ-1C6VN90glHMGlwfBLiGI~qhfY6k0TaMzAY1kFJ7APRJkhthq9XRXsZB79M2go~mDRxnK3HHY58ZG8GlZUJ-wBI8cFMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    discount: "30%",
  },
];
