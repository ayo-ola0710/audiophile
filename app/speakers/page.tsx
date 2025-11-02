import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import Items from "@/components/Items";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const Speakers = () => {
  return (
    <div>
      <div className="bg-[#0E0E0E]  ">
        <Navbar />
        <p className="font-bold text-[40px] text-white text-center pt-30 pb-20">
          SPEAKERS
        </p>
      </div>
      <ProductCard
        title="ZX9 SPEAKER"
        desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups."
        img="/images/speak.png"
        head="NEW PRODUCT"
        imagePosition="left"
        category="speakers"
        id="zx9"
      />
      <ProductCard
        title="ZX7 SPEAKER"
        desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        img="/images/speak2.png"
        imagePosition="right"
        category="speakers"
        id="zx7"
      />
      <Items />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Speakers;
