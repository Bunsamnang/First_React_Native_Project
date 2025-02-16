import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Post {
  id: number;
}

interface TrendingProps {
  posts: Post[];
}

const Trending = ({ posts }: TrendingProps) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
      keyExtractor={(item) => item.id.toString()}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({});
