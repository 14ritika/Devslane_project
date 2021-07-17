import {FC, memo, useEffect} from 'react';

interface Props {}

const AuthHero: FC<Props> =(props) => {
    console.log("authhero");
    useEffect(() => {
           console.log("firstTime")
    }, []);
    return (
        <div className="h-screen w-1/2 bg-black text-white">
            LOGO hai yaha
        </div>
    );
};

AuthHero.defaultProps = {}

export default memo(AuthHero);