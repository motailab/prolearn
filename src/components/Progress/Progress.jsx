import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import  CustomScroll from 'react-custom-scroll';
import { BarChart, LineChart, ResponsiveContainer, Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
  
import { AppContext } from '../../context/context';
import TaskCard from '../TaskCard';
import Spinner from '../Spinner/Spinner';

export default function Progress(props) {
    const [showSpinner, setShowSpinner] = useState(false);
    const {state: { subjects }} = useContext(AppContext);
    const { active } = useParams();

    const data = [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
      
    useEffect(() => {
        if(subjects.length <= 0) {
            setShowSpinner(true);
        } else {
            setShowSpinner(false);
        }

    }, [subjects, active]);

    return (
        <div className="taskListContainer p-4">
            <div className="row">
                <div className="col-md-4 overViweWrap">
                    <div className="previous-task-wrap">
                        <CustomScroll heightRelativeToParent="100vh">
                            {showSpinner ? <Spinner /> :
                                subjects.map((item, index) => (
                                    <TaskCard {...item} link={`/progress/${item.title}`} key={item.id} index={index}/>
                                ))
                            }   
                        </CustomScroll>
                    </div>
                   
                </div>
                <div className="col-md-8 progressArea">
                  <CustomScroll heightRelativeToParent="100vh">
                     <div className="progressInwrap">
                     <div className="box mt-4">
                        <ResponsiveContainer height={300} width='100%'>
                            <BarChart
                                data={data}
                                margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="box mt-4">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                data={data}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div> 
                     </div>
                  </CustomScroll>
                </div>
            </div>
        </div>
    );
};

