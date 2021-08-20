import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return <div>
    <img src='https://images.unsplash.com/photo-1522545361617-59a6f7d3af1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80' />
    <div className={s.descriptionBlock}>
      ava + description
    </div>
  </div>
};
export default ProfileInfo;