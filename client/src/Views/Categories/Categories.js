import React from 'react'
import './categories.css'

import Section from '../../Components/Section/Section'
import CategoryTile from '../../Components/CategoryTile/CategoryTile'

const tileArray = [
    {
        id: 1,
        text: 'City Break',
        icon: 'city'
    },
    {
        id: 2,
        text: 'Island',
        icon: 'sun'
    },
    {
        id: 3,
        text: 'Rural',
        icon: 'house'
    },
    {
        id: 4,
        text: 'Jungle',
        icon: 'leaf'
    },
    {
        id: 5,
        text: 'Relaxation',
        icon: 'bed'
    },
    {
        id: 6,
        text: 'Luxury',
        icon: 'dollar'
    },
    {
        id: 7,
        text: 'Sport',
        icon: 'ball'
    },
    {
        id: 8,
        text: 'Winter',
        icon: 'snow'
    },
]

export default function Categories() {
    return (
        <div className='categories'>
            <div className="categories-container">
                <Section icon={1} heading='Categories' clickText='See all categories' />
                <div className='categories-list'>
                    {tileArray.map((tile) => (
                        <CategoryTile icon={tile.icon} title={tile.text} key={tile.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
