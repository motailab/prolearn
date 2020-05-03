import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import SuplimentaryTask from './SuplimentaryTask/SuplimentaryTask';

export default function SuplimentaryClasses(props) {

    const history = useHistory();
    const goBack = () => history.goBack();

    return (
        <div className="container-fluid">
            <div className="row" style={{marginTop: '100px'}}>
                <div className="col-md-12">
                    <strong style={{cursor: 'pointer'}} className="d-block mb-4" onClick={goBack}><i className="fas fa-angle-left" aria-hidden="true"></i> Mathematics</strong>
                    <h2>Suplimentary Classes</h2>
                    <p>These supplementary classes will help you to learn, understand and practice topics that you need more help in.</p>

                    <div className="row">
                       <SuplimentaryTask />
                       <SuplimentaryTask />
                       <SuplimentaryTask />
                    </div>
                </div>
            </div>
        </div>
    );
};
