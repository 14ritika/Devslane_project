import { FC, InputHTMLAttributes, memo} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    touched?: boolean;
    error?: string;
}



const Input: FC<Props> =({ id,touched ,error, className, placeholder,...rest}) => {
    return (
        <div>
          <div className="border-b-2">
              <label htmlFor={id} className="sr-only">
                {placeholder}
              </label>
              
              <input
               {...rest}
                required
                className= {"appearance-none rounded-none relative block w-full   bg-gray-50 placeholder-gray-400 text-gray-800 focus:outline-none h-12  focus:z-10 text-xl sm:text-base w-3/4" + className}
                placeholder={placeholder}
              />
            </div>
            {touched && <div className="text-red-500">{error}</div>}
        </div>
    );
};

Input.defaultProps = {}

export default memo(Input);