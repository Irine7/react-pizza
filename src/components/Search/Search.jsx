import React from 'react';

import styles from './search.module.scss';

function Search({ searchValue, setSearchValue }) {
	return (
		<div className={styles.root}>
			<img
				className={styles.icon}
				src="assets/img/search-icon.svg"
				alt="Search"
			/>
			<input
				className={styles.input}
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder="Поиск пиццы..."
			/>
			{searchValue && (
				<img onClick={() => setSearchValue('')} className={styles.closeIcon} src="assets/img/close.svg" alt="Close" />
			)}
		</div>
	);
}

export default Search;
