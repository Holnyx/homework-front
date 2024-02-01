import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1'
import Moment from 'react-moment'
import image from './../avatar.png'


// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={image}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <span>Ivan</span>
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        <span>Hello, she didn’t do anything and rested all day, how are you?</span>
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <Moment format='HH:mm' interval={1000} />
            </div>
        </div>
    )
}

export default Message
