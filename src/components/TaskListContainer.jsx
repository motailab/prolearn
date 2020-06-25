/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect} from 'react';
import CustomScroll from 'react-custom-scroll';
import { useHistory } from 'react-router-dom';
import TaskCard from './TaskCard';
import RecomendedVideo from './RecomendedTask/RecomendedVideo';
import OverviewRightSidebar from './OverviewRightSidebar';
import { fetchData } from '../utils/client';

export default function TaskListContainer(params) {
    const history = useHistory();
    const [pendingTask, setPendingTask] = useState([]);

    useEffect(() => {
       fetchData('/task/pending')
       .then(task => {
           setPendingTask(task.data);
       })
       .catch(error => {
           console.log(error);
       });
       
    }, []);

    const goBack = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div className="taskListContainer p-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 overViweWrap">
                    <CustomScroll heightRelativeToParent="100vh">
                        <a href="#" className="overview" onClick={goBack}><i className="fas fa-caret-left"></i> Home</a>
                        <h1 className="title">Tasks To Be Completed</h1>
                        <div className="row">
                            {pendingTask.length === 0 ? (
                                <>
                                    {/* skeleton start  */}
                                    <div className="col-md-6">
                                        <div className="taskbox">
                                            <div className="header">
                                                <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                <div>Estimated Time: <div className="skeleton-box" style={{width: "10%", height: "5px"}}></div> Minutes</div>
                                            </div>
                                            <div className="content">
                                                <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="taskbox">
                                            <div className="header">
                                                <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                <div>Estimated Time: <div className="skeleton-box" style={{width: "10%", height: "5px"}}></div> Minutes</div>
                                            </div>
                                            <div className="content">
                                                <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="taskbox">
                                            <div className="header">
                                                <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                <div>Estimated Time: <div className="skeleton-box" style={{width: "10%", height: "5px"}}></div> Minutes</div>
                                            </div>
                                            <div className="content">
                                                <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="taskbox">
                                            <div className="header">
                                                <h4><div className="skeleton-box" style={{width: "40%", height: "5px"}}></div> <span className="status"></span> </h4>
                                                <div>Estimated Time: <div className="skeleton-box" style={{width: "10%", height: "5px"}}></div> Minutes</div>
                                            </div>
                                            <div className="content">
                                                <div className="skeleton-box" style={{width: "40%", height: "5px"}}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* skeleton end  */}
                                </>
                            ) :
                                (
                                    <React.Fragment>

                                        {pendingTask.filter(item => item.type === 'test' || item.type === 'content').map(task => (
                                            <div className="col-lg-6" key={task.id}>
                                                <TaskCard {...task}  />
                                            </div>
                                        ))}
                                        
                                        {pendingTask.filter(item => item.type === 'video').map((task) => (
                                            <div className="col-lg-6" key={task.id}>
                                                <RecomendedVideo 
                                                title={task.name}
                                                courseType={task.text}
                                                match={task.match}
                                                data={{
                                                        url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                                                        thumbnail: null,
                                                        id: task.id
                                                }}/>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                )
                            
                            }
                        </div>
                    </CustomScroll>
                </div>
                <div className="col-lg-4 col-md-5">
                   <OverviewRightSidebar/>
                </div>
            </div>
        </div>          
    );
};
