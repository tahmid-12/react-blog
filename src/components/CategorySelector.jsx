import React from 'react'

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center my-4">
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-100'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === null
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-100'
            }`}
            onClick={() => onSelectCategory(null)}
          >
            All
          </button>
        </li>
      </ul>
    </div>
  )
}

export default CategorySelector