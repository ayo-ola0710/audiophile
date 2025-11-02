import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import Items from "@/components/Items";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const Earphones = () => {
  return (
    <div>
      <div className="bg-[#0E0E0E]  ">
        <Navbar />
        <p className="font-bold text-[40px] text-white text-center pt-30 pb-20">
          EARPHONES
        </p>
      </div>
      <ProductCard
        title="YX1 WIRELESS EARPHONES"
        desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        img="/images/ear1.png"
        head="NEW PRODUCT"
        imagePosition="left"
        category="earphones"
        id="yx1-wireless"
      />
      <Items />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Earphones;
