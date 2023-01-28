import React, { useState, useEffect } from 'react';
import './components.css';

function Entry() {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit'
			);
			const json = await response.json();
			setData(json);
		}
		fetchData();
	}, []);

	const handleClick = () => {
		async function fetchData() {
			const response = await fetch(
				'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit'
			);
			const json = await response.json();
			setData(json);
		}
		fetchData();
	};

	function jokeType() {
		if (data.type === 'single') {
			return (
				<>
					<h1>{data.joke}</h1>
				</>
			);
		} else {
			return (
				<>
					<h1>{data.setup}</h1>
					<h1>{data.delivery}</h1>
				</>
			);
		}
	}

	return (
		<>
			<div className='entry'>
				{data ? jokeType() : <h1>Loading...</h1>}
				<button className='mainButton' onClick={handleClick}>
					Reload Joke
				</button>
			</div>
		</>
	);
}

export default Entry;
