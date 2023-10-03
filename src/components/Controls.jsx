/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from "react";

import { TaskContext } from '../Store/TaskContext';
import Button from "../UI/Button";

const styles = css`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;

    .example {

     }
`

export default function Controls() {
    const { handleRemoveAllTasks } = useContext(TaskContext);

    return (
        <div css={styles}> 
            <Button 
                label="Remove All"
                onHandle={handleRemoveAllTasks}
            />
        </div>
    )
}

