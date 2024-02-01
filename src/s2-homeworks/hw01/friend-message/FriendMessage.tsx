import React  from 'react'
import s from './FriendMessage.module.css'
import { MessageType } from '../HW1'
import Moment from 'react-moment'
import image from './../avatar.png'

type FrendsMessageType = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FrendsMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                src={image}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <span>Ivan</span>
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        <span>Hello, how are you, what did you do yesterday?</span>
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                <Moment format='HH:mm' interval={1000} />
            </div>
        </div>
    )
}

export default FriendMessage
