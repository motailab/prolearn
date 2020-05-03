import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import rewardIcon from '../../../../assets/images/reward.svg';


export default function SuplimentaryTask(props) {
    const match = useRouteMatch();

    const generateStyle = (time) => {
        const colors = [
            ['#37A0F6', '#387EE9'],
            ['#FB872B', '#D9E021'],
            ['#D4145A', '#FBB03B '],
        ]
        
        let selectedColor = colors[0]

        if (time === 30) {
            selectedColor = colors[1];
        } else if (time === 60) {
            selectedColor = colors[2];
        }

        return {
            background: `linear-gradient(90deg, ${selectedColor[0]} 0%, ${selectedColor[1]} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Rubik',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '57px',
            margin: '1em 0'
        }
   };

    return (
        <div className="col-md-4">
            <div className="card p-4 shadow rounded">
                <Link to={match.url+'/subjects'}>
                    <h5>Supplementary Class 1</h5>
                    <h4 className="text-dark">Fractions</h4>
                    <h1 style={{...generateStyle()}}>10mins</h1>
                    <p>
                        <strong className="d-block">description</strong>
                        This supplementary Class will focus purely on
                        Fractions. Doing 8 questions in 10 mins will
                        allow you to familiarise yourself with fractions.
                    </p>
                </Link>
            </div>

            <div className="card p-2 shadow">
                <div className="d-flex justify-content-center">
                    <img src={rewardIcon} alt="reward" className="img-fluid"/> 
                    <div className="text ml-4">
                        <strong>Reward</strong>
                        <p>Plus 2 marks for the next assessment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
