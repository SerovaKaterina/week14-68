let directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссер, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссер, Сценарист, Актер, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссер, Сценарист, Актер',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зеленая книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

  const directorCard = document.querySelector(".directors__card");
  const films = document.querySelector(".films");

  directors.forEach((item)=> {
    const card = document.createElement ("div");
    card.className = 'director_card';
    directorCard.prepend(card);

    const directorName = document.createElement ("div");
    directorName.className = "director_card__name";
    card.append (directorName);
    directorName.innerHTML = item.name;

    const directorJob = document.createElement ("div");
    directorJob.className = "director_card__job";
    card.append (directorJob);
    directorJob.innerHTML = item.career;

    const directorFilmography = document.createElement ("a");
    directorFilmography.className = "director_card__films";
    directorFilmography.href = item.films;
    card.append (directorFilmography);
    directorFilmography.innerHTML = "Фильмография";

const topFilmList = [];

directors.forEach((item) => {
    topFilmList.push(item.top_rated_film);
})

films.innerText = topFilmList.join(" , ");
});