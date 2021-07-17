import { React, useState, useEffect } from "react";
import FavoritesList from "./FavoritesList";
import AddFavorite from "./AddFavorite";
import RemoveFavorites from "./RemoveFavorites";

const Favorites = (props) => {
    const [favorites, setFavorites] = useState([]);
    const [city, updateCity] = useState();
    const {weather}=props;

    useEffect(() => {
        const cityFavorites = JSON.parse(
            localStorage.getItem("react-weather-app-favorites")
        );

        if (cityFavorites) {
            setFavorites(cityFavorites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem(
            "react-weather-app-favorites",
            JSON.stringify(items)
        );
    };

    const addFavoriteCity = (weather) => {
        const newFavoriteList = [...favorites, weather];
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    };

    const removeFavoriteCity = (weather) => {
        const newFavoriteList = favorites.filter(
            (favorite) => favorite.city !== weather.city
        );

        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    };

    return (
        <div className="container">
            <h4>Favorites</h4>
            <div className="row">
                <FavoritesList
                    city={favorites}
                    handleFavoritesClick={removeFavoriteCity}
                    favoriteComponent={RemoveFavorites}
                />
            </div>
        </div>
    );
};

export default Favorites;
