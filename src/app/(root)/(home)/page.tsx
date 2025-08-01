import AllProducts from "@/app/components/Home/AllProducts";
import Category from "@/app/components/Home/Category";
import Hero from "@/app/components/Home/Hero";


export default async function Home() {

  return (
    <main>
      <Hero></Hero>
      <Category></Category>
      <AllProducts></AllProducts>
    </main>
  );
}
