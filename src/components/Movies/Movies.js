import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
//import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Movies = ({ loggedIn, setLoggedIn }) => {
    return (
        <>
            <main className='movies'>
                <Header loggedIn={loggedIn} />
                <SearchForm

                />
                <MoviesCardList />
                <Footer />
            </main>

        </>
    )
}

export default Movies;
