import React from 'react';

function Categories() {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	// We will choose a category by index (0 by default which is 'Все'):
	const [activeCategory, setActiveCategory] = React.useState(0);
	const onCategoryClick = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((category, index) => (
					<li
						key={index}
						className={activeCategory === index ? 'active' : ''}
						onClick={() => onCategoryClick(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
