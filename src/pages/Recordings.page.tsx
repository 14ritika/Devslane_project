import {FC, memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Recording: FC<Props> =(props) => {
    return (
        <div>
            Recording
            <Link to="/signup"><span className="text-blue-500">Click here!</span></Link>
            <Link to="/dashborad"><span className="text-blue-500">Click here for dashboard!</span></Link>
        </div>
    );
};

Recording.defaultProps = {}

export default memo(Recording);