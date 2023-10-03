/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from "react";

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

export default function RemoveSelected() {
    const { handleRemoveConfirmTask, toggleModal } = useContext(TaskContext);

    return (
        <div css={styles}>
            <p className='title'>Remove selected Task?</p>
            <div className='buttons'>
                <Button 
                    label="Cancel" 
                    onHandle={() => toggleModal({isRemoveSelected: false})}//function close modal, arg is prop for change object state for all modals-look at declaration in store
                />
                <Button 
                    label="Done" 
                    onHandle={handleRemoveConfirmTask} 
                />
            </div>
        </div>
    )
}