import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between max-w-6xl mx-auto py-4">

        <h1 className="text-xl font-bold">MyShop</h1>

        <div className="flex gap-6">
          <Link className="px-4 py-2 rounded hover:bg-yellow-400 hover:text-black duration-300" to="/">Home</Link>
          <Link className="px-4 py-2 rounded hover:bg-yellow-400 hover:text-black duration-300" to="/products">Products</Link>
          <Link className="px-4 py-2 rounded hover:bg-yellow-400 hover:text-black duration-300" to="/contact">Contact</Link>
          <Link className="px-4 py-2 rounded hover:bg-yellow-400 hover:text-black duration-300" to="/cart">Cart</Link>
        </div>

      </div>
    </nav>
  )
}