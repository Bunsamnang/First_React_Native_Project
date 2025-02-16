import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import CustomeButton from "../components/CustomButton";
import EmptyState from "../components/EmptyState";
import SearchInput from "../components/SearchInput";
import Trending from "../components/Trending";
import { useAppwriteData } from "@/lib/useAppwriteData";
import { getAllPosts } from "@/lib/appwrite";
import VideoCard from "../components/VideoCard";
import { Models } from "react-native-appwrite";

interface Post extends Models.Document {
  title: string;
  thumbnail: string;
  video: string;
  prompt: string;
  creator: {
    username: string;
    avatar: string;
  };
}

const Home = () => {
  const {
    data: posts,
    isLoading,
    refetch,
  } = useAppwriteData<Post>(getAllPosts);

  console.log(posts);

  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={posts}
        renderItem={({ item }) => <VideoCard video={item} />}
        keyExtractor={(item) => item.$id.toString()}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 gap-10">
            <View className="flex-row justify-between items-start">
              <View className="gap-2">
                <Text className="text-gray-100 text-sm font-pregular">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-psemibold">Nang</Text>
              </View>
              <Image
                source={images.logoSmall}
                className="w-10 h-10"
                resizeMode="contain"
              />
            </View>
            <SearchInput placeholder="Search for a video topic" />

            <View className="w-full flex-1">
              <Text className="text-slate-500 text-base">Latest videos</Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="px-4">
            <EmptyState
              title="No Videos Found"
              subTitle="Be the first to upload a video"
            />
            <CustomeButton
              title="Create video"
              handlePress={() => router.push("/create")}
              isLoading={false}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
