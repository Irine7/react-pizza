import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './search.module.scss';

function Search() {
	const [ value, setValue ] = React.useState('');
	const { setSearchValue } = React.useContext(SearchContext);
	const inputRef = React.useRef();

	const onClear = () => {
		setSearchValue('');
		setValue('');
		inputRef.current.focus();
	};

	const updateSearchValue = React.useCallback(
		debounce((str) => {
			setSearchValue(str);
		}, 500),
		[]
	);

	const onChangeInput = (event) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	}

	return (
		<div className={styles.root}>
			<img
				className={styles.icon}
				src="assets/img/search-icon.svg"
				alt="Search"
			/>
			<input
				ref={inputRef}
				className={styles.input}
				value={value}
				onChange={onChangeInput}
				placeholder="Поиск пиццы..."
			/>
			{value && (
				<img
					onClick={onClear}
					className={styles.closeIcon}
					src="assets/img/close.svg"
					alt="Close"
				/>
			)}
		</div>
	);
}

export default Search;
