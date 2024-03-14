import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Productcard = () => {
  return (
    <div className="product-card_wrapper">
      <div className="product-card_header">
        <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
          alt=""
        />
        <div className="product-card_header-icon">
          <Link href="/">
            <CiSearch />
            <p className="product-card_header-tooltip">مشاهده سریع</p>
          </Link>
          <div>
            <CiHeart />
            <p className="product-card_header-tooltip">
              افزودن به علاقه مندی ها{" "}
            </p>
          </div>
        </div>
        <button>افزودن به سبد خرید</button>
      </div>

      <div className="product-card_body">
        <Link href={"/"}>
          کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( RED ) 10 عددی LIMITED
          EDITION
        </Link>
        <div className="product-card_body-star" >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>825,000 تومان</span>
      </div>
    </div>
  );
};

export default Productcard;
