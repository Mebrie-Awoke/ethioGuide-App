import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native-gesture-handler';
import Ionicons from "@expo/vector-icons/build/Ionicons";

type HeaderProps = {
  title?: string;
  showBack?: boolean;
}

export default function Header({title, showBack}: HeaderProps) {
  const router = useRouter();
  return (
    <View className="bg-blue-900 h-16 flex-row space-x-24 items-center px-5">
      {showBack && (
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      )}
        {
          title && (
            <Text className="text-2xl font-bold text-white">{title}</Text>
          )
        }
    </View>
  )
}