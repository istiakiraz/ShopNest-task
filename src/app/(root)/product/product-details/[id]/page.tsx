import Image from "next/image";
import { Metadata } from "next";
import { Product } from "../../../../../../typing";
import AddToCart from "./add-cart";


//  Params for SSG
export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

//  metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();

  return {
    title: `${product.title} | ShopNest`,
    description: product.description.slice(0, 150),
    openGraph: {
    title: product.title,
    description: product.description.slice(0, 150),
    images: [product.image],
  },
  };
}

// product Details Page
export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: "force-cache",
  });
  const product: Product = await res.json();

  return (
    <div className="max-w-6xl mx-auto pt-20 lg:pt-30 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {/* img */}
      <div className="flex col-span-1 hover:scale-110 duration-500 justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain max-h-[400px]"
        />
      </div>

      {/* product details  */}
      <div className="space-y-4 col-span-2">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="text-gray-500 border-b border-gray-300 pb-3 font-medium">
          Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
        </div>
        <h5 className="-mb-1 font-bold text-gray-400">Price:</h5>
        <h3 className="text-4xl font-bold text-indigo-600">${product.price}</h3>
        <p className="text-gray-400 text-sm ">{product.description}</p>
        <p>
          {" "}
          Category: <span className="capitalize">{product.category}</span>
        </p>

        {/* add to cart btn */}
        <AddToCart></AddToCart>
      </div>
    </div>
  );
}
