import React, { useCallback, useEffect, useState } from 'react'
import { Card } from './Card';
import { Loading } from './Loading';
import { GetCharacters } from '../api/GetCharacters';
import LazyLoad from "react-lazyload";

export function CharacterList() {
    const [ characters, setCharacters ] = useState([]);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ totalPages, setTotalPages ] = useState();
    const [ loaded, setLoaded ] = useState(false)

    const fetchCharacters = useCallback(async () => {
        const { results, info } = await GetCharacters(pageNumber)
        setCharacters(results)
        setTotalPages(info.pages)
        setLoaded(true)
    }, [ pageNumber ])

    useEffect(() => {
        pageNumber && fetchCharacters()
    }, [ pageNumber ])

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
                        (
                            <>
                                {
                                    characters.map(character => (
                                        <LazyLoad key={character.id}>
                                            <Card character={character} />
                                        </LazyLoad>
                                    ))
                                }
                            </>
                        )
                        :
                        <Loading />
                }
            </section>
            {
                (characters && characters.length > 0 && loaded) &&
                <div className='characterinfo-pages'>
                    <button
                        className='characterinfo-change_page'
                        onClick={() => setPageNumber(pageNumber - 1)}
                        disabled={pageNumber <= 1}
                    >
                        {`<`}
                    </button>
                    <div
                        className='characterinfo-number'
                    >
                        <p>{pageNumber} of {totalPages}</p>
                    </div>
                    <button
                        className='characterinfo-change_page'
                        onClick={() => setPageNumber(pageNumber + 1)}
                        disabled={pageNumber >= totalPages}
                    >
                        {`>`}
                    </button>
                </div>
            }
        </div>
    )
}
