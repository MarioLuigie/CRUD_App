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

export default function RemoveSelected({
    taskIdToRemove,
    setIsRemoveSelected
}) {
    const { toggleModal, tasksListDispatch } = useContext(TaskContext);

    const {
        REMOVE_TASK
    } = taskActions;

    //Remove confirmed task
    const handleRemoveConfirmTask = () => {
        tasksListDispatch({type: REMOVE_TASK, idToRemove: taskIdToRemove});
        setIsRemoveSelected(false);
    }

    const handleCancel = () => {
        setIsRemoveSelected(false);
    }

    return (
        <div css={styles}>
            <p className='title'>Remove selected Task?</p>
            <div className='buttons'>
                <Button 
                    label="Cancel" 
                    onHandle={handleCancel}
                />
                <Button 
                    label="Done" 
                    onHandle={handleRemoveConfirmTask} 
                />
            </div>
        </div>
    )
}