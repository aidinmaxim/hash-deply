import React, {FC} from 'react';
import {useAppSelector} from "../../app/hooks";
import {Navigate} from "react-router-dom";
//import styles from './ProtectedRoute.module.css'

interface IProps {
    outlet: JSX.Element
}

const ProtectedRoute: FC<IProps> = ({outlet}) => {
    const { user } = useAppSelector(state => state.user)
    if (user) {
        return outlet
    }

    return (
        <Navigate to='../login' />
    );
};

export default ProtectedRoute;