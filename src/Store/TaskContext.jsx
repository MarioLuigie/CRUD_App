import { createContext, useState, useReducer } from "react";
import PropTypes from "prop-types";

import { taskActions } from "../constans/actions";

export const TaskContext = createContext();

export default function Provider({ children }) {
    //Init value of tasksList state for taskReducer
    const initTasksList = [
        {textContent: "Finish the React course.", id: "01"},
        {textContent: "Go to School.", id: "02"}
    ];

    const initEditingTaskState = {
        textContent: "",
        id: ""
    }

    //Destructure actions from import for Reducer
    const {
        ADD_TASK,
        UPDATE_TASK,
        REMOVE_TASK,
        REMOVE_ALL_TASKS
    } = taskActions;

    //State for task object (actual task to do something)
    const [editingTaskState, setEditingTaskState] = useState(initEditingTaskState);

    //State flag for TaskInput - is task editing, bytton add task change to update
    const [isTaskEditing, setIsTaskEditing] = useState(false);

    //taskReducer for tasksList - CRUD
    const taskReducer = (tasksList, action) => {
        const newTask = {
            textContent: action.textContent,
            id: `${Date.now()}_${Math.floor(Math.random() * 1000)}`
        }

        switch (action.type) {
            case ADD_TASK:
                return [...tasksList, newTask];
            case UPDATE_TASK:
                return tasksList.map((task) => (
                    task.id === action.idToUpdate 
                        ? {...task, textContent: action.editedTextContent}
                        : task
                ));
            case REMOVE_TASK:
                return tasksList.filter(task => task.id !== action.idToRemove);
            case REMOVE_ALL_TASKS:
                return [];
            default:
                return tasksList;
        }
    }

    const [tasksList, tasksListDispatch] = useReducer(taskReducer, initTasksList);

    const providerValues = {
        tasksList,
        isTaskEditing,
        tasksListDispatch,
        setIsTaskEditing,
        editingTaskState, 
        setEditingTaskState,
        initEditingTaskState
    }

    return (
        <TaskContext.Provider value={providerValues}>
            {children}
        </TaskContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
}