import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Controller, useForm } from "react-hook-form";
import FormField from "../components/FormField";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { SignUpCredential, signupSchema } from "@/auth/auth.model";
import CustomeButton from "../components/CustomButton";
import { createUser } from "@/lib/appwrite";
import { AppwriteException } from "react-native-appwrite";
import { router } from "expo-router";
import { useUserContext } from "@/hooks/useUserContext";
const SignUp = () => {
  const {
    control,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<SignUpCredential>({
    resolver: zodResolver(signupSchema),
  });

  const { setUser } = useUserContext();

  const onSubmit = async (formData: SignUpCredential) => {
    console.log(formData);

    try {
      const result = await createUser(
        formData.email,
        formData.password,
        formData.username
      );

      setUser(result);

      router.replace("/home");
    } catch (error) {
      console.log("Caught error:", error);
      alert("Erorr");

      if (error instanceof AppwriteException) {
        Alert.alert("Error", error.message || "An Appwrite error occurred.");
      } else {
        Alert.alert("Error", "Unknown error");
      }
    }
  };

  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center items-center py-4 px-10">
          <View className="w-full">
            <View className="items-center">
              <Image
                source={images.logo}
                className="w-32 h-9"
                resizeMode="contain"
              />

              <Text className="text-gray-100 text-3xl my-10">
                Sign up to Aora
              </Text>
            </View>

            <View className="gap-3">
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Username"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your username"
                  />
                )}
              />
              {errors.username && (
                <Text className="text-red-500">{errors.username.message}</Text>
              )}
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormField
                    title="Email"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your email"
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
                    title="Password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Enter your password"
                  />
                )}
              />
              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}
              <CustomeButton
                isLoading={isSubmitting}
                title="Sign up"
                handlePress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
