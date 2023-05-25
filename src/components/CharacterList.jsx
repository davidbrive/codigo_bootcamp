import React, { useCallback, useEffect, useState } from 'react'
import { Card } from './Card';
import { Loading } from './Loading';
import { GetCharacters } from '../api/GetCharacters';
import LazyLoad from "react-lazyload";

export function CharacterList() {
    const [ characters, setCharacters ] = useState([]);
    const [ loaded, setLoaded ] = useState(false)

    const fetchCharacters = useCallback(async () => {
        const response = await GetCharacters()
        setCharacters(response)
        setLoaded(true)
    }, [])

    useEffect(() => {
        fetchCharacters();
    }, [])


    return (
        <div className='character-list'>
            <h2>Characters List</h2>
            <hr />
            <section className='cards-container'>
                {
                    (characters && characters.length > 0 && loaded)
                        ?
                        characters.map(character => (
                            <LazyLoad key={character.id}>
                                <Card character={character} />
                            </LazyLoad>
                        ))
                        :
                        <Loading />
                }
            </section>
        </div>
    )
}
