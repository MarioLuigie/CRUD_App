/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from "react";

import { taskActions } from '../../constans/actions';
import { TaskContext } from "../../Store/TaskContext";
import Button from "../../UI/Button";

const styles = css`
    width: 100%;

    .title {
        font-size: 20px;
        width: 100%;
        text-align: center;
        padding-bottom: 30px;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`

export default function RemoveAll({
    setIsRemoveAll
}) {
    const { tasksListDispatch } = useContext(TaskContext);

    const {
        REMOVE_ALL_TASKS
    } = taskActions;

    //Remove all confirmed tasks
    const handleRemoveAllConfirmTasks = () => {
        tasksListDispatch({type: REMOVE_ALL_TASKS});
        setIsRemoveAll(false);
    }

    const handleCancel = () => {
        setIsRemoveAll(false);
    }

    return (
        <div css={styles}>
            <p className='title'>Remove all Tasks?</p>
            <div className='buttons'>
                <Button 
                    label="Cancel" 
                    onHandle={handleCancel}
                />
                <Button 
                    label="Done" 
                    onHandle={handleRemoveAllConfirmTasks} 
                />
            </div>
        </div>
    )
}