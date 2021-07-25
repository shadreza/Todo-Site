import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const Homepage = () => {

    // context
    const USER = useContext(UserContext)

    // states
    const [allTasks, setAllTasks] = useState <String[]> ([])
    const [liveTasks, setLiveTasks] = useState <String[]> (['1,23,1','123'])
    const [doneTasks, setDoneTasks] = useState <String[]> ([])

    // functions


    return (
        <div className="hompage">
            <div className="lists">
                <div className="alive-tasks">
                    <strong>Tasks remaining</strong>
                    {
                        liveTasks.map(task =>
                            <div className="task">
                                <div className="text">
                                    <p>{task}</p>
                                </div>
                                <div className="complete-btn">
                                
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="done-tasks">
                    <strong>Tasks completed</strong>
                    {
                        doneTasks.map(task =>
                            <div className="task">
                                <div className="text">
                                    <p>{task}</p>
                                </div>
                                <div className="remove-btn">
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="input-form">
                <input type="text" placeholder="add to your task stack"/>
                <button>Add</button>
            </div>
        </div>
    );
};

export default Homepage;