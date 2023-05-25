import { useNavigate } from "react-router-dom"

export function Card({ character }) {
    const navigate = useNavigate()
    return (
        <>
            {character && (
                <div className='card'>
                    <h4 className='card-title'>{character.name}</h4>
                    <img loading="lazy" src={character.image} alt={`${character.name}`} />
                    <div className='card-description'>
                        <p><strong>Location: </strong> {character.origin.name}</p>
                        <p><strong>Status: </strong> {character.status}</p>
                        <p><strong>Species: </strong> {character.species}</p>
                    </div>
                    <button
                        className='card-button'
                        onClick={() => navigate(`/character/${character.id}`)}
                    >
                        More
                    </button>
                </div>

            )}
        </>
    )
}
