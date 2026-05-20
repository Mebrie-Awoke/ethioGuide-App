import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { IMAGES } from "@/assets/asset";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();

  // Categories data matching the mockup Screen 1
  const exploreCategories = [
    {
      id: "culture",
      title: "Culture",
      count: "52 Articles",
      img: IMAGES.timket,
      targetSection: "Festivals",
    },
    {
      id: "history",
      title: "History",
      count: "38 Articles",
      img: IMAGES.aksum,
      targetSection: "History",
    },
    {
      id: "traditions",
      title: "Traditions",
      count: "27 Articles",
      img: IMAGES.habesha,
      targetSection: "Traditional Clothing",
    },
    {
      id: "beliefs",
      title: "Beliefs",
      count: "19 Articles",
      img: IMAGES.orthodox,
      targetSection: "Religion",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F7F3]" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        
        {/* --- PREMIUM HERO SUNSET HEADER --- */}
        <View className="px-4 pt-2 pb-6">
          <ImageBackground
            source={IMAGES.lalibela}
            style={{ height: height * 0.3 }}
            className="w-full rounded-[28px] overflow-hidden justify-between p-5"
            imageStyle={{ borderRadius: 28 }}
          >
            {/* Dark Orange/Sunset Warm Vignette Overlay */}
            <View className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: "rgba(90, 48, 12, 0.45)" }} />

            {/* Header Icons Row */}
            <View className="flex-row justify-between items-center z-10">
              <TouchableOpacity 
                className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md items-center justify-center border border-white/10"
                onPress={() => router.push("/settings")}
              >
                <Ionicons name="menu-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md items-center justify-center border border-white/10"
                onPress={() => router.push("/settings")}
              >
                <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
                {/* Active Notification Dot */}
                <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-[#5A300C]" />
              </TouchableOpacity>
            </View>

            {/* Welcome Typography */}
            <View className="mb-8 z-10">
              <Text className="text-amber-100 text-sm font-semibold tracking-wider uppercase mb-1">
                Welcome to
              </Text>
              <Text className="text-white text-4xl font-extrabold tracking-tight" style={{ fontFamily: "System" }}>
                Ethiopian
              </Text>
            </View>
          </ImageBackground>

          {/* --- SEARCH BAR (OVERLAPPING PILL CARD) --- */}
          <View className="px-4 mt-[-26px] z-20">
            <View 
              className="flex-row bg-white rounded-full items-center px-4 py-3 shadow-md border border-gray-100"
              style={{ elevation: 4 }}
            >
              <Ionicons name="search" size={20} color="#9CA3AF" />
              <TextInput
                placeholder="Search topics, ask or explore..."
                className="flex-1 ml-2 text-[15px] text-gray-800 h-10"
                placeholderTextColor="#9CA3AF"
                onFocus={() => router.push("/explore")}
              />
              <TouchableOpacity onPress={() => router.push("/chat")}>
                <Ionicons name="mic" size={20} color="#0B6B43" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* --- EXPLORE CATEGORIES 2x2 GRID --- */}
        <View className="px-4 mb-6">
          <View className="flex-row justify-between items-center mb-3.5 px-1">
            <Text className="text-gray-900 text-lg font-bold">Explore Categories</Text>
            <TouchableOpacity onPress={() => router.push("/explore")}>
              <Text className="text-[#0B6B43] text-sm font-semibold">See All</Text>
            </TouchableOpacity>
          </View>

          {/* 2x2 Category Grid */}
          <View className="flex-row flex-wrap justify-between">
            {exploreCategories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                activeOpacity={0.85}
                onPress={() => router.push("/explore")}
                className="w-[48%] h-28 rounded-[20px] overflow-hidden mb-4 shadow-sm"
                style={{ elevation: 2 }}
              >
                <ImageBackground
                  source={cat.img}
                  className="w-full h-full justify-end p-3.5"
                >
                  {/* Category Card Contrast Dark Overlay */}
                  <View className="absolute inset-0 bg-black/35" style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.38)" }} />
                  
                  {/* Category Labels */}
                  <View className="z-10">
                    <Text className="text-white text-base font-bold tracking-wide">
                      {cat.title}
                    </Text>
                    <Text className="text-gray-200 text-[11px] font-medium mt-0.5 opacity-90">
                      {cat.count}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* --- ASK ETHIOPIAN AI CARD --- */}
        <View className="px-4 mb-6">
          <View 
            className="rounded-[20px] p-5 flex-row items-center justify-between shadow-sm"
            style={{ backgroundColor: "#0F6B50" }}
          >
            {/* Promotional Content */}
            <View className="flex-1 pr-4">
              <Text className="text-white text-lg font-extrabold mb-1">
                Ask Ethiopian AI
              </Text>
              <Text className="text-emerald-100 text-xs font-medium mb-4 leading-4 opacity-80">
                Get instant answers about Ethiopia
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/chat")}
                className="bg-white rounded-full py-2.5 px-5 self-start shadow-sm"
              >
                <Text className="text-[#061A12] text-xs font-bold uppercase tracking-wider">
                  Start Chat
                </Text>
              </TouchableOpacity>
            </View>

            {/* Cute 3D Tibeb Robot Helper Image */}
            <Image
              source={require("../../assets/images/tibeb_robot.png")}
              className="w-24 h-24"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* --- CONTINUE LEARNING SECTION (FLAGSHIP DETAILS CARD) --- */}
        <View className="px-4 pb-10">
          <View className="flex-row justify-between items-center mb-3.5 px-1">
            <Text className="text-gray-900 text-lg font-bold">Continue Learning</Text>
            <TouchableOpacity onPress={() => router.push("/explore")}>
              <Text className="text-gray-400 text-sm font-semibold">Recently Viewed</Text>
            </TouchableOpacity>
          </View>

          {/* Beautiful Coffee Ceremony Details Card */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => router.push("/details/coffee")}
            className="bg-white rounded-3xl p-3 flex-row items-center border border-gray-100 shadow-sm"
            style={{ elevation: 1 }}
          >
            <Image
              source={IMAGES.coffee}
              className="w-20 h-20 rounded-2xl"
              resizeMode="cover"
            />
            
            <View className="flex-1 ml-4 pr-1">
              <Text className="text-gray-900 text-base font-bold mb-1">
                The Coffee Ceremony
              </Text>
              <Text className="text-gray-500 text-xs leading-4" numberOfLines={2}>
                A symbol of hospitality and unity. Green coffee beans are roasted and brewed in a jebena.
              </Text>
            </View>

            <TouchableOpacity 
              className="p-2 mr-1"
              onPress={() => router.push("/favorite")}
            >
              <Ionicons name="bookmark-outline" size={20} color="#6B7280" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
