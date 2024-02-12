import HeroSection from "@/components/HeroSection/HeroSection";
import ProductContainer from "@/containers/ProductContainer";
import Image from "next/image";
import CommonLayout from "./CommonLayout";

export default function Home() {
  return (
    <CommonLayout>
      <main className=" min-h-screen ">
        {/* hero section  */}
        <HeroSection />

        {/* product section  */}
        <ProductContainer />
      </main>
    </CommonLayout>
  );
}
