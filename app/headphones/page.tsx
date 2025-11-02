import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Items from "@/components/Items";
import BottomSection from "@/components/BottomSection";

const Headphones = () => {
  return (
    <div>
      <div className="bg-[#0E0E0E]  ">
        <Navbar />
        <p className="font-bold text-[40px] text-white text-center pt-30 pb-20">
          HEADPHONES
        </p>
      </div>
      <ProductCard
        title="XX99 Mark II Headphones"
        desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        img="/images/head1.png"
        head="NEW PRODUCT"
        imagePosition="left"
        category="headphones"
        id="xx99-mark-ii"
      />
      <ProductCard
        title="XX99 Mark I Headphones"
        desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        img="/images/sec1.png"
        imagePosition="right"
        category="headphones"
        id="xx99-mark-i"
      />
      <ProductCard
        title="XX59 Headphones"
        desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        img="/images/head2.png"
        imagePosition="left"
        category="headphones"
        id="xx59"
      />
      <Items />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Headphones;
