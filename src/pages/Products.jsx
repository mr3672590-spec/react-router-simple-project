export default function Products() {
  return (
  <>
    <div className="p-10 text-center text-center">
      <h1 className="text-4xl font-bold text-red-500 ">Products</h1>
    </div>
     <section className="max-w-6xl mx-auto py-10 px-4 ">

      <h2 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border-0 hover:border  rounded-lg shadow-lg p-4">
          <img 
            src="img/images (5).jpg1.jpg"
            alt="product"
            className="w-full h-48 object-cover rounded"
          />

          <h3 className="text-xl font-semibold mt-3">
            T-Shirt
          </h3>

          <p className="text-gray-600">
            Comfortable cotton t-shirt.
          </p>

          <button className="mt-3 bg-black  hover:bg-blue-400 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

        
        <div className="border-0 hover:border rounded-lg shadow-lg p-4">
          <img 
            src="img/download.jpg2.jpg"
            alt="product"
            className="w-full h-48 object-cover rounded"
          />

          <h3 className="text-xl font-semibold mt-3">
            Hoodie
          </h3>

          <p className="text-gray-600">
            Stylish winter hoodie.
          </p>

          <button className="mt-3 bg-black hover:bg-blue-400 text-white px-4 py-2 rounded ">
            Add to Cart
          </button>
        </div>

        
        <div className="border-0 hover:border rounded-lg shadow-lg p-4">
          <img 
            src="img/33xzadgvq.webp"
            alt="product"
            className="w-full h-48 object-cover rounded"
          />

          <h3 className="text-xl font-semibold mt-3">
            Jacket
          </h3>

          <p className="text-gray-600">
            Premium quality jacket.
          </p>

          <button className="mt-3 bg-black  hover:bg-blue-400 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>

      </div>
    </section>
     
     
  </>
    

    

  )
}