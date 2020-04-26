import React from 'react';
import Literature from '../components/Literature';
import Physics from '../components/Physics/Physics';
import NotFound from '../components/NotFound';

export default function Component({name, ...rest}) {

    const components = {
        literature: Literature,
        physics: Physics,
        notfound: NotFound
    }

    name = components[name] ? name : 'notfound';

    const TagName = components[name];

    return (<TagName {...rest} />);
}