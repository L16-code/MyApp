import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/app/navigation/types'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'

const SignInScreen = () => {
    const navigate = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const NavigateToSignUp = () => {
        navigate.navigate("SignUp")
    }
    return (
        <SafeAreaWrapper>
            <View>
                <Text>SignInScreen</Text>
                <Button title="Navigate To SignUp " onPress={NavigateToSignUp} />
            </View>
        </SafeAreaWrapper>

    )
}

export default SignInScreen

const styles = StyleSheet.create({})