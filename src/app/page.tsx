import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <Image
          src="/product-image.jpg"
          alt="Product"
          width={400}
          height={400}
          className="mb-4 rounded-lg"
        />
        <button className="bg-blue-600 hover:bg-blue-700 mb-4 py-1 rounded-lg w-2/6 text-white">
          View in AR
        </button>
        <h1 className="mb-4 font-bold text-2xl">COGS</h1>
        <p className="mb-4 text-gray-600">Product description goes here. This is a beautiful product with amazing features.</p>
        <div className="flex gap-2 mb-4">
          <span className="font-bold text-gray-600">Color inter ring:</span>
          <button className="bg-red-500 rounded-full w-8 h-8"></button>
          <button className="bg-blue-500 rounded-full w-8 h-8"></button>
          <button className="bg-green-500 rounded-full w-8 h-8"></button>
          <button className="bg-yellow-500 rounded-full w-8 h-8"></button>
        </div>
        <div className="flex gap-2 mb-4">
          <span className="font-bold text-gray-600">Color outer ring:</span>
          <button className="bg-red-500 rounded-full w-8 h-8"></button>
          <button className="bg-blue-500 rounded-full w-8 h-8"></button>
          <button className="bg-green-500 rounded-full w-8 h-8"></button>
          <button className="bg-yellow-500 rounded-full w-8 h-8"></button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg w-full text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
