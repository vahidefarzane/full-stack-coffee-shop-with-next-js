import { MdOutlineSms } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const ArticleCard = () => {
  return (
    <div className="article-card_wrapper">
      <Link className="article-card-img" href={"/article/123"}>
        <img
          src="https://set-coffee.com/wp-content/uploads/elementor/thumbs/-%D9%82%D9%87%D9%88%D9%87-%D8%A8%D8%A7-%D8%B4%DB%8C%D8%B1-qi8xuncj4ordgstrl43mbg5jfj1ezzamf6v9rnitn0.jpg"
          alt=""
        />
      </Link>
      <div className="article-card_date">
        <span>24</span>
        <span>بهمن</span>
      </div>
      <div className="article-card_details">
        <span className="article-card_details-tag">قهوه</span>
        <Link href={"/article/123"} className="article-card_details-title">
          مصرف قهوه با شیر برای کاهش التهاب
        </Link>
        <div>
          <p>نویسنده</p>
          <img
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            alt=""
          />
          <p>Mohebi</p>
          <div>
            <MdOutlineSms />
            <span>0</span>
          </div>
          <div className="article-card_details-share">
            <IoShareSocialOutline />
            <div className="article-card_details-tootip">
              <Link href={"/"}>
                <FaTelegram />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn />
              </Link>
              <Link href={"/"}>
                <FaPinterest />
              </Link>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
