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

export default function RemoveAll() {
    const { toggleModal, handleRemoveAllConfirmTasks } = useContext(TaskContext);

    return (
        <div css={styles}>
            <p className='title'>Remove all Tasks?</p>
            <div className='buttons'>
                <Button 
                    label="Cancel" 
                    onHandle={() => toggleModal({isRemoveAll: false})}//function close modal, arg is prop for change object state for all modals-look at declaration in store
                />
                <Button 
                    label="Done" 
                    onHandle={handleRemoveAllConfirmTasks} 
                />
            </div>
        </div>
    )
}