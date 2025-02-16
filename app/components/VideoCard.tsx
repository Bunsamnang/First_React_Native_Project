import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Models } from "react-native-appwrite";
import { Post } from "@/lib/appwrite";
import { icons } from "../../constants";

interface VideoCardProps {
  video: Post;
}

const VideoCard = ({
  video: {
    creator: { username, avatar },
    thumbnail,
    title,
    video,
    prompt,
  },
}: VideoCardProps) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="w-full px-4">
      <View className="flex-row justify-between items-start my-4">
        <View className=" flex-row gap-x-4 items-center">
          <TouchableOpacity>
            <Image
              source={{ uri: avatar }}
              className="w-10 h-10 rounded-md"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <Text className="text-white font-psemibold">{title}</Text>
            <Text className="text-sm text-gray-100 font-pregular">
              {username}
            </Text>
          </View>
        </View>
        <Image
          source={icons.menu}
          className="text-gray-100 w-5 h-5"
          resizeMode="contain"
        />
      </View>

      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-0.5 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
