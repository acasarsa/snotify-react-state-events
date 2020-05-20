import React, { Component } from 'react'
import Filter from './Filter';
import SongItem from './SongItem'


export default class SongList extends Component {

    state = {
        justFavs: "All",
        genres: "All"
    }

    handleChangeFavs = (event) => {
        this.setState({
            justFavs: event.target.value
        })
    }

    handleGenre = (e) => {
        this.setState({ genres: e.target.value })
    }


    render() {
        const {justFavs, genres} = this.state

        let displaySongs = [...this.props.songs]

        if(this.state.genres !== "All"){
            displaySongs = displaySongs.filter(song => song.genre === this.state.genres)
        }


        if(this.state.justFavs !== "All") {
            displaySongs = displaySongs.filter(song => song.favorite ? song : null )
        }

        return (
            <div className="half songlist">
                <h2>Song List</h2>
                <Filter justFavs={justFavs} genres={genres} handleChangeFavs={this.handleChangeFavs} handleGenre={this.handleGenre}/>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Artists</td>
                            <td>Play?</td>
                            <td>Queue?</td>
                            <td>Favorite</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {displaySongs.map( song => <SongItem 
                            key={song.id} {...song} 
                            handleFavorite={this.props.handleFavorite} 
                            playSong={this.props.playSong} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
