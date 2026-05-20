import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFavorites } from "@/context/FavoritesContext";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function MenuItem({ item }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(item);
  const { width } = Dimensions.get("window");


  return (
    // 1. The Container View holds everything
    <View className="relative mb-3">
      
      {/* 2. The Link ONLY wraps the card content */}
      <Link href={`/details/${item.id}`} asChild>
        <TouchableOpacity 
          activeOpacity={0.7}
          className="flex-row items-center  bg-white rounded-lg shadow mx-3"
        >
          <Image source={item.icon}
           style={{
           width: width * 0.15,
           height: width * 0.15,
           borderRadius: 8,
           marginRight: 8,
           }}
           resizeMode="cover" />
          <View className="flex-1">
            <View className="px-2">
            <Text className="text-lg font-semibold text-gray-800 ">{item.name}</Text>
            <Text>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>

      {/* 3. The Heart is OUTSIDE the Link, but positioned on top of it */}
      <TouchableOpacity
        style={{ position: 'absolute', right: 16, top: 1, zIndex: 10 }}
        className="p-1 bg-white rounded-full shadow-sm"
        onPress={() => toggleFavorite(item)} // No stopPropagation needed now!
      >
        <Ionicons
          name={isFav ? "heart" : "heart-outline"}
          size={20}
          color={isFav ? "red" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
}