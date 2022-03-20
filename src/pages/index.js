import React from 'react';
import CocktailList from '../components/lists/CocktailList';
import SearchInput from '../components/search/SearchInput';

const Home = () => {
	return (
		<div>
			<SearchInput />
			<CocktailList />
		</div>
	);
};

export default Home;
