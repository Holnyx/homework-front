import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void  // need to fix any
}

type SetErrorFunction = (error: string) => void
type SetNameFunction = (name: string) => void
type addUserCallback = (name: string) => void

export const pureAddUser = (name: string, setError: SetErrorFunction, setName: SetNameFunction, addUserCallback: addUserCallback) => {
    return name.trim() === '' ? setError('Ошибка! Введите имя!') : (setName(''), addUserCallback(name.trim()))
}

export const pureOnBlur = (name: string, setError: any) => {
    return name.trim() === '' ? setError('Ошибка! Введите имя!') : '' // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string) => void) => {
    e.key === 'Enter' && addUser(e.currentTarget?.value.trim());
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<string>('') 
    const [count, setCount] = useState(0)
    // const [lastUserName, setLastUserName] = useState('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError('')
        setName(e.currentTarget.value)
    }
    const addUser = (name: string) => {
        pureAddUser(name, setError, setName, addUserCallback)
        name !== '' && setCount(count + 1)
        // setLastUserName(name)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    // const totalUsers = count // need to fix
    const lastUserName = users.length > 0 ? users[users.length - 1].name : '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={count}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
