import { MdOutlineCopyright } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import ArticleCard from "./ArticleCard";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <main className="container">
        <section className="footer-descriptions">
          <img src="/images/logo_light.png" alt="" />
          <p className="footer-descriptions_title">
            شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
          </p>

          <div className="footer-descriptions_body">
            <FaRegHeart style={{ fontSize: "2rem" }} />
            <p>
              تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
              خیابان ماگنولیا بلوک آ117
            </p>
          </div>
          <div className="footer-descriptions_body">
            <FaRegHeart />
            <p>پیگیری سفارشات : 02188305827</p>
          </div>
          <div className="footer-descriptions_body">
            <FaRegHeart />
            <p>support [at] set-coffee.com</p>
          </div>
        </section>

        {/* <section>
          <h4>جدیدترین نوشته ها</h4>
          <ArticleCard
            href={"/article/123"}
            data="۱۷ آبان ۱۴۰۲ "
            comments="بدون دیدگاه"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="افزایش انرژی با پودر قهوه فوری"
            className="footer_article"
          />

          <hr />

          <ArticleCard
            href={"/article/123"}
            data="۱۷ آبان ۱۴۰۲ "
            comments="بدون دیدگاه"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="افزایش انرژی با پودر قهوه فوری"
            className="footer_article"
          />
        </section> */}

        <ul className="footer-links">
          <div>
            <h4>منوی فوتر</h4>
            <li>
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/about-us"}>درباره ما </Link>
            </li>
            <li>
              <Link href={"/rules"}>قوانین</Link>
            </li>
          </div>
          <div>
            <h4>دسترسی سریع</h4>
            <li>
              <Link href={"/category"}> فروشگاه </Link>
            </li>
            <li>
              <Link href={"/articles"}> مقالات </Link>
            </li>
            <li>
              <Link href={"/cart"}>سبد خرید</Link>
            </li>
            <li>
              <Link href={"/wishlist"}>علاقه مندی ها</Link>
            </li>
          </div>
        </ul>
        <div className="footer-licenses">
          <img src="/images/license4.htm" width={76} height={76} alt="" />
          <img src="/images/license1.png" width={85} height={85} alt="" />
          <img src="/images/license3.png" alt="" />
          <img src="/images/license2.svg" width={62} height={95} alt="" />
        </div>
      </main>
      <hr />
      <div className="container">
        <p className="footer-copyRight">
          2023
          <MdOutlineCopyright /> تمام حقوق متعلق است به <strong>قهوه ست</strong>
          | طراحی و اجرا <strong>نیلامارکتینگ</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
