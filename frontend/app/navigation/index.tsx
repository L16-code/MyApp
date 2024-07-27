import React, { useEffect } from 'react';
import AppStackNavigator from './app-stack-navigator';
import useUserGlobalStore from '../store/useUserGlobalStore';
import AuthStackNavigator from './auth-stack-navigator';

const Navigation = () => {
    const { user } = useUserGlobalStore()
    return (
        user ? <AppStackNavigator /> : <AuthStackNavigator />
    );
}

export default Navigation;
