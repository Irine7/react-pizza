import React from 'react';

import styles from './NotFoundPart.module.scss';

const NotFoundPart = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>🤷‍♀️</span>
				<br />
				Nothing found
			</h1>
			<p className={styles.description}>Unfortunately, nothing matched your search terms</p>
		</div>
	);
};

export default NotFoundPart;
