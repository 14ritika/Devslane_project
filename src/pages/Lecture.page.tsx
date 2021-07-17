import {FC, memo} from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const Lecture: FC<Props> =(props) => {
    const {lectureNumber, batchNumber}= useParams<any>();
    return (
        <div className="bg-yellow-100">
            This is lecture #{lectureNumber} of batch #{batchNumber}
        </div>
    );
};

Lecture.defaultProps = {}

export default memo(Lecture);