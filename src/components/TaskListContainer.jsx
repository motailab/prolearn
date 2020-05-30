/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard'
import RightSidebar from './RightSidebar';
import Spinner from './Spinner/Spinner';
import CircleProgressBar from './CircleProgressBar/CircleProgressBar';
import RecomendedVideo from './RecomendedTask/RecomendedVideo';

export default function TaskListContainer(params) {
    const [subject_list, setSubjectList] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const history = useHistory();
    const {state} = useContext(AppContext);

    useEffect(() => {
       setSubjectList(state.subjects);

       if(state.subjects.length > 0) {
            setShowSpinner(false);
       }
       
    }, [state]);

    const goBack = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div className="taskListContainer px-4">
            <div className="row">
                <div className="col-lg-8 col-md-6 overViweWrap overview_footer_paddiing">
                    <CustomScroll heightRelativeToParent="100%">
                        <a href="#" className="overview" onClick={goBack}><i className="fas fa-caret-left"></i> Home</a>
                        <h1 className="title">Tasks To Be Completed</h1>
                        <div className="row">
                            {showSpinner ? <Spinner /> :
                                (
                                    <React.Fragment>
                                        {subject_list.map(item => (
                                            <div className="col-lg-6" key={item.id}>
                                                <TaskCard {...item}  />
                                            </div>
                                        ))}

                                        <div className="col-md-6">
                                            <RecomendedVideo 
                                            title='How And Why Read'
                                            courseType='crash Course'
                                            match='45'
                                            data={{
                                                    url: 'http://media.w3.org/2010/05/bunny/movie.mp4',
                                                    thumbnail: null
                                            }}/>
                                        </div>

                                        <div className="col-md-6">
                                            <RecomendedVideo 
                                            title='How And Why Read'
                                            courseType='Rec Course'
                                            match='33'
                                            data={{
                                                    url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                                                    thumbnail: null
                                            }}/>
                                        </div>
                                    </React.Fragment>
                                )
                            
                            }
                        </div>
                    </CustomScroll>
                    {/* <div className="over_viwe_footer">
                        <div className="row">
                            <div className="col-2">
                                <h4 className="title mb-3">Progress</h4>
                                <div className="box">
                                    <div class="progress_area">
                                        <CircleProgressBar 
                                            trailStrokeColor="#C4C4C4"
                                            strokeColor="#37A0F6"
                                            percentage={75}
                                            innerText="complete"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h4 className="title mb-3">Quote Of The Day</h4>
                                <div className="box quote">
                                   <h3>“There are no shortcuts to any place worth going.”</h3>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-4 col-md-6">
                   <RightSidebar/>
                </div>
            </div>
        </div>          
    );
};
