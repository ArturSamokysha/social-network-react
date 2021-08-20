import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let posts = [
  //   { id: '1', message: 'Hello', like: '10' },
  //   { id: '2', message: 'My first post', like: '15' }
  // ];

  let postsElements = props.posts.map((p) => <Post message={p.message} like={p.like} />)


  return <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea name="" id="" cols="30" rows="2"></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>

    <div className={s.posts}>
      {postsElements}


      {/* <Post message={postData[0].message} like={postData[0].like} />
      <Post message={postData[1].message} like={postData[1].like} />
      <Post />
      <Post /> */}
    </div>
  </div>

};

export default MyPosts;