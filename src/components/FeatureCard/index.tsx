import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

interface IData {
  id: number;
  name: string;
  img: string;
  price: string;
  prevPrice: string;
}

export interface IFeatureCardProps {
  title: string;
  data: IData[];
  slide: number;
}

export default function FeatureCard(props: IFeatureCardProps) {
  const { title, data, slide } = props;

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <span className="arrow-left">
          <BsArrowLeft style={{ fontSize: "18px" }} />
        </span>
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <span className="arrow-right">
          <BsArrowRight style={{ fontSize: "18px" }} />
        </span>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <h1 className="card-title">{title}</h1>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className="card-item" key={index}>
                <img src={item.img} alt="" />
                <div className="actions"></div>
                <div className="product-info">
                  <div>
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                  </div>
                  <div className="add-to-cart">
                    <CiShoppingCart style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
