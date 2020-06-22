import React, { useEffect, useState, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { AppContext } from '../../context/context';
import  TYPES  from '../../context/actionTypes';
import { fetchData } from '../../utils/dataClient';
import RightSidebar from '../RightSidebar';
import Calender from 'react-calendar';
import TaskCard from '../TaskCard';
import Spinner from '../Spinner/Spinner';

export default function LearningPath(props) {
    const {state: { task_history: { tasks, loading }}, dispatch} = useContext(AppContext);
    const [selectedDate, setSelectedDate] = useState(today());
    const [activeDate, setActiveDate] = useState();
    
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
       
        if((!tasks && loading) || activeDate !== selectedDate) {
            setActiveDate(selectedDate);

            dispatch({
                type: TYPES.LOADING_TASK_HISTORY
            });

            fetchData(`/completed-task/${selectedDate}.json`)
            .then(data => {
                dispatch({
                    type: TYPES.LOADED_TASK_HISTORY,
                    payload: data
                });
            })
            .catch(err => {
                console.log(err);
            });
        }

    }, [activeDate, selectedDate, tasks, loading, dispatch]);

    return (
        <div className="taskListContainer px-4">
            <div className="row">
               <div className="col-md-8 overViweWrap">
                   <div className="row">
                   <div className="col-md-7">
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

                    <div className="box summary mt-4">
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
                <div className="col-md-5 ">
                            <h4 className="title mt-2">
                                Previous task list
                            </h4>
                            <div className="previous-task-wrap">
                                <CustomScroll heightRelativeToParent="100%">
                                    {tasks === undefined || loading ? <Spinner /> :
                                        tasks ? tasks.map(item => (
                                            <TaskCard {...item}  key={item.id} link={"/todays-task/subject/"+item.title} /> 
                                        )) : <div className='alert alert-warning py-4 text-center'>No History Found</div>
                                    }
                                </CustomScroll>
                            </div>
                        </div>
                   </div>
               </div>
                <div className="col-md-4">
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};
