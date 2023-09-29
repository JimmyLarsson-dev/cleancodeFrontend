// import React, { MouseEvent } from 'react';
//
// interface ButtonProps {
//     text: string;
//     onClick: (event: MouseEvent<HTMLButtonElement>) => void;
//     className?: string;
// }
//
// const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
//     return (
//         <button className={className} onClick={onClick}>
//             {text}
//         </button>
//     );
// };
//
// export default Button;

import {MouseEventHandler} from "react";
import {useNavigate} from "react-router-dom";

interface LogInBtnProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}
function logInBtn({onClick} : LogInBtnProps){

    const goToHomePage= useNavigate()

    return(
        <>
            <div className="loginBtn">
                <button className="loginButton menuBtns" onClick={() => {{goToHomePage(("/home"))}}}>
                    Log in
                </button>
                {/*<p>LOG IN</p>*/}
            </div>
        </>
    )
}
export default logInBtn;