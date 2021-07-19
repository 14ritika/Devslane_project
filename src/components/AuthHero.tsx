import {FC, memo} from 'react';
import authRight from '../img/auth-right.webp';

interface Props {}

const AuthHero: FC<Props> =(props) => {
    return (
        <div className="hidden lg:flex h-screen lg:w-1/2 bg-black text-white items-center justify-center">
            <img src={authRight} alt="icon" className="h-4/6 w-4/6" />
        </div>
    );
};

AuthHero.defaultProps = {}

export default memo(AuthHero);