import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/app/navigation/types'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'

const HomeScreen = () => {
    const navigate = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const NavigateToSignUp = () => {
        navigate.navigate("SignUp")
    }
    return (
        <SafeAreaWrapper>
            <View>
                <Text>HomeScreen</Text>
                <Button title="Navigate To SignUp " onPress={NavigateToSignUp} />
            </View>
        </SafeAreaWrapper>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})