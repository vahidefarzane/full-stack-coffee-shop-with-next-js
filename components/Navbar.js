import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <main>
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        </div>

        <ul className="links">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/category">فروشگاه</Link>
          </li>
          <li>
            <Link href="/blog">وبلاگ</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/rules">قوانین</Link>
          </li>
          {/* <li>
            <Link href="/login-register">ورود / عضویت</Link>
          </li> */}

          {/* Start My-account section */}
          <div className="dropdown">
            <Link href="/p-user">
              <IoIosArrowDown className="dropdown_icons" />
              حساب کاربری
            </Link>
            <div className="dropdown_content">
              <Link href="/p-user/orders">سفارشات</Link>
              <Link href="/p-user/tickets">تیکت های پشتیبانی</Link>
              <Link href="/p-user/comments">کامنت‌ها</Link>
              <Link href="/p-user/wishlist">علاقه‌مندی‌ها</Link>
              <Link href="/p-user/account-details">جزئیات اکانت</Link>
            </div>
          </div>

          {/* Finish My-account section */}
        </ul>

        <div className="navbar_icons">
          <Link href="/cart">
            <FaShoppingCart />
            <span>1</span>
          </Link>
          <Link href="/wishlist">
            <FaRegHeart />
            <span>1</span>
          </Link>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
