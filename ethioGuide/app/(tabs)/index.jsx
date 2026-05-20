import { View, Text,  Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Image, } from "react-native";
import CategoryImages from '@/assets/images/categories';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import {categories} from "@/constants/data";




export default function HomeScreen() {
  const router = useRouter();
  

  return (
    <SafeAreaView className="bg-light" edges={['top']}>
    <ScrollView showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      
        <View className="flex-1 bg-ethiopia-green p-7 rounded-lg mt-0 mb-6">
          <View className="flex-1 jusitfy-between gap-6 items-center flex-row ml-4">
             <Image source={CategoryImages.flag} className="w-16 h-16 mb-4" />
              <View className="align-center justify-center gap-1 mt-2 mb-4">
                 <Text className="text-white font-bold text-lg">Ethiopia Knowledge HUB</Text>
                  <Text className="text-white">
                  Explore Ethiopia with AI assistance
                  </Text>
              </View>
          </View>
        </View>
       
      

      {/* AI Chat Card */}

      <View className="flex-1 bg-light">
        <View className="justify-center items-center gap-1">
        <h2 className="font-bold text-2xl text-blue-800 underline underline-offset-8">Wellcome to ethioGuide AI!</h2>
        <h4 className="font-bold text-[#0A3D62] mb-4"> 
          Explore Ethiopia's history, culture.</h4>
        </View>
      </View>
     
         <Pressable onPress={()=>router.push('/chat')}
         className=" flex-row bg-white p-1 rounded-lg mt-4 mb-6 m-8 px-3 items-center gap-1">
          <Ionicons name="search" size={20} color="gray" />
           <Text className="flex-1 ml-2 w-full h-full p-2 text-gray-500">
            Ask me anything about Ethiopia...</Text>
         </Pressable>



      {/* Categories */}
      <View className="flex-1 bg-white p-2 my-2 mx-6 rounded-lg border border-gray-300 " >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-4">
          {categories.map((category) => (
            <Pressable key={category.id} onPress={()=>router.push('/explore')} 
               className=" p-2 rounded-lg items-center gap-2 w-20">
              <Ionicons name={category.icon} size={24} color="blue" />
              <Text className="text-blue-800 font-bold">{category.title}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* button  */}

       <Pressable onPress={()=>router.push('/chat')}
         className="bg-blue-800 justify-center flex-row py-2 mx-20 mt-10 rounded-lg gap-2" >
          <Ionicons name="chatbubble" size={26} color='white'/>
          <Text className="text-white text-lg">Ask AI Chat</Text>
       </Pressable>
      

    </ScrollView>
    </SafeAreaView>
  );
}

