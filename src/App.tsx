import { FC } from 'react';
import { func } from 'slepkojs';

export const App: FC = () => {
    console.log(func());

    return <div>Hello slepkoJS</div>;
};
