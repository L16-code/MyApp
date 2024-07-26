import React from 'react'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { FlatList,  View } from 'react-native'
import { Box, Text } from '@/app/utils/theme'
import NavigateBack from '@/app/components/shared/navigate-back'
import { RouteProp } from '@react-navigation/native'
import { CategoriesStackParamList } from '@/app/navigation/types'
type CategoryScreenRouteProp = RouteProp<CategoriesStackParamList, "Category">

const CategoryScreen = () => {
    return (
        <SafeAreaWrapper>
            <Box flex={1} mx="4">
                <Box width={40}>
                    <NavigateBack />
                </Box>
                <Box height={16} />
                <Box flexDirection="row">
                    <Text variant="textXl" fontWeight="700">
                        {category.icon.symbol}
                    </Text>
                    <Text
                        variant="textXl"
                        fontWeight="700"
                        ml="3"
                        style={{
                            color: category.color.code,
                        }}
                    >
                        {category.name}
                    </Text>
                </Box>
                <Box height={16} />
                <TaskActions categoryId={id} />
                <Box height={16} />

                <FlatList
                    data={tasks}
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