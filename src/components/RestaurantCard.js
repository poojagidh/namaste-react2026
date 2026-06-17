import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, locality, areaName, cloudinaryImageId, imageUrl } = resData;
  return (
    <div data-testid="resCard" className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl || CDN_URL + cloudinaryImageId}
          alt={name}
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-bold text-lg">Quick View</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-800 truncate mb-1">{name}</h3>

        <div className="flex items-center gap-1 mb-2">
          <svg className="w-4 h-4 text-green-600 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <span className="text-gray-700 font-semibold text-sm">{avgRating} • 30-35 mins</span>
        </div>

        <p className="text-gray-500 text-sm truncate mb-3">
          {cuisines.join(", ")}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-400 font-medium uppercase tracking-wide border-t pt-3 border-gray-100">
          <span>{locality}</span>
          <span>{areaName}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-md text-xs z-10">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;