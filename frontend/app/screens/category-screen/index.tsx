import Loader from '@/app/components/shared/loader'
import NavigateBack from '@/app/components/shared/navigate-back'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import Task from '@/app/components/tasks/task'
import TaskActions from '@/app/components/tasks/task-actions'
import { CategoriesStackParamList } from '@/app/navigation/types'
import { fetcher } from '@/app/services/config'
import { Box, Text } from '@/app/utils/theme'
import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { FlatList } from 'react-native'
import useSWR from "swr"
type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">

const CategoryScreen = () => {
    const route = useRoute<CategoryScreenRouteProp>()
    const { id } = route.params

    const { data: category, isLoading: isLoadingCategory } = useSWR(
        `category/get-category/${id}`,
        fetcher
    )

    console.log(`category`, JSON.stringify(category, null, 2))

    const {
        data: tasks,
        isLoading: isLoadingTasks,
        mutate: mutateTasks,
    } = useSWR(`task/get-all-TaskByCategory/${id}`, fetcher, {
        refreshInterval: 1000,
    })

    if (isLoadingTasks || isLoadingCategory || !category || !tasks) {
        return <Loader />
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <Box width={40}>
                    <NavigateBack />
                </Box>
                <Box height={16} />
                <Box flexDirection="row">
                    <Text variant="textXl" fontWeight="700">
                        {category.data.icon.symbol}
                    </Text>
                    <Text
                        variant="textXl"
                        fontWeight="700"
                        ml="3"
                        style={{
                            color: category.data.color.code,
                        }}
                    >
                        {category.data.name}
                    </Text>
                </Box>
                <Box height={16} />
                <TaskActions categoryId={id} />
                <Box height={16} />

                <FlatList
                    data={tasks.data}
                    renderItem={({ item, index }) => {
                        return <Task task={item} mutateTasks={mutateTasks} />
                    }}
                    ItemSeparatorComponent={() => <Box height={14} />}
                />
            </Box>
        </SafeAreaWrapper>
    )
}

export default CategoryScreen