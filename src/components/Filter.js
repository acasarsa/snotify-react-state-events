import React from 'react';

const Filter = props => {

    const {justFavs, genres, handleChangeFavs, handleGenre} = props
    // add an onChange to the select 
    return (
        <div className="simple-flex-row">
            <label> Genre: 
                <select value={genres} onChange={handleGenre}>
                    <option name="All">All</option>
                    <option name="Hip Hop">Hip Hop</option>
                    <option name="Pop">Pop</option>
                    <option name="R&B">R&B</option>
                    <option name="Salsa">Salsa</option>
                </select>
            </label>
            <label> Favorites? 
                <select value={justFavs} onChange={handleChangeFavs}>
                    <option name="All">All</option>
                    <option name="justFavs">Just Favs</option>
                </select>

                
            </label>
        </div>
    )
}

export default Filter;