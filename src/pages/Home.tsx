import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Product
        <Link className="find-more" to={"/search"}>
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="dffdf"
          photo="https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Pro-M3-16inch---Silver-3587.jpg"
          name="Macbook"
          price={3434}
          stock={22}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
