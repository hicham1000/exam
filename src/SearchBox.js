import React from 'react';
import {useState, useEffect} from 'react';

import './App.css';

export default function Search(props) {
	const[datas,setDatas]=useState([]);
	const[searchWord,setSearchWord]=useState("");
	const handleSearchWord = (e) => {
    props.onChange(e.target.value)
	setSearchWord(e.target.value);
	};

	return (
		<>
	<div className="searchBar col-sm-4">
		<input
			type="text"
			name="searchBar"
			id="searchBar"
			placeholder="Rechercher"
			onChange={handleSearchWord}
			// onKeyPress={search}
		/>
	</div>
	<div className="search__results">
		{datas.map((post) =>{
		return (
		<div className="search__result"key={post.id}>
			{post.title}
			</div>
	);
	})}
	</div>
	</>
	);
}







// const SearchBox = (props) => {
// 	return (
// 		<div className=' col-sm-8'>
// 			<input
// 				className='form-control'
// 				value={props.value}
// 				onChange={(event) => props.setSearchValue(event.target.value)}
// 				placeholder='Type to search...'
// 			></input>
// 		</div>
// 	);
// };

// export default SearchBox;
