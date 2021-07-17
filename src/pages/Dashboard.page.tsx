import {FC, memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Dashboard: FC<Props> =(props) => {
    return (
        <div>
            This is landing page
            <Link to="/recordings"><span className="text-blue-500">Go to Lecture records</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);

