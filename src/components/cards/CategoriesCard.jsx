/* eslint-disable react/prop-types */
const CategoriesCard = ({ category }) => {
  return (
    <div className="border px-5 py-3 rounded-sm hover:bg-slate-300">
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
};

export default CategoriesCard;
