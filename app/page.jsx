import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import NewestProduct from "@/components/NewestProduct";
import Promote from "@/components/Promote";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewestProduct />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
