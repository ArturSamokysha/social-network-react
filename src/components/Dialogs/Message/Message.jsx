import React from 'react';
import s from './../Dialogs.module.css';




//компонента для каждого сообщения
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}



export default Message;