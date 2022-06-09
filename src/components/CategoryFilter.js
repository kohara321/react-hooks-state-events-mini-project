import React from "react";

function CategoryFilter({ filter, categories, handleFilter }) {
  const categoriesArray = categories.map(category => <button key={category} className='' onClick={() => handleFilter(category)}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesArray}
    </div>
  );
}

export default CategoryFilter;
