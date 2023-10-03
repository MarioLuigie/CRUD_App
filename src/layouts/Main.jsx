/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { header, main, footer } from "../styles/dimensions";
import TaskInput from "../components/TaskInput";
import TasksList from '../components/TasksList';
import Controls from "../components/Controls";

const styles = css`
    width: ${main.width}%;
    height: calc(100vh - ${header.height + footer.height}px);
    display: flex;
    flex-direction: column;

    .example {

     }
`

export default function Main() {

    return (
        <div css={styles}>
            <TaskInput />
            <TasksList />
            <Controls />
        </div>
    )
}