import Button from '@/app/components/shared/button'
import Input from '@/app/components/shared/input'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { AuthScreenNavigationType } from '@/app/navigation/types'
import { registerUser } from '@/app/services/api'
import { IUser } from '@/app/types'
import { Box, Text } from '@/app/utils/theme'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Controller, useForm } from "react-hook-form"
import { Pressable, StyleSheet } from 'react-native'
const SignUpScreen = () => {
    const navigate = useNavigation<AuthScreenNavigationType<"SignUp">>()
    const NavigateToSignIn = () => {
        navigate.navigate("SignIn")
    }
    const { control, handleSubmit, formState: { errors }, } = useForm<IUser>({
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const onSubmit = async (data: IUser) => {
        try {
            const { email, name, password } = data
            console.log(email, name, password)
            await registerUser({
                email,
                name,
                password,
            })
            NavigateToSignIn()
        } catch (error) { }
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} px='5.5' mt={"10"}>
                <Text variant="textXl" fontWeight={"700"}>WelCome To MyTodo</Text>
                <Text variant="textXl" fontWeight={"700"}>Your Journey Starts Here</Text>
                <Box mb="6" />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Name"
                            error={errors.name}
                        />
                    )}
                    name="name"
                />
                <Box mb="6" />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
                            error={errors.email}
                        />
                    )}
                    name="email"
                />
                <Box mb="6" />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Password"
                            error={errors.name}
                            secureTextEntry
                        />
                    )}
                    name="password"
                />
                <Box mt="5.5" />
                <Pressable onPress={NavigateToSignIn}>
                    <Text color="primary" textAlign="right">
                        Log in?
                    </Text>
                </Pressable>
                <Box mb="5.5" />
                <Button label="Register" onPress={handleSubmit(onSubmit)} uppercase />
            </Box>
        </SafeAreaWrapper>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({})