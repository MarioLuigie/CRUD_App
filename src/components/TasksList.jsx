/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from "react";

import { TaskContext } from "../Store/TaskContext";
import TaskItem from "../components/TaskItem";

const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 400px;
    overflow: auto;
    gap: 20px;
    padding: 40px 30px;
`

export default function TasksList() {

    const { tasksList } = useContext(TaskContext);

    return (
        <div css={styles}>
            {tasksList.map(task => (
                <TaskItem 
                    key={task.id} 
                    id={task.id}
                    textContent={task.textContent} 
                />
            ))}
        </div>
    )
}