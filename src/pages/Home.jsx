export default function Home() {
  return (
    <>

      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to My Shop
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Best products for you
        </p>

        <button className="mt-6 px-6 py-3 bg-black hover:bg-blue-800 text-white rounded-lg ">
          Shop Now
        </button>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="img/white shose.jpg"
              className="mx-auto w-48 h-48 object-cover border-0 hover:border rounded"
            />
            <h3 className="text-xl font-semibold mt-4">
              T-Shirt
            </h3>
            <p className="text-gray-500">$20</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-blue-800">
              Add to Cart
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="img/shose.avif"
              className="mx-auto w-48 h-48 object-cover border-0 hover:border rounded"
            />
            <h3 className="text-xl font-semibold mt-4">
              Shoes
            </h3>
            <p className="text-gray-500">$40</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-blue-800">
              Add to Cart
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src="img/watch.jpg"
              className="mx-auto w-48 h-48 object-cover border-0 hover:border rounded"
            />
            <h3 className="text-xl font-semibold mt-4">
              Watch
            </h3>
            <p className="text-gray-500">$60</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-blue-800">
              Add to Cart
            </button>
          </div>

        </div>
      </div>

    </>
  )
}