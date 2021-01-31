import {TodoItem as TodoItemType} from "../types";
import { H1 } from "./atomic/H1";
import { IMAGE } from "./atomic/IMAGE";
import "./TodoItem.css"

type TodoItemProps = TodoItemType;

export const TodoItem: React.FC<TodoItemProps> = ({title, location, description, source})=>{
    return (
        <div className="todoItem">
            <img src={source} alt={title}></img>
            <H1>{title}</H1>
            <hr/>
            <div className="location">{location}</div>
            <p className="description">{description}</p>
        </div>
    );
};