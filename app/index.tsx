import { Redirect, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useUserContext } from "@/hooks/useUserContext";

export default function Index() {
  const { isLoading, user } = useUserContext();

  if (!isLoading && user) {
    return <Redirect href={"/home"} />;
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex-1 min-h-[85vh] justify-center  items-center px-10 py-2 lg:px-96">
          <Image
            source={images.logo}
            className="w-36 h-20"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="w-full max-w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-white text-3xl text-center font-bold">
              Discover Endless Possibilities with
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-36 h-4 absolute -bottom-2 -right-10 lg:-bottom-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-white mt-7 text-sm text-center font-pregular">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
