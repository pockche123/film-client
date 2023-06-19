import React, { useState, useEffect } from 'react'
import { Film } from '../interfaces/IFilm'
import { getDiscussionByFilmTitle } from '../services/API/Discussion'
import { Discussion } from '../interfaces/IDiscussion'
import DiscussionCard from './DiscussionCard'

const DiscussionBlock = ({ film }: { film: Film }) => {
  const filmTitle = film.title;
  const [data, setData] = useState<Discussion[]>([]);
  const [totalDiscussion, setTotalDiscussion] = useState(0);

  useEffect(() => {
    getDiscussionByFilmTitle(filmTitle).then((res) => {
      console.log('discussions: ', res.data);
      setTotalDiscussion(res.data.length);
      const lastThreeDiscussions = res.data.slice(-3);
      setData(lastThreeDiscussions);
      console.log(
        'ids: ',
        lastThreeDiscussions.map((d: any) => d.id)
      );
    });
  }, [filmTitle]);

  return (
    <div className="discuss-block">
      {totalDiscussion === 0 ? (
        <div className="no-discussions">
          We don't have any discussions for {filmTitle}.
        </div>
      ) : (
        data.map((discussion) => (
          <div key={discussion.id}>
            <DiscussionCard data={discussion} />
          </div>
        ))
      )}
    </div>
  );
};

export default DiscussionBlock
