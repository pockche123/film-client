import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./CreateReview.css";
import Rate from "../../components/icons/Rate";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../components/services/Utils/Paths";

const CreateReview = () => {
  const location = useLocation();
  const poster = location.state && location.state.poster;
  const filmTitle = location.state && location.state.filmTitle;
  const year = location.state && location.state.year;
  const film = location.state && location.state.film;
  const imdbId = film.imdbId;
  const username = "testing1";
  const navigate = useNavigate();
  const [review, setReview] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");
  

  const handleTextareaResize = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaHeight("auto"); // Reset the height to auto to recalculate 
    setTextareaHeight(`${e.target.scrollHeight}px`); // Update the height based on the scrollHeight
  };

  useEffect(() => {
    console.log("year ", year);
  });

  const cancelSubmit = () => {
    navigate(Paths.imdbId + imdbId, { state: { film } });
  };

  const handleSubmit = () => {
    navigate(-1);
    setReview("");
  };

  return (
    <>
      <div className="create-review">
        <div className="create-review-poster">
          <img src={poster} alt="film-poster" />
        </div>

        <div className="create-review-forum">
          <div className="create-review-heading">
            <h3>
              <b>A review by {username}</b>
            </h3>
            <h5>
              Film: {filmTitle} ({year})
            </h5>
          </div>
        </div>
        <div className="create-review-rating">
          <Rate inCreatePage={true} />
        </div>
        <div className="create-review-form">
          {/* <input
            
  value={review}
  onChange={e => setReview(e.target.value)}
/> */}

          <textarea
            id="create-review-textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Add a review..."
            style={{ height: textareaHeight }}
            onInput={handleTextareaResize}
            // rows={4}
          />
        </div>
      </div>

      <div className="create-review-submit">
        <div className="create-review-submit-cancel" onClick={cancelSubmit}>
          <u>Cancel</u>
        </div>

        <div className="create-review-submit-submit" onClick={handleSubmit}>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </>
  );
};

export default CreateReview;
