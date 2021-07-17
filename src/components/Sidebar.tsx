import {FC, memo} from 'react';

interface Props {}

const Sidebar: FC<Props> =(props) => {
    
    return (
        <div className="h-screen w-60 bg-gray-300 text-white">
            sidebar
        </div>
    );
};

Sidebar.defaultProps = {}

export default memo(Sidebar);