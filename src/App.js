import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import './App.css'
import { MovieRow, FeaturedMovie, Header } from './components'


export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {

    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(x => x.slug === 'originals')

      const randomChoosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let choosen = originals[0].items.results[randomChoosen]

      let choosenInfo = await Tmdb.getDataInfo(choosen.id, 'tv')

      setFeaturedData(choosenInfo)
    }

    loadAll();

  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20)
        setBlackHeader(true)
      else
        setBlackHeader(false)
    }

    window.addEventListener("scroll", scrollListener)

    return () => { window.removeEventListener("scroll", scrollListener) }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {
        featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <div className="lists">
        {
          movieList.map((item, index) => (
            <MovieRow key={index} title={item.title} items={item.items} />

          ))
        }
      </div>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> por Denílson<br />
        Direitos de Imagem para Netflix<br />
        Dados pegos do Site Themoviedb.org
      </footer>

      {
        movieList.length <= 0 &&
        <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" />
        </div>
      }

    </div >
  )
}