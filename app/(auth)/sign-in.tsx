import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Controller, useForm } from "react-hook-form";
import FormField from "../components/FormField";
import { zodResolver } from "./../../node_modules/@hookform/resolvers/zod/src/zod";
import { SignInCredential, signinSchema } from "@/auth/auth.model";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import { getCurrentUser, signin } from "@/lib/appwrite";
import { AppwriteException } from "react-native-appwrite";
import { useUserContext } from "@/hooks/useUserContext";
const SignIn = () => {
  const {
    control,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<SignInCredential>({
    resolver: zodResolver(signinSchema),
  });

  const { setUser } = useUserContext();

  const onSubmit = async (formData: SignInCredential) => {
    try {
      // this sign in returns session, not user
      await signin(formData.email, formData.password);

      const result = await getCurrentUser();

      setUser(result);

      router.replace("/home");
    } catch (error) {
      console.log("Caught error:", error);

      if (error instanceof AppwriteException) {
        Alert.alert("Error", error.message || "An Appwrite error occurred.");
        alert(error.message);
      } else {
        Alert.alert("Error", "Unknown error");
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] items-center justify-center px-10 py-3">
          <View className="w-full ">
            <View className="items-center">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-32 h-9"
              />
              <Text className="text-white text-3xl my-10 font-pbold font-bold ">
                Log in to Aora
              </Text>
            </View>

            <View className="gap-10">
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Email"
                    placeholder="Enter your email"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <Text className="text-red-500">{errors.email.message}</Text>
              )}

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    onBlur={onBlur}
                    title="Password"
                    placeholder="Enter your password"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}

              <CustomButton
                title="Submit"
                handlePress={handleSubmit(onSubmit)}
                isLoading={isSubmitting}
              />
            </View>

            <View className="flex-row justify-center items-center mt-5 gap-2">
              <Text className="text-gray-100 text-lg">
                Don't have an account?
              </Text>
              <Link
                href={"/sign-up"}
                className="text-lg text-secondary font-psemibold underline"
              >
                Sign up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
