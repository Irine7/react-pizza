import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

import './scss/app.scss';

function App() {
	const [pizzas, setPizzas] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const apiUrl = 'https://64f9d6b84098a7f2fc150eaf.mockapi.io/pizzas';

	// useEffect calls API just once. [] means the component will be mounted only once
	React.useEffect(() => {
		fetch(apiUrl)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPizzas(data);
				setLoading(false);
			});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{loading
							? [... new Array(12)].map((_, index) => <Skeleton key={index} />)
							: pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
