import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAUser } from "../../../components/services/API/Users";
import { IUser } from "../../../interfaces/IUser";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "./UserProfile.css";
import ProfileImage from "../../../components/user/ProfileImage";
import ProfileNav from "../../../components/user/ProfileNav";
import { Button } from "react-bootstrap";
import { Paths } from "../../../components/services/Utils/Paths";
import UserProfileSection from "./UserProfileSection";
import UserFilmSection from "./UserFilmSection";
import UserReviewsSection from "./UserReviewsSection";
import UserWatchList from "./UserWatchList";
import UserLikes from "./UserLikes";
import UserNetwork from "./UserNetwork";

const UserProfile = () => {
  const params = useParams();
  const username = params.username as string;
  const [data, setData] = useState<IUser>();
  const [activeSection, setActiveSection] = useState('profile');
  const loggedIn = true; 
  const navigate = useNavigate();

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  const getTheUser = () => {
    getAUser(username)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getTheUser();
  });

  const handleEditProfile = () => {
    navigate(Paths.settings, {state:{data}})
  }

  return (
    <>
      <Header />
      <div className="whole-page">
      <section className="user-profile">
        <div className="user-header">
          <article className="user-header-article">
            <ProfileImage user={data} />
            <div className="user-profile-label">
            <h5 id="user-profile-username">{data?.username}</h5>
          {  loggedIn && (
              <div onClick={handleEditProfile}>
                <Button variant="secondary">Edit Profile</Button>
              </div>
              )}
              </div>
          </article>

          <article className="user-header-article">
            <h3>3</h3>
            <span>Films</span>
          </article>
          <article className="user-header-article">
            <h3>3</h3>
            <span>Followers</span>
          </article>
          <article className="user-header-article">
            <h3>4</h3>
            <span>Follow</span>
          </article>
        </div>
        <div className="user-contents">
          <div className="user-nav">
            <ProfileNav
              activeSection={activeSection}
              onSectionChange = {handleSectionChange}
            />

          </div>

        </div>
        <div>
          {
            activeSection === "profile" && (
              <section>
                <UserProfileSection data={data} />
                
              </section>
            )
          }
          </div>
          <div>
            {
              activeSection === 'film' && (
                <section>
                  <UserFilmSection data={data}/>
                </section>
              )
            }
          </div>
          <div>
            {
              activeSection === 'reviews' && (
                <section>
                   <UserReviewsSection data={data}/>
                </section>
              )
            }
          </div>
          <div>
            {
              activeSection === 'watchlist' && (
                <section>
                     <UserWatchList data={data}/>
                </section>
              )

            }
          </div>
          <div>{activeSection === 'likes' &&
            <section>
                 <UserLikes data={data}/>
            </section>}
          </div>
          <div>{activeSection === 'network' &&
            <section>
              <UserNetwork data={data}/>
            </section>}
          </div>


       


        </section>
        </div>
      <Footer />
    </>
  );
};

export default UserProfile;
