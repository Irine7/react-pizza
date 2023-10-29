import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

import { selectFilter } from '../redux/filter/selectors';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import Categories from '../components/Categories';
import { Sort, popup } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSearch = React.useRef(false);
	const isMounted = React.useRef(false);

	const { categoryId, sort, currentPage } = useSelector(selectFilter);

	const [pizzas, setPizzas] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const { searchValue } = React.useContext(SearchContext);

	const onChangeCategory = React.useCallback((index) => {
		dispatch(setCategoryId(index));
	}, []);

	const onChangePage = (page) => {
		dispatch(setCurrentPage(page));
	};

	const getPizzas = () => {
		setLoading(true);
		const sortBy = sort.sortProperty.replace('-', '');
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';
		const apiUrl = `https://64f9d6b84098a7f2fc150eaf.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`;

		axios.get(apiUrl).then((res) => {
			setPizzas(res.data); // Response from axios is stored in data;
			setLoading(false);
		});
	};

	// Saving filters (object) as a string in URL if component has been rendered for the first time:
	React.useEffect(() => {
		if (isMounted.current) {
			// Check if component has been rendered (mounted) for the first time
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort.sortProperty, currentPage]);

	// Checking if there was first render (before rendering pizzas) and save it to Redux:
	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1)); // substring(1) is used to remove '?' from the URL
			const sort = popup.find((obj) => obj.sortProperty === params.sortProperty);
			dispatch(
				setFilters({
					...params,
					sort,
				})
			);
			isSearch.current = true;
		}
	}, []);

	// useEffect calls API just once.
	// If component has been rendered for the first time, useEffect calls API again for pizzas:
	React.useEffect(() => {
		// If back button is pressed we will be redirected to the upper part of home page:
		window.scrollTo(0, 0);
		if (!isSearch.current) {
			getPizzas();
		}
		isSearch.current = false;
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

	const skeletons = [...new Array(12)].map((_, index) => (
		<Skeleton key={index} />
	));

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort value={sort} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{loading ? skeletons : items}</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	);
};

export default Home;
