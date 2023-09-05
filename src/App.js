import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';

function App() {
	return (
		<div class="wrapper">
			<Header />
			<div class="content">
				<div class="container">
					<div class="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 class="content__title">Все пиццы</h2>
					<div class="content__items">
						<PizzaBlock title="Трюфельная с мортаделлой" price={539} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/6390157043034f8585c64cc279edbef1_584x584.webp"} />
						<PizzaBlock title="Карбонара" price={489} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/2cac8238ae9e42cd95dd00c17146e1fd_584x584.webp"} />
						<PizzaBlock title="Пицца Жюльен" price={489} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_584x584.webp"} />
						<PizzaBlock title="Сырная 🌱👶" price={299} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_584x584.webp"} />
						<PizzaBlock title="Пепперони фреш" price={299} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_584x584.webp"} />
						<PizzaBlock title="Двойной цыпленок 👶" price={389} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_584x584.webp"} />
						<PizzaBlock title="Чоризо фреш" price={299} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_584x584.webp"} />
						<PizzaBlock title="Ветчина и сыр" price={389} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_584x584.webp"} />
						<PizzaBlock title="Микс" price={539} src={"https://dodopizza-a.akamaihd.net/static/Img/Products/85479ab2c41e42408d3609dad068d2ef_584x584.webp"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
