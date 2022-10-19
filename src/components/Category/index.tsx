import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

const TopCategories = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="category-container">
      <div className="category-wrapper">
        <h1 className="category-title">Top Categories</h1>
        <Slider {...settings}>
          {listCategories.map((item, index) => {
            return (
              <div className="category-item" key={index}>
                <img src={item.img} alt="" />
                <div className="product-info">
                  <div>
                    <h2>{item.name}</h2>
                    <span>${item.quantity} Products</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TopCategories;

const listCategories = [
  {
    id: 1,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/16fe/2c50/29cda46ce552fa79c00b7d3b3cd99a51?Expires=1667174400&Signature=PJt6FkVuw50mXJVhDwFqQTaziwVOxntdqL6eTgdzBtiRv8vqaY~srcShOGUXdb8VgcJKRktuC5S6M~-t2GllADioFuJJrj0UjxDDoQk0m6HwZCR10kh1ugW99RbfBZDimeTHCHMz4hGvffhw7RZ8X21kiopMdHB48YOjbRfhFAMw1Q7~nNjqwJjfk6KkppcGhXYVED7eRw3HdYdjVlk~bVwvUhTgPBk-IavaFZhj4JyFUMouxM6ooSo0Ejgxqf4GBCPlbbf8AKc7YaV1qJ464zQRGFQmmLP02g0S1bUQoBabhHCJWqUQHaka-sfpxS5VzJqNKg1iLNiJR2HHVAUwkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    quantity: 303,
  },
  {
    id: 2,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/df9c/c5a6/5588ecf2173ee9d83f23f5a2d7dd1e51?Expires=1667174400&Signature=BsDbLHIRTqyVIFv5kHTHvqK2u4raP2H28tIH4EKnH33q1Xomh6TtwsZnIz1HGsQt4mV2xF02r8niO2J63aN7RRg5ADnGknOYExxjMdwavbjE6OQ6s~q4AeOGM1S3GzcVjc9M8fSqUVnxnFiTPQjRm1pFrMZLw5zQkyvmy-l3znphfcK4rTcLJ79YaLr2kgPThTCRcpRx4-9nt8BkC5ZEufjRAs42LKfSlZxo2Xsv~~Tp~mWSHkaTFbDdWJ8NkSNW0kWjTSZKXDb1RwudPKugICqV6TBw0S~lq-lnLhHS1uZ6-477iYT1boVUSOrzSZToWp3-2yNtJQubZIgMplmHfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    quantity: 550,
  },
  {
    id: 3,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/5133/5533/84342faf113634d1989cad50b7dd5580?Expires=1667174400&Signature=HfgKTHpqZc0fUjMKIgZwFacFYM7T9lgwOHDhXf6dmqch3sUMNO5MU~~k5nyRbinNkF-axKdVaVDDYVNhzSzLbRtG84zdLSzhw1S1mUOJfUke1b2lnlBGiP7V05Hbw5sN69dWj2BDbrtLAo3nobAo5ejATVeCVG8JzEm7dH0x1CA2zsheYJMqnpt-PUT1hf-H5B2iGJ~R-yp6t53PTGAIIkH4IVdXU1o-mTWOmeAJxSL69k7C5Wpjr6S3nki20vnnLtc7vsWpfMIRRKefLygzTIkY1HBucm-SbZ3EWB9wJIfqJKqeMmJ7vIc2ZMmQrMvnMcEA6c-5VKPRm7Auzf~Qqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    quantity: 405,
  },
  {
    id: 4,
    name: "Library Stool Chair",
    img: "https://s3-alpha-sig.figma.com/img/60de/06c8/99fa0cc171fbe75fe37a99eddcba594e?Expires=1667174400&Signature=bgygTIo8xfpDsybv5Dfyw7YqeY9-U5n1iIxBpDWY2fscGPieLhhpZktvfn1HSDtU9ivLuef8mWDMDzCXgWMg~N2p~ogFLg7x1Ez8d9-yHTahO5ckN5AynQAj0Yr3gO8JOlrY~mt-ui-YDxHNw1L~k63m1j~qPdPnFx2AkN6G1sPGYHt5UxEiCa1fb0C~OKVw56y8e0j2W6P0MMf5cuS3DPz3AYjHHNMmaPEqN~RzRWFbjNdkaqr0XrHrSiZN0f3bD0HLF7ba1tqP6dogH-kU2jTaJ9OWjw3ifTUIft5Cxbz5H1VfQ6hlt5340XVt-Sb4KOQU-hc3onALq-Lgr7Yjuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    quantity: 450,
  },
];
