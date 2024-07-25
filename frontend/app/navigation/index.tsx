import React from 'react';
import AuthStackNavigator from "./auth-stack-navigator";
import AppStackNavigator from './app-stack-navigator';
// Import your authenticated stack navigator here
// import AppStackNavigator from "./app-stack-navigator";

const Navigation = () => {
    const user = true;  // Replace with actual authentication check

    return (
            // <AuthStackNavigator />
            <AppStackNavigator />
    );
}

export default Navigation;
