import React, { useEffect, useState, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import axios from 'axios';
import { AppContext } from '../../context/context';
import  TYPES  from '../../context/actionTypes';
import { fetchData } from '../../utils/client';
import RightSidebar from '../RightSidebar';
import Calender from 'react-calendar';
import TaskCard from '../TaskCard';
import Spinner from '../Spinner/Spinner';
import Summary from '../Summary/Summary';

export default function LearningPath(props) {
    const {state: { task_history: { tasks, loading }}, dispatch} = useContext(AppContext);
    const [selectedDate, setSelectedDate] = useState(today());
    const [activeDate, setActiveDate] = useState();
    const [summary, setSummary] = useState(null);
    const [completedTask, setCompletedTask] = useState([]);

    function today(){
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    const formatDate = (locale, date) => {
        const name = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        return name[date.getDay()];
    }

    const getCurrentMonth = () => {
        return (new Date()).toLocaleString('default', { month: 'long' });
    }

    const handleChangeDate = value => {
        const date = `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`;
        setSelectedDate(date);
    }
    

    useEffect(() => {
       
        // if((!tasks && loading) || activeDate !== selectedDate) {
        //     setActiveDate(selectedDate);

        //     dispatch({
        //         type: TYPES.LOADING_TASK_HISTORY
        //     });

        //     fetchData(`/completed-task/${selectedDate}.json`)
        //     .then(data => {
        //         dispatch({
        //             type: TYPES.LOADED_TASK_HISTORY,
        //             payload: data
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // }

        axios.all([
            fetchData('/path/summary'),
            fetchData('/path/completed_tasks')
        ])
        .then(axios.spread((summary, completedTask) => {
            setSummary(summary.data);
            setCompletedTask(completedTask.data);
        }))
        .catch(error => {
            console.log(error);
        })

    }, [activeDate, selectedDate, tasks, loading, dispatch]);

    return (
        <div className="taskListContainer p-4">
            <div className="row">
               <div className="col-md-8 overViweWrap">
                  <CustomScroll heightRelativeToParent="100vh">
                   <div className="row">
                   <div className="col-md-7">
                       <div className="sticky-top">
                        <h4 className="title">Archive task</h4>
                        <div className="calender text-center">
                            <strong className="d-block py-2">{ getCurrentMonth() }</strong>
                            <Calender 
                                calendarType="US" 
                                showNavigation={false} 
                                formatShortWeekday={(locale, date) => formatDate(locale, date)}
                                onClickDay={value => handleChangeDate(value)}
                            />
                        </div>
                        
                        <h4 className="title mt-3">Summary Of day</h4>
                        {/* <p style={{fontSize: "12px"}} >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, rerum temporibus eaque hic quibusdam,
                        </p> */}
    
                        <div className="summary">
                            <div className="box">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="first">
                                            5
                                        </h5>
                                        <p>Total number of hours Study</p>
                                    </div>
                                    <div className="col">
                                        <h5>52</h5>
                                        <p>total Assesments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>

                </div>
                <div className="col-md-5 ">
                            <h4 className="title mt-2">
                                Previous task list
                            </h4>
                            <div className="previous-task-wrap">
                                    {completedTask.length > 0 ?
                                        completedTask.map(item => (
                                            <TaskCard {...item}  key={item.id} link={`/todays-task/subject/${item.name}/${item.id}`} /> 
                                        )) :
                                        (<>
                                            <div className="taskbox">
                                                <div className="header">
                                                    <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                    <div><div className="skeleton-box" style={{width: "100%", height: "5px"}}></div></div>
                                                </div>
                                                <div className="content">
                                                    <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                                </div>
                                            </div>
                                            <div className="taskbox">
                                                <div className="header">
                                                    <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                    <div><div className="skeleton-box" style={{width: "100%", height: "5px"}}></div></div>
                                                </div>
                                                <div className="content">
                                                    <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                                </div>
                                            </div>
                                            <div className="taskbox">
                                                <div className="header">
                                                    <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                    <div><div className="skeleton-box" style={{width: "100%", height: "5px"}}></div></div>
                                                </div>
                                                <div className="content">
                                                    <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                                </div>
                                            </div>
                                        </>
                                        )
                                    }
                            </div>
                        </div>
                   </div>
                   </CustomScroll>
               </div>
                <div className="col-md-4">
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};
