import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat
} from "react-native-reanimated";

import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import MenuItem from "@/components/MenuItem";
import { PROFILE_MENU } from "@/assets/images/categories/asset";
import { Ionicons } from "@expo/vector-icons";

export default function Explore() {

 const x = useSharedValue(0);

  useEffect(() => {
    x.value = withRepeat(
      withTiming(200, { duration: 2000 }),
      -1,
      true
    );
  }, []);

  

  const [activeSection, setActiveSection] = useState(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const toggleSection = (title) => {
    setActiveSection((prev) => (prev === title ? null : title));
  };

  // 🔍 SEARCH FUNCTION
  const searchItems = (text) => {
    const query = text.toLowerCase().trim();

    const allItems = PROFILE_MENU.flatMap((section) =>
      section.data.map((item) => ({
        ...item,
        sectionTitle: section.title,
        sectionId: section.id,
      }))
    );

    return allItems.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  };

  // ⚡ LIVE SEARCH
  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      setResults(searchItems(search));
    }, 300); // smooth typing

    return () => clearTimeout(timeout);
  }, [search]);

  // 📦 GROUP RESULTS (Amazon style)
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.sectionTitle]) {
      acc[item.sectionTitle] = [];
    }
    acc[item.sectionTitle].push(item);
    return acc;
  }, {});

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-light">
      <Header title="Explore" showBack={true} />

      {/* 🔍 SEARCH BAR */}
      <View className="bg-white flex-row rounded-lg m-4 px-2 items-center gap-1">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search culture, history, food..."
          value={search}
          onChangeText={setSearch}
          className="w-full p-2 rounded-lg focus:border-secondary focus:ring-1 focus:ring-primary"
        />
      </View>

      {/* 🔎 SEARCH RESULTS */}
      {search ? (
        <ScrollView className="px-4">

          {results.length === 0 ? (
            <Text className="text-center mt-5 text-gray-500">
              No results found 😕
            </Text>
          ) : (
            Object.keys(groupedResults).map((section) => (
              <View key={section} className="mb-5">

                {/* Section Title */}
                <Text className="text-lg font-bold mb-2">
                  {section}
                </Text>

                {/* Items */}
                {groupedResults[section].map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="flex-row items-center bg-white p-3 mb-2 rounded-lg"
                  >
                    <Image
                      source={item.icon}
                      style={{ width: 50, height: 50, borderRadius: 8 }}
                    />

                    <View className="ml-3">
                      <Text className="font-semibold">
                        {item.name}
                      </Text>
                      <Text className="text-xs text-gray-500">
                        {item.sectionTitle}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))
          )}
        </ScrollView>
      ) : (
        <>
          {/* 🧾 INTRO TEXT */}
          <View className="px-4 py-2">
            <Text className="text-lg font-semibold text-gray-800">
              Dive into Ethiopia's rich history, culture, and traditions.
            </Text>
          </View>

          {/* 📂 NORMAL SECTION LIST */}
          <SectionList
            sections={PROFILE_MENU}
            keyExtractor={(item, index) => item.name + index}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 100,
              minHeight: "100%",
            }}

            renderSectionHeader={({ section }) => (
              <SectionHeader
                title={section.title}
                isOpen={activeSection === section.title}
                onPress={() => toggleSection(section.title)}
              />
            )}

            renderItem={({ item, section }) => {
              if (!activeSection || activeSection !== section.title)
                return null;

              return <MenuItem item={item} />;
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
}