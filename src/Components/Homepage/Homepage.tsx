import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import './Homepage.css';

const Homepage = () => {

    // context
    const USER = useContext(UserContext)

    interface taskType {
        text: string,
        time: string,
        key : number
    }

    // states
    const [currentTask, setCurrentTask] = useState <string> ('')
    const [liveTasks, setLiveTasks] = useState <taskType[]> ([])
    const [doneTasks, setDoneTasks] = useState <taskType[]> ([])
    const [key, setKey] = useState <number> (0)

    // functions
    const getTheTime = () => {
        const dateAndTime = new Date();
        const datePart = dateAndTime.toDateString();
        const timePart = dateAndTime.toTimeString();
        const time : string = datePart + " " + timePart;
        return time;
    }

    const clearInputDisplay = () => {
        let inputValue = (document.getElementById('input-tag-text') as HTMLInputElement);
        inputValue.value = ''
    }

    const addToRemainingTask = () => {
        if(currentTask === '') {
            return
        }
        const taskToBeAdded = {
            text : currentTask,
            time : getTheTime(),
            key  : key
        }
        setLiveTasks([...liveTasks, taskToBeAdded])
        clearInputDisplay()
        setCurrentTask('')
        setKey(key+1)
    }

    return (
        <div className="hompage">
            <div className="lists">
                <div className="alive-tasks TASKS">
                    <strong className="strong-text">Tasks remaining {liveTasks.length>0 && `[${liveTasks.length}]`}</strong>
                    {
                        liveTasks.map(task =>
                            <div className="Task"  key={task.key}>
                                <div className="task">
                                    <div className="text">
                                        <p>{task.text}</p>
                                    </div>
                                    <p className="complete-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 complete-button" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </p>
                                </div>
                                {
                                    <p><small><small>{task.time}</small></small></p>
                                }
                            </div>
                        )
                    }
                </div>
                <div className="done-tasks TASKS">
                    <strong className="strong-text">Tasks completed {doneTasks.length>0 && `[${doneTasks.length}]`}</strong>
                    {
                        doneTasks.map(task =>
                            <div className="lists">
                                <div className="task">
                                    <div className="text">
                                        <p>{task}</p>
                                    </div>
                                    <p className="remove-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 remove-button" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </p>
                                </div>
                                {
                                    <p><small>{task.time}</small></p>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="input-form">
                <input type="text" placeholder="add to your task stack" className="input-field" 
                    onChange={e=>setCurrentTask(e.target.value)} id="input-tag-text"
                />
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 add-button" viewBox="0 0 20 20" fill="currentColor" onClick={()=>addToRemainingTask()}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Homepage;