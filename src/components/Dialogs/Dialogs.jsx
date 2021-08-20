import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


// //Компонента для каждого имени
// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;
//     return <div className={s.dialog + ' ' + s.active}>
//         <NavLink to={path}>{props.name}</NavLink>
//     </div>
// };

// //компонента для каждого сообщения
// const Message = (props) => {
//     return <div className={s.message}>{props.message}</div>
// }

const Dialogs = (props) => {

    // let dialogs = [
    //     { id: '1', name: 'Artur' },
    //     { id: '2', name: 'Natali' },
    //     { id: '3', name: 'Alex' }
    // ];

    // let messages = [
    //     { id: '1', message: 'Hi' },
    //     { id: '2', message: 'How are you?' }
    // ];

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map((m) => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
            </div>

            <div className={s.messages}>
                {messagesElements}
                {/* <Message message={messageData[0].message} />
                <Message message={messageData[1].message} /> */}
            </div>

        </div>
    )
}

export default Dialogs;