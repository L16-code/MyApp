import Category from '@/app/components/categories/category'
import CreateNewList from '@/app/components/categories/create-new-list'
import Loader from '@/app/components/shared/loader'
import SafeAreaWrapper from '@/app/components/shared/safe-area-wrapper'
import { fetcher } from '@/app/services/config'
import { ICategory } from '@/app/types'
import { Box, Text } from '@/app/utils/theme'
import React from 'react'
import { FlatList } from 'react-native'
import useSWR from "swr"
const CategoriesScreen = () => {
    const { data, isLoading, error } = useSWR(
        "/category/get-all-category/",
        fetcher,
        {
            refreshInterval: 1000,
        }
    )
    if (isLoading) {
        return <Loader />
    }
    const renderItem = ({ item }: { item: ICategory }) => (
        <Category category={item} />
    )
    // console.log(renderItem,"renderItem")
    return (
        <SafeAreaWrapper>
            <Box flex={1} px="4">
                <Text variant="textXl" fontWeight="700" mb="10">
                    Categories
                </Text>
                <FlatList
                    data={data.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <Box height={14} />}
                    keyExtractor={(item) => item._id}
                />
                <CreateNewList />
            </Box>
        </SafeAreaWrapper>
    )
}

export default CategoriesScreen