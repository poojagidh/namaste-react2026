import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { groceryProducts } from "./mocks/groceryMock";

const Grocery = () => {
    const dispatch = useDispatch();
    const categories = [...new Set(groceryProducts.map((item) => item.category))];

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Grocery Store</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Order pantry staples, fresh produce, and everyday household items from one place.
                </p>
            </section>

            {categories.map((category) => (
                <section key={category} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {groceryProducts
                            .filter((product) => product.category === category)
                            .map((product) => (
                                <article
                                    key={product.id}
                                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-800">{product.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="font-semibold text-gray-800">₹{product.price}</span>
                                            <button
                                                className="px-4 py-2 bg-white text-green-600 font-extrabold rounded-lg shadow border border-gray-100 hover:bg-gray-50 transition-all uppercase text-xs"
                                                onClick={() => handleAddItem(product)}
                                            >
                                                ADD
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                    </div>
                </section>
            ))}
        </main>
    );
};

export default Grocery;
