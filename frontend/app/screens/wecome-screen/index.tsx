import React from 'react';
import { AnimatedBox, Box, Text } from '@/app/utils/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenNavigationType } from '@/app/navigation/types';
import {  Image } from 'react-native';
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { ZoomIn } from "react-native-reanimated"
import Button from '@/app/components/shared/button';
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
                <Box flex={1} justifyContent='center' > 
                    <Box alignItems='center' mb="3.5">
                        <Animated.View entering={ZoomIn.duration(2000)}>
                            <Image
                                source={{
                                    uri: BLOSSOM_IMAGE,
                                    width: 120,
                                    height: 120,
                                }}
                            />
                        </Animated.View>
                    </Box>
                    <Text textAlign="center" variant="textXl" fontWeight="700">
                        Do you want to be more productive?
                    </Text>
                    <Box my="3.5" mx="10">
                        <Button
                            label="Start your journey"
                            onPress={NavigateToSignUp}
                        />
                    </Box>
                    <Text
                        textAlign="center"
                        variant="textXs"
                        fontWeight="700"
                        color="gray5"
                    >
                        26,698 registered today
                    </Text>
                </Box>
            </LinearGradient>
        </SafeAreaWrapper>

    );
}

export default WelcomeScreen;
