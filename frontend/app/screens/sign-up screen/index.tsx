import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/app/navigation/types'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'

const SignUpScreen = () => {
    const navigate = useNavigation<AuthScreenNavigationType<"SignUp">>()
    const NavigateToSignIn = () => {
        navigate.navigate("SignIn")
    }
    return (
        <SafeAreaWrapper>
            <View>
                <Text>SignUpScreen</Text>
                <Button title="Navigate To SignUp " onPress={NavigateToSignIn} />
            </View>
        </SafeAreaWrapper>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({})