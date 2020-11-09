import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"
import moment from 'moment';

function Message({message}) {
    return (
        <div className="message">
            <Avatar src={message.user.photo} />
            <div className="message__info">
                <h4>{message.user.displayName}
                    <span className="message__timestamp">{moment.unix(message.timestamp?.seconds).fromNow()}</span>
                </h4>
                <p>{message.message}</p>
            </div>
        </div>
    )
}

export default Message
