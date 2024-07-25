import React from 'react';
import { Box, Text } from '@/app/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/app/navigation/types';
import { Button } from 'react-native';
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'

const WelcomeScreen = () => {
    const navigate = useNavigation<AuthScreenNavigationType<"Welcome">>()
    const NavigateToSignIn = () => {
        navigate.navigate("SignIn")
    }
    const NavigateToSignUp = () => {
        navigate.navigate("SignUp")
    }
    return (
        <SafeAreaWrapper>
            <Box>
                <Text>Welcome home beta sdgdfghfgnjghjghj</Text>
                <Button title="Naviagte to Sign In" onPress={NavigateToSignIn} />
                <Button title="Naviagte to Sign Up" onPress={NavigateToSignUp} />
            </Box>
        </SafeAreaWrapper>

    );
}

export default WelcomeScreen;