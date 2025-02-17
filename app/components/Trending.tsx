import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Post } from "@/lib/appwrite";
import { icons } from "@/constants";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";

interface TrendingProps {
  posts: Post[];
}

const TrendingItem = ({ item }: { item: Post }) => {
  const [play, setPlay] = useState(false);

  // Initialize video player
  const player = useVideoPlayer(videoSource);

  return (
    <View className="mr-5 my-5">
      {play ? (
        <View className="relative">
          <VideoView
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            style={{ width: 208, height: 288 }} // Explicit width and height for VideoView
          />
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setPlay(true); // Show the video player
            player.play(); // Start playing the video
          }}
          className="justify-center items-center relative"
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 overflow-hidden rounded-xl"
            resizeMode="cover"
          >
            <Image
              source={icons.play}
              className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </ImageBackground>
        </TouchableOpacity>
      )}
    </View>
  );
};

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Trending = ({ posts }: TrendingProps) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <TrendingItem item={item} />}
      keyExtractor={(item) => item.$id.toString()}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
