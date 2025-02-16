import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { AppwriteException, Models } from "react-native-appwrite";

export const useAppwriteData = <T>(fn: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);

    try {
      const res = await fn();
      setData(res);
    } catch (error) {
      if (error instanceof AppwriteException) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refetch = () => fetchPosts();

  return { data, isLoading, refetch };
};
