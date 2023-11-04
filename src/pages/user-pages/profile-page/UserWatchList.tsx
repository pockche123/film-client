import React, { useEffect, useState } from 'react'
import { IUser } from '../../../interfaces/IUser'
import './UserWatchList.css'

import { getWatchListByUsername } from '../../../components/services/API/WatchList'
import { IWatchList } from '../../../interfaces/IWatchList'

const UserWatchList = ({ data }: { data: IUser | undefined }) => {
  const username = data?.username as string
  const [watchList, setWatchList] = useState<IWatchList[]>([])

  const getUserWatchedList = () => {
    getWatchListByUsername(username)
      .then(res => {
        setWatchList(res.data)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getUserWatchedList()
  }, [])

  return (
    <section className='user-watchlist-section'>
      <h6>WATCHLIST</h6>
      <hr />
      <div className={watchList?'watchlist-container': 'user-watchlist-container'}>
        {watchList?.map(watch => (
          <div className='watchList-card'>
            <img src={watch.film.poster} alt='watchList poster' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default UserWatchList
