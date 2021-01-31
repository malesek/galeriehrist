import {TodoItem as TodoItemType} from "../types";
import {TodoItem} from "./TodoItem";
type TodoListProps = {
    items: TodoItemType[];
}

export const TodoList: React.FC<TodoListProps> = ({items})=>{
    return (
        <div>
            {items.map((item) => (
                <TodoItem key = {item.id} {...item}/>
            ))}


            {/*JSON.stringify(props)*/}
        </div>
    );
};