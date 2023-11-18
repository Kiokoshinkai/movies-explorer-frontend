import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


const SavedMovies = ({ movies, checked, onCheckbox, isSavedMovies, onSubmit, isNotFound, savedMovies, onDeleteMovie, hasParams}) => {


    return (
        <main className='saved-movies'>
            <SearchForm
                onSubmit={onSubmit}
                onCheckbox={onCheckbox}
                checked={checked}
            />
            <MoviesCardList
                movies={movies}
                isMoviesPage={false}
                onDeleteMovie={onDeleteMovie}
                isSavedMovies={isSavedMovies}
                isNotFound={isNotFound}
                savedMovies={savedMovies}
                hasParams={hasParams}
            />
        </main>
    )
}

export default SavedMovies;
