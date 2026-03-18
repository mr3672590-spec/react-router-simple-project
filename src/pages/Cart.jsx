import { FaTrash } from "react-icons/fa";

export default function Cart() {
  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
        Your Cart
      </h1>

      
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow mb-4">

      
        <div className="flex items-center gap-4">
          <img
            src="img/download.jpg2.jpg"
            alt="product"
            className="w-20 h-20 rounded"
          />
          <div>
            <h2 className="font-bold text-lg">T-Shirt</h2>
            <p className="text-gray-600">$25</p>
          </div>
        </div>

      
        <div>
          <input
            type="number"
            defaultValue="1"
            className="w-16 border rounded p-1 text-center"
          />
        </div>

        
        <button className="text-red-500 hover:text-red-700">
          <FaTrash size={20} />
        </button>

      </div>

      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Total: $25
        </h2>

        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          Order Now
        </button>
      </div>

    </div>
  );
}