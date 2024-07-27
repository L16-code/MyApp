import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/app/navigation/types'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { AnimatedText, Box, Text } from '@/app/utils/theme'
import { ZoomInEasyDown } from 'react-native-reanimated'
import useUserGlobalStore from '@/app/store/useUserGlobalStore'
import { fetcher } from '@/app/services/config'
import useSWR from "swr"
import { getGreeting } from '@/app/utils/helpers'
import Loader from '@/app/components/shared/loader'
import TaskActions from '@/app/components/tasks/task-actions'
import { FlatList } from 'react-native'
import Task from '@/app/components/tasks/task'
import { format } from 'date-fns'
const today = new Date()
const greeting = getGreeting({ hour: new Date().getHours() })
const HomeScreen = () => {
    const { user } = useUserGlobalStore()

    const {
        data: tasks,
        isLoading,
        mutate: mutateTasks,
    } = useSWR("task/get-all-task", fetcher,{
        refreshInterval: 1000,
    })

    if (isLoading || !tasks) {
        return <Loader />
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <AnimatedText
                    variant="textXl"
                    fontWeight="500"
                    entering={ZoomInEasyDown.delay(500).duration(700)}
                >
                    Good {greeting} {user?.name}
                </AnimatedText>
                <Text variant="textXl" fontWeight="500">
                    It’s {format(today, "eeee, LLL dd")} - {tasks.length} tasks
                </Text>
                <Box height={26} />
                <TaskActions categoryId="" />
                <Box height={26} />
                <FlatList
                    data={tasks.data}
                    renderItem={({ item }) => (
                        <Task task={item} mutateTasks={mutateTasks} />
                    )}
                    ItemSeparatorComponent={() => <Box height={14} />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                />
            </Box>
        </SafeAreaWrapper>
    )
}

export default HomeScreen
