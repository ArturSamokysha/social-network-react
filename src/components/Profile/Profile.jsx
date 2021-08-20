import React from 'react';
import r from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  // let posts = [
  //   { id: '1', message: 'Hello', like: '10' },
  //   { id: '2', message: 'My first post', like: '15' }
  // ];

  return <div>
    <ProfileInfo />
    <MyPosts posts={props.posts} />
  </div>
};

export default Profile;