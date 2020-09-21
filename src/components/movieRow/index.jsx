import React, { useState } from 'react'
import './styles.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default ({ title, items }) => {

    const [scrollx, setScrollx] = useState(-800)

    const handleLeftArrow = () => {
        let newValue = scrollx + Math.round(window.innerWidth / 2)
        if (newValue > 0)
            newValue = 0
        setScrollx(newValue)
    }

    const handleRightArrow = () => {
        let newValue = scrollx - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150
        let calcValue = window.innerWidth - listW

        if ((calcValue) > newValue)
            newValue = (calcValue) - 60

        setScrollx(newValue)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{ marginLeft: scrollx, width: items.results.length * 150 }}>
                    {
                        items.results.length > 0 &&
                        items.results.map((item, index) =>
                            <div className="movieRow--item" key={index}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>)
}