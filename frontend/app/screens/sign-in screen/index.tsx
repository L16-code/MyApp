import { StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/app/navigation/types'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { Box, Text } from '@/app/utils/theme'
import { Controller, useForm } from "react-hook-form"
import { Pressable } from "react-native"
import Input from '@/app/components/shared/input'
import Button from '@/app/components/shared/button'
import { IUser } from '@/app/types'
import { loginUser } from '@/app/services/api'
import useUserGlobalStore from '@/app/store/useUserGlobalStore'
const SignInScreen = () => {
    const navigate = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const NavigateToSignUp = () => {
        navigate.navigate("SignUp")
    }
    const { control, handleSubmit, formState: { errors }, } = useForm<Omit<IUser, "name">>({
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const { updateUser } = useUserGlobalStore()
    const onSubmit = async (data: Omit<IUser, "name">) => {
        try {
            const { email, password } = data
            const _user = await loginUser({
                email: email.toLowerCase(),
                password: password.toLowerCase(),
            })
            updateUser({
                email: _user.email,
                name: _user.name,
            })
        } catch (error) { }
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} px="5.5" justifyContent="center">
                <Text variant="textXl" fontWeight="700">
                    Welcome Back
                </Text>
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
                            error={errors.password}
                            secureTextEntry
                        />
                    )}
                    name="password"
                />
                <Box mt="5.5" />
                <Pressable onPress={NavigateToSignUp}>
                    <Text color="primary" textAlign="right">
                        Register?
                    </Text>
                </Pressable>
                <Box mb="5.5" />

                <Button label="Login" onPress={handleSubmit(onSubmit)} uppercase />
            </Box>
        </SafeAreaWrapper>

    )
}

export default SignInScreen

const styles = StyleSheet.create({})