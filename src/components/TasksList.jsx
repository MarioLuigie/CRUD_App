/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext, useState } from "react";

import { TaskContext } from "../Store/TaskContext";
import TaskItem from "../components/TaskItem";
import RemoveAll from './Modals/RemoveAll';
import RemoveSelected from './Modals/RemoveSelected';
import ModalPortal from './ModalPortal';

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
	const { 
		tasksList, 
		setEditingTaskState, 
		setIsTaskEditing,
	} = useContext(TaskContext);

	const [taskIdToRemove, setTaskIdToRemove] = useState();
	const [isRemoveSelected, setIsRemoveSelected] = useState(false);

	//Editing selected task 
	const handleEditTask = (selectedTaskId) => () => {
		const editingTask = tasksList.find(task => task.id === selectedTaskId);

		setEditingTaskState(editingTask);
		setIsTaskEditing(true);
	}

	//Opening modal window to confirm removing selected task
	const handleRemoveTask = (selectedTaskId) => () => {
		setTaskIdToRemove(selectedTaskId);
		setIsRemoveSelected(true);
	}

	return (
		<>
			<div css={styles}>
				{tasksList.map(task => (
					<TaskItem 
						key={task.id} 
						id={task.id}
						textContent={task.textContent} 
						handleEditTask={handleEditTask}
						handleRemoveTask={handleRemoveTask}
					/>
				))}
			</div>
			{isRemoveSelected && 
				<ModalPortal>
					<RemoveSelected taskIdToRemove={taskIdToRemove} setIsRemoveSelected={setIsRemoveSelected} />
				</ModalPortal>
			}
		</>

	)
}