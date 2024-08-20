import {ChangeEventHandler, useCallback, useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListstate} from "../states/todoListState";

export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListstate);
    const addItem = useCallback(() => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ]);
        setInputValue('');
    } ,[inputValue, setTodoList])
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: {value}}) => {
        setInputValue(value);
    },[]);

    return (
        <div>
            <input type='text' value={inputValue} onChange={onChange}/>
            <div className="text-center text-red-600 text-3xl">
            <button onClick={addItem}>Todo List Today!</button></div>
        </div>
    )
}

let id = 0;
function getId() {
    return id++;
}