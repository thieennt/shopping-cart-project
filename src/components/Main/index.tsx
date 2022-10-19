import TopCategories from "../Category";
import CompanyLogo from "../CompanyLogo";
import FeaturedProduct from "../FeatureProduct";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import Products from "../Products";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <CompanyLogo />
      <FeaturedProduct />
      <TopCategories />
      <Products />

      <Footer />
    </div>
  );
};

export default Main;
