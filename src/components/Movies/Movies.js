import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


const Movies = ({ loggedIn, movies, searchKeyword, isLoading, checked, onCheckbox, isNotFound, isServerError, onSubmit, onSaveMovie,
    isSavedMovies, savedMovies, onDeleteMovie, hasParams}) => {

    return (
        <>
            <main className='movies'>
                <SearchForm
                    loggedIn={loggedIn}
                    onSubmit={onSubmit}
                    onCheckbox={onCheckbox}
                    checked={checked}
                    defaultValue={searchKeyword}
                />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        loggedIn={loggedIn}
                        isMoviesPage={true}
                        movies={movies}
                        savedMovies={savedMovies}
                        onSaveMovie={onSaveMovie}
                        isSavedMovies={isSavedMovies}
                        isNotFound={isNotFound}
                        isServerError={isServerError}
                        onDeleteMovie={onDeleteMovie}
                        hasParams={hasParams}
                    />
                )}
            </main>

        </>
    )
}

export default Movies;
