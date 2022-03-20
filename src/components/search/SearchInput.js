import './SearchInput.css';

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../../redux/features/cocktailSlice';

const SearchInput = () => {
	const searchValue = useRef();
	const dispatch = useDispatch();

	const handleChange = () => {
		const searchText = searchValue.current.value;
		dispatch(fetchSearchCocktail({ searchText }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className='section search'>
			<form onSubmit={handleSubmit} className='search-form'>
				<div className='form-control'>
					<label htmlFor='name'>Search Cocktail</label>
					<input
						type='text'
						name='name'
						id='name'
						ref={searchValue}
						onChange={handleChange}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchInput;
