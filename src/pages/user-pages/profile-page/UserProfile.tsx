import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAUser } from "../../../components/services/API/Users";
import { IUser } from "../../../interfaces/IUser";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "./UserProfile.css";
import ProfileImage from "../../../components/user/ProfileImage";
import ProfileNav from "../../../components/user/ProfileNav";

const UserProfile = () => {
  const params = useParams();
  const username = params.username as string;
  const [data, setData] = useState<IUser>();

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

  return (
    <>
      <Header />
      <div className="user-profile">
        <div className="user-header">
          <article className="user-header-article">
            <ProfileImage user={data} />
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
            <ProfileNav/>

          </div>

        </div>


      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
