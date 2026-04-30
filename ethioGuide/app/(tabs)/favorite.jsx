import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FavoritesContext } from "@/context/FavoritesContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '@/components/Header'
import MenuItem from "@/components/MenuItem";
import { useRouter } from "expo-router";



export default function Profile() {
  const router = useRouter()
  const { favorites } = useContext(FavoritesContext);

  return (
     <SafeAreaView>
          <Header title="Favorites" showBack={true} />

          <View className="p-2 m-2">
            <Text className="font-bold text-lg">Saved Topics</Text>
          </View>

           <FlatList
            data={favorites}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
            <MenuItem item={item} />
           )}
           ListEmptyComponent={
            <View className="flex-1 items-center justify-center mt-20">
              <Text className="text-secondary text-lg">Your favorite is empty</Text>
              <TouchableOpacity onPress={() => router.push('/explore') } className="mt-4">
                <Text className="text-primary font-bold text-lg">Start Exploring</Text>
              </TouchableOpacity>
            </View>
          }
    />
        </SafeAreaView>
  )
}