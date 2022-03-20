import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleCocktail } from '../redux/features/cocktailSlice';

const SingleCocktail = () => {
	const { cocktail, loading } = useSelector((state) => ({ ...state.app }));
	const [modifiedCocktail, setModifiedCocktail] = useState([]);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleCocktail({ id }));
	}, [id, dispatch]);

	useEffect(() => {
		if (cocktail.length > 0) {
			const {
				strDrink: name,
				strDrinkThumb: image,
				strAlcoholic: info,
				strCategory: category,
				strGlass: glass,
				strInstructions: instructions,
				strIngredient1: ingredient1,
				strIngredient2: ingredient2,
				strIngredient3: ingredient3,
				strIngredient4: ingredient4,
				strIngredient5: ingredient5,
			} = cocktail[0];

			const ingredients = [
				ingredient1,
				ingredient2,
				ingredient3,
				ingredient4,
				ingredient5,
			];
			const newCocktail = {
				name,
				image,
				info,
				category,
				glass,
				instructions,
				ingredients,
			};

			setModifiedCocktail(newCocktail);
		} else {
			setModifiedCocktail(null);
		}
	}, [id, cocktail]);

	if (!modifiedCocktail) {
		return <h2 className='section-title'>No Cocktail to Display</h2>;
	} else {
		const { name, image, category, info, glass, instructions, ingredients } =
			modifiedCocktail;

		return (
			<>
				{loading ? (
					<div className='spinner-grow' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : (
					<section className='section cocktail-section'>
						<Link to='/'>
							<button className='btn btn-danger' style={{ marginTop: '2rem' }}>
								Go Back
							</button>
						</Link>
						<h2 className='section-title'>{name}</h2>
						<div className='drink'>
							<img src={image} alt={name} />
							<div className='drink-info'>
								<p>
									<span className='drink-data'>Name:</span> : {name}
								</p>
								<p>
									<span className='drink-data'>Category:</span> : {category}
								</p>
								<p>
									<span className='drink-data'>Info:</span> : {info}
								</p>
								<p>
									<span className='drink-data'>Glass:</span> : {glass}
								</p>
								<p>
									<span className='drink-data'>Instruction:</span> :{' '}
									{instructions}
								</p>
								<p>
									<span className='drink-data'>ingredients: </span>
									{ingredients &&
										ingredients.map((item, index) => {
											return item ? <span key={index}>{item}</span> : null;
										})}
								</p>
							</div>
						</div>
					</section>
				)}
			</>
		);
	}
};

export default SingleCocktail;
