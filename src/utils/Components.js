import React, { useEffect, useState } from 'react';
import Literature from '../components/Literature/Literature';
import Physics from '../components/Physics/Physics';
import NotFound from '../components/NotFound';
import Mathematics from '../components/Mathematics/Mathematics';

export default function Component({name, timeEnd, ...rest}) {
    const [timeFinish, setTimeFinsh] = useState(false);

    const components = {
        literature: Literature,
        physics: Physics,
        mathematics: Mathematics,
        notfound: NotFound
    }

    useEffect(() => {
        if(timeEnd) {
            setTimeFinsh(true);
        }
    }, [timeEnd])

    name = components[name] ? name : 'notfound';
    const TagName = components[name];

    return (<TagName {...rest} timeEnd={timeFinish}/>);
}