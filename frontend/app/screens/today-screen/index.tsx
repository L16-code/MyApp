import Loader from '@/app/components/shared/loader'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import Task from '@/app/components/tasks/task'
import { fetcher } from '@/app/services/config'
import { Box, Text } from '@/app/utils/theme'
import React from 'react'
import { FlatList, View } from 'react-native'
import useSWR from "swr"
const TodayScreen = () => {
    const {
        data: tasks,
        isLoading: isLoadingTasks,
        mutate: mutateTasks,
    } = useSWR(`task/get-all-TodayTask`, fetcher,
        {
            refreshInterval: 1000,
        }
    )
    if (isLoadingTasks || !tasks) {
        return <Loader />
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <Box height={16} />
                <Box flexDirection="row">
                    <Text variant="textXl" fontWeight="700" ml="3">
                        Today
                    </Text>
                </Box>
                <Box height={16} />

                <FlatList
                    data={tasks.data}
                    renderItem={({ item, index }) => {
                        return <Task task={item} mutateTasks={mutateTasks} />
                    }}
                    ItemSeparatorComponent={() => <Box height={14} />}
                    keyExtractor={(item) => item._id}
                />
            </Box>
        </SafeAreaWrapper>
    )
}

export default TodayScreen