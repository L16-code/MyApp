import React from 'react';
import { Box, Text } from '@/app/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/app/navigation/types';
import { Button } from 'react-native';
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { LinearGradient } from 'expo-linear-gradient';

const BLOSSOM_IMAGE =
    "https://res.cloudinary.com/dooxt2sgsdooxt2sgs23233/image/upload/v1676809769/youtube/2023/february/blossom/icon_fb36u3.png"
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
            <LinearGradient
                colors={["#ffffff", "#fcecff", "#f8daff", "#fae2ff", "#fae2ff", "#ffffff"]}
                style={{ flex: 1 }}
            >
                <Box flex={1}>
                    <Box alignItems='center'>

                    </Box>
                </Box>
            </LinearGradient>
        </SafeAreaWrapper>

    );
}

export default WelcomeScreen;
