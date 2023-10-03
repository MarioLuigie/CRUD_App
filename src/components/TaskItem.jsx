/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TaskContext } from '../Store/TaskContext';


const styles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #dadada;
    padding: 20px 20px;
    width: 100%;
    border-radius: 6px;
    box-shadow: #00000067 0 0 7px;

    &:hover {
        background-color: #dfdfdf;
    }

    .textContent {
        font-size: 18px;
    }

    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .control {
        color: grey;
        font-size: 24px;

        &:hover {
            color: #9b9b9b;
            cursor: pointer;
        }
    }
`

export default function TaskItem({
    id,
    textContent
}) {
    const { handleRemoveTask, handleEditTask } = useContext(TaskContext);

    return (
        <div css={styles} id={id}>
            <p className='textContent'>{textContent}</p>
            <div className='controls'>
                <div className='control'>
                    <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTask(id)}/>
                </div>
                <div className='control' onClick={handleRemoveTask(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

TaskItem.propTypes = {
    id: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired
}