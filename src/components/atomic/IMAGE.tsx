import React from 'react'
import {TodoItem as TodoItemType} from "../../types";
import "./H1.css"

type Props = TodoItemType;

export const IMAGE : React.FC<TodoItemType> = ({source, title}) => {
    return <img src={source} alt={title}></img>;
}