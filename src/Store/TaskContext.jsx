import { createContext, useState, useReducer } from "react";
import PropTypes from "prop-types";

import { taskActions } from "../constans/actions";

export const TaskContext = createContext();

export default function Provider({ children }) {
    const initIsModalOpen = {
        isRemoveSelected: false,
        isRemoveAll: false,
        isEditing: false
    }

    //Init value of tasksList for taskReducer
    const initTasksList = [
        {textContent: "Finish the React course.", id: "01"},
        {textContent: "Go to School.", id: "02"}
    ];

    const {
        ADD_TASK,
        UPDATE_TASK,
        REMOVE_TASK,
        REMOVE_ALL_TASKS
    } = taskActions;

    //State for task input value - controled form
    const [inputTaskValue, setInputTaskValue] = useState("");
    //State flag for validation input value
    const [isInputValueValid, setIsInputValueValid] = useState(true);
    //State for task ID (actual task to do something)
    const [taskIdToDo, setTaskIdToDo] = useState("");
    //State flag isModalOpen
    const [isModalOpen, setIsModalOpen] = useState(initIsModalOpen);
    //State flag for TaskInput - is task editing, bytton add task change to update
    // const [isTaskEditing, setIsTaskEditing] = useState(false);

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

    //Onchange function for task input
    const handleChangeInputTask = (evt) => {
        setInputTaskValue(evt.target.value);
        setIsInputValueValid(true);
    }

    //Function for open or close modal window
    const toggleModal = (propsToActualObj) => {
        setIsModalOpen({...isModalOpen, ...propsToActualObj});
    }

    //Adding one single task to the tasks list
    const handleAddTask = (evt) => {
        evt.preventDefault();
        if (inputTaskValue.trim() !== "") {
            tasksListDispatch({type: ADD_TASK, textContent: inputTaskValue});
            setInputTaskValue("");
        } else {
            setIsInputValueValid(false);
        }
        setInputTaskValue("");
    }

    //Editing selected task 
    const handleEditTask = (selectedTaskId) => () => {
        const editingTask = tasksList.find(task => task.id === selectedTaskId);
        setInputTaskValue(editingTask.textContent);
        setTaskIdToDo(selectedTaskId);
        // setIsTaskEditing(true);
        setIsModalOpen({...isModalOpen, isEditing: true})
    }

    //Updating selected task
    const handleUpdateTask = () => {
        tasksListDispatch({
            type: UPDATE_TASK, 
            idToUpdate: taskIdToDo,
            editedTextContent: inputTaskValue
        });
        // setIsTaskEditing(false);
        setIsModalOpen({...isModalOpen, isEditing: false})
        setInputTaskValue("");
    }

    //Opening modal window to confirm removing selected task
    const handleRemoveTask = (selectedTaskId) => () => {
        setTaskIdToDo(selectedTaskId);
        toggleModal({isRemoveSelected: true});
    }

    //Remove confirmed task
    const handleRemoveConfirmTask = () => {
        tasksListDispatch({type: REMOVE_TASK, idToRemove: taskIdToDo});
        toggleModal({isRemoveSelected: false})
    }

    //Opening modal window to confirm removing all tasks
    const handleRemoveAllTasks = () => {
        toggleModal({isRemoveAll: true});
    }

    //Remove all confirmed tasks
    const handleRemoveAllConfirmTasks = () => {
        tasksListDispatch({type: REMOVE_ALL_TASKS});
        toggleModal({isRemoveAll: false});
    }

    const handleCancelEdit = (evt) => {
        evt.preventDefault();
        setInputTaskValue("");
        setIsModalOpen({...setIsModalOpen, isTaskEditing: false});
    }

    const providerValues = {
        inputTaskValue,
        setInputTaskValue,
        handleChangeInputTask,
        tasksList,
        handleAddTask,
        handleEditTask,
        handleUpdateTask,
        isInputValueValid,
        handleRemoveTask,
        handleRemoveConfirmTask,
        isModalOpen,
        setIsModalOpen,
        toggleModal,
        handleRemoveAllTasks,
        handleRemoveAllConfirmTasks,
        handleCancelEdit
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