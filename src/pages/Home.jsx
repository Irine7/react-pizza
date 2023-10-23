import React from 'react';
import ReactPaginate from 'react-paginate';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

const Home = ({ searchValue }) => {
	const [pizzas, setPizzas] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	// useEffect calls API just once. Follow changes in [categoryId] & if it is changed API will be called again.
	React.useEffect(() => {
		const sortBy = sortType.sortProperty.replace('-', '');
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';

		const apiUrl = `https://64f9d6b84098a7f2fc150eaf.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`;

		setLoading(true);

		fetch(apiUrl)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPizzas(data);
				setLoading(false);
			});
		// If back button is pressed we will be redirected to the upper part of home page:
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

	const skeletons = [...new Array(12)].map((_, index) => (
		<Skeleton key={index} />
	));

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					value={categoryId}
					onChangeCategory={(i) => setCategoryId(i)}
				/>
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{loading ? skeletons : items}</div>
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	);
};

export default Home;
