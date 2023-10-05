/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext, useState } from "react";

import { taskActions } from "../constans/actions";
import { TaskContext } from "../Store/TaskContext";
import { colors } from "../styles/colors";
import Button from "../UI/Button";


const styles = (isInputValueValid) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: #b3b3b3 1px solid;
    padding: 40px 20px;

    .inputWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        min-width: 350px;
        gap: 7px;
        padding-bottom: 45px;
    }

    .input {
        padding: 8px 15px;
        width: 100%;
        border-radius: 6px;
        font-size: 18px;
        color: ${colors.darkGrey};
        box-shadow: #0000004c 0 0 12px;
        background-color: ${isInputValueValid ? "white" : "#e08f8f"};

        &::placeholder {
            color: ${isInputValueValid ? "#bdbdbd" : "#e60f2f"} ;
        }

        &:focus::placeholder {
            visibility: hidden;
        }
    }

    .label {
        width: 100%;
        text-align: left;
        font-size: 20px;
        color: ${colors.darkGrey};
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
`

export default function TaskInput() {
        //Init state for all inputs
    const initInputValues = {
        inputTaskValue: ""
    }

    const { 
        isTaskEditing,
        tasksListDispatch,
        setIsTaskEditing,
        editingTaskState
    } = useContext(TaskContext);

    const {
        ADD_TASK,
        UPDATE_TASK
    } = taskActions;

    //State flag for validation input value
    const [isInputValueValid, setIsInputValueValid] = useState(true);
    //State for task input value - controled form
    const [inputValues, setInputValues] = useState(initInputValues);

    //Onchange function for task input
    const handleChangeInputTask = (evt) => {
        setInputValues({...inputValues, inputTaskValue: evt.target.value})
        setIsInputValueValid(true);
    }

    //Adding one single task to the tasks list
    const handleAddTask = (evt) => {
        evt.preventDefault();
        if (inputValues.inputTaskValue.trim() !== "") {
            tasksListDispatch({type: ADD_TASK, textContent: inputValues.inputTaskValue});
            setInputValues({...inputValues, inputTaskValue: ""})
        } else {
            setIsInputValueValid(false);
        }
        setInputValues({...inputValues, inputTaskValue: ""})
    }

    //Updating selected task
    const handleUpdateTask = () => {
        tasksListDispatch({
            type: UPDATE_TASK, 
            idToUpdate: editingTaskState.id,
            editedTextContent: inputValues.inputTaskValue
        });
        setIsTaskEditing(false);
        setInputValues({...inputValues, inputTaskValue: ""})
    }

    const handleCancelEdit = (evt) => {
        evt.preventDefault();
        setInputValues({...inputValues, inputTaskValue: ""})
        setIsTaskEditing(false);
    }

    return (
        <form css={styles(isInputValueValid)} onSubmit={handleAddTask}>
            <div className='inputWrapper'>
                <label htmlFor="taskInput" className='label'>Add Task</label>
                <input 
                    value={inputValues.inputTaskValue}
                    type="text" 
                    id="taskInput"
                    className='input'
                    onChange={handleChangeInputTask}
                    placeholder='Enter text'
                />
            </div> 
            {isTaskEditing
                ? (<div className='buttons'>
                    <Button 
                        label={"Cancel"}
                        type="reset"
                        onHandle={handleCancelEdit}
                    />
                    <Button 
                        label={"update"}
                        type="button"
                        onHandle={handleUpdateTask}
                    />
                   </div>
                ) : <Button label={"Add Task"} type="submit"/> 
            }
        </form>
    )
}