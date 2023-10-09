import { faClose, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { ChangeEvent, useState } from 'react'
import { getAllFilms } from '../services/API/Films'
import { Film } from '../../interfaces/IFilm'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './SettingsProfile.css'
import { IUser } from '../../interfaces/IUser';
import { createFavourites } from '../services/API/Favourite'

const SettingsPosters = (user: {user:IUser}) => {
  const [search, setSearch] = useState('')
  const [addPoster, setAddPoster] = useState(false)
  const [foundMatches, setFoundMatches] = useState(Array<Film>)
  const [posters, setPosters] = useState<Array<string>>([])


  //need to get username and film
  const renderFoundMatches = () => {
    if (foundMatches.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {foundMatches.map(film => (
            <div onClick={() => handlePoster(film)}>
              <li>{film.title}</li>
            </div>
          ))}
        </ul>
      )
    }
  }


  //eg use
  // const question = {
  //     question: questionText.current.value,
  //     tags: tags,
  //     answers: answers,
  //     creator: name,
  //   };

  //   createQuestion(question)
  //     .then((res) => {
  //       //console.log(res)
  //       navigate(Paths.adminQuestions);
  //     })
  //     .catch((e) => console.log(e));


  const createFavourite = () => {
    createFavourites()
  }

  const handlePoster = (film: Film) => {
    // here is the next change to be made create
    setAddPoster(false)
    setSearch('')
    setFoundMatches([])
    setPosters(prevPosters => [...prevPosters, film.poster])
  }

  const removePoster = (num: number) => {
    setPosters(
      posters.slice(0, num).concat(posters.slice(num + 1, posters.length))
    )
  }

  const findMatches = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)

    const foundMatches = await getAllFilms().then(res =>
      res.data?.filter(
        (movie: Film) =>
          !posters.includes(movie.poster) &&
          movie.title &&
          movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )

    setFoundMatches(foundMatches)
  }

  const handleDrag = (result: any) => {
    if (!result.destination) {
      return
    }

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    const updatedPosters = [...posters]

    const [movedPoster] = updatedPosters.splice(sourceIndex, 1)
    updatedPosters.splice(destinationIndex, 0, movedPoster)

    // Update the state with the new posters array
    setPosters(updatedPosters)
  }

  return (
    <div className='settings-poster'>
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId='posters-drop' direction='horizontal'>
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='horizontal-droppable-container'
            >
              {[0, 1, 2, 3].map(index => (
                <div key={index} className='settings-poster-card'>
                  {posters[index] && (
                    <Draggable
                      draggableId={`posters[${index}]`}
                      key={index}
                      index={index}
                    >
                      {provided => (
                        <div
                          className='horizontal-draggable-item'
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img src={posters[index]} alt='poster' />

                          <p
                            className='x-icon'
                            onClick={() => removePoster(index)}
                          >
                            <FontAwesomeIcon icon={faX} />
                          </p>
                        </div>
                      )}
                    </Draggable>
                  )}
                  <p
                    className='settings-poster-add'
                    onClick={() => setAddPoster(true)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </p>
                </div>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {addPoster && (
        <section className='add-poster'>
          <article className='add-poster-container'>
            <h5>PICK YOUR FAVOURITE FILM</h5>
            <p onClick={() => setAddPoster(false)}>
              <FontAwesomeIcon className='close-icon' icon={faClose} />
            </p>
            <label>Name of film</label> <br />
            <input
              type='text'
              id='add-poster-input'
              value={search}
              onChange={e => findMatches(e)}
            />
            <section className='search-result'>{renderFoundMatches()}</section>
          </article>
        </section>
      )}
    </div>
  )
}

export default SettingsPosters
