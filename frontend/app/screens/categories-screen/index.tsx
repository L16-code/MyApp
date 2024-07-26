import Loader from '@/app/components/shared/loader'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { fetcher } from '@/app/services/config'
import { Box, Text } from '@/app/utils/theme'
import React from 'react'
import { FlatList } from 'react-native'
import useSWR from "swr"
import CategoryScreen from '../category-screen'
import { ICategory } from '@/app/types'
import CreateCategoryScreen from '../create-category-screen'
const CategoriesScreen = () => {
    const { data, isLoading, error } = useSWR("categories", fetcher)
    if (isLoading) {
        return <Loader />
    }
    const renderItem = ({ item }: { item: ICategory }) => (
        <CategoryScreen category={item} />
      )
    return (
        <SafeAreaWrapper>
            <Box flex={1} px="4">
                <Text variant="textXl" fontWeight="700" mb="10">
                    Categories
                </Text>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <Box height={14} />}
                    keyExtractor={(item) => item._id}
                />
                <CreateCategoryScreen />
            </Box>
        </SafeAreaWrapper>
    )
}

export default CategoriesScreen