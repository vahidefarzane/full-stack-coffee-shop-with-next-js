import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const NewestProduct = () => {
  return (
    <div className="container">
      <section className="newest-porduct_title">
        <div>
          <p>جدیدترین محصولات</p>
          <span>Newest Products</span>
        </div>
        <Link className="newest-porduct_link" href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="fade-up" className="newest-porduct_products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </div>
  );
};

export default NewestProduct;
