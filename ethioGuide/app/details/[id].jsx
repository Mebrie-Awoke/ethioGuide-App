import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { PROFILE_MENU } from "@/assets/images/categories/asset";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "@/context/FavoritesContext";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";


export default function DetailsPage() {
  const { id } = useLocalSearchParams();
  const router= useRouter();

  const item = PROFILE_MENU
    .flatMap(section => section.data)
    .find(product => product.id === id);

     const { toggleFavorite, isFavorite } = useFavorites();
     const isFav = isFavorite(item);

  if (!item) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-red-500">Item not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}} className="flex-1 bg-white">
       <View
            className="absolute top-12 left-4 right-4
            flex-row justify-between items-center z-10"
            >
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-10 h-10 bg-white/80 rounded-full 
              items-center justify-center"
            >
              <Ionicons name="arrow-back" size={24} color='#5b5555' />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(item)}
              className="w-10 h-10 bg-white/80 rounded-full 
              items-center justify-center"
            >
              <Ionicons
                name={isFav ? "heart" : "heart-outline"}
                size={20}
                color={isFav ? "red" : "gray"}
              />
            </TouchableOpacity>
          </View>


      <ScrollView 
      showsVerticalScrollIndicator={true}>
        <View className="flex-1 items-center justify-start">
        <Image source={item.icon}
          className="w-full h-60 rounded-lg"
         resizeMode="cover" />

         <Text className="text-xl font-bold">
          {item.name}
        </Text>
        <View className="m-2 px-2">
            <Text>
             {item.facts}
           </Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}