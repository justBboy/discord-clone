import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import {selectChannelId, selectChannelName} from './features/app';
import db from './firebase';
import {selectUser} from './features/userSlice';
import firebase from 'firebase';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    useEffect(() => {
        if(channelId){
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }
    }, [channelId])
    const sendMessage = e => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }

    return (
        <div className="chat">
            {
            !!channelId &&
                <Fragment>

                    <ChatHeader channelName={channelName} />
                    <div className="chat__messages">
                        {messages.map(message => (
                            <Message message={message} />
                        ))}
                    </div>
                    <div className="chat__input">
                        <AddCircle fontSize="large" />
                        <form>
                            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="type your message"/>
                            <button onClick={sendMessage} className="chat__inputButton" type="submit"></button>
                        </form>
                        <div className="chat__inputIcons">
                            <CardGiftcard fontSize="large"/>
                            <Gif fontSize="large"/>
                            <EmojiEmotions fontSize="large" />
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default Chat
