import {FC, memo, useEffect} from 'react';

interface Props {}

const NotFound: FC<Props> =(props) => {
    console.log("authhero");
    useEffect(() => {
           console.log("firstTime")
    }, []);
    return (
        <div className="h-screen text-center bg-green-300 text-white">
            Page not found
        </div>
    );
};

NotFound.defaultProps = {}

export default memo(NotFound);