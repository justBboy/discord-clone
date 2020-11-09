import React from 'react'
import { useDispatch } from 'react-redux'
import './SidebarChannel.css'
import { setChannelInfo } from './features/app';

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch();
    console.log(id);
    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
            id,
            channelName
        }))}>
            <h4>
                <span className="sidebarChannel__hash">#</span>{channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
