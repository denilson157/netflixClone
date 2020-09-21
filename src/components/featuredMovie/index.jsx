import React from 'react'
import './index.css'

export default ({ item }) => {
    let firstDate = new Date(item.first_air_date)
    let genres = item.genres.map(x => x.name)

    let description = item.overview
    if (description.length > 300)
        description = description.substring(0, 300) + "..."


    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--info-points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--info-year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--info-seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className="featured--description">
                        <span>{description}</span>
                    </div>
                    <div className="featured--buttons">
                        <a className="featured--buttons-watchButton" href={`/watch/${item.id}`}>► Assitir</a>
                        <a className="featured--buttons-addListButton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>
                        <span>{genres.join(', ')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}