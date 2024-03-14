import Link from "next/link";

const Promote = () => {
  return (
    <div className="promote-wrapper">
      <div data-aos="fade-up-right" className="container">
        <main className="promote_section">
          <section>
            <span>خرید قهوه ، به سبک حرفه ای ها</span>
            <p>زیبایی امروز رو با قهوه “ست” کنید</p>
            <img data-aos="fade-left" src="/images/coffee-image-1.jpg" alt="" />
          </section>
          <section className="promote_section-club">
            <div>
              <span>باشگاه مشتریان ست</span>
              <p>برای مشتریان وفادار قهوه ست</p>
            </div>
          </section>
        </main>
        <main className="promote_section">
          <img width={660} height={530} src="/images/Home32.jpg" alt="" />
          <section data-aos="fade-up" className="promote_section-why-coffee">
            <img
              className="promote_section-logo"
              src="/images/coffee-svg-2.svg"
              alt=""
            />
            <p className="promote_section-title">چرا قهوه ست</p>
            <p>
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است
              .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div>
              <Link href="/about-us">
                <button className="promote_section-more">بیشتر بخوانید</button>
              </Link>
              <Link href="/category">
                <button>فروشگاه</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Promote;
