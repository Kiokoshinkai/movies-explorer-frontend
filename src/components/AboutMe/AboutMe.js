import './AboutMe.css'

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__info">
                    <h3 className="about-me__name">Владимир</h3>
                    <h4 className="about-me__job">Фронтенд-разработчик, 38 лет</h4>
                    <p className="about-me__text">Я родился и живу в городе Калуга, учусь в КГУ по специальности информационные технологии и системы. Есть двое детей и собака. Занимаюсь спортом, играю в компьютерные игры.
                        Хочу работать в IT. Нравится веб-разработка.</p>
                    <a className='about-me__link' href='https://github.com' target='_blank' rel='noreferrer'>Github</a>
                </div>
                <div className="about-me__photo-container">
                    <div className="about-me__photo"></div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;
