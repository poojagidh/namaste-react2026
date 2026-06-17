const Contact = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
                    Contact us
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Have a question, feedback, or partnership idea? We would love
                    to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Get in touch
                        </h2>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Address
                                    </h3>
                                    <p className="text-gray-500 mt-1">
                                        123 Food Street, Indore, Madhya Pradesh
                                        452001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Email
                                    </h3>
                                    <p className="text-gray-500 mt-1">
                                        support@namastefood.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Phone
                                    </h3>
                                    <p className="text-gray-500 mt-1">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">🕐</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Working hours
                                    </h3>
                                    <p className="text-gray-500 mt-1">
                                        Mon – Sun, 9:00 AM – 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-2">
                            Need quick help?
                        </h3>
                        <p className="text-orange-50">
                            Our support team usually responds within 24 hours.
                            For order issues, mention your order ID in the
                            message.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Send us a message
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 transition-all"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 transition-all"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 resize-none transition-all"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;
