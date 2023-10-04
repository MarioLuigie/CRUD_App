/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from "react";

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
    const { 
        inputTaskValue, 
        handleChangeInputTask,
        handleAddTask,
        handleUpdateTask,
        isInputValueValid,
        handleCancelEdit,
        isTaskEditing
    } = useContext(TaskContext);

    return (
        <form css={styles(isInputValueValid)} onSubmit={handleAddTask}>
            <div className='inputWrapper'>
                <label htmlFor="taskInput" className='label'>Add Task</label>
                <input 
                    value={inputTaskValue}
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