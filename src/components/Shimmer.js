const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center sm:place-items-stretch">
            {Array(10)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="w-full bg-white rounded-2xl overflow-hidden shadow-sm h-[320px] animate-pulse"
                    >
                        {/* Image Placeholder */}
                        <div className="h-48 w-full bg-gray-200"></div>

                        <div className="p-5 space-y-3">
                            {/* Title Placeholder */}
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>

                            {/* Rating & Time Placeholder */}
                            <div className="flex gap-2">
                                <div className="h-4 bg-gray-200 rounded w-12"></div>
                                <div className="h-4 bg-gray-200 rounded w-12"></div>
                            </div>

                            {/* Cuisines Placeholder */}
                            <div className="h-4 bg-gray-200 rounded w-full"></div>

                            {/* Location Placeholder */}
                            <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
