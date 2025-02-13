import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Controller, useForm } from "react-hook-form";
import FormField from "../components/FormField";
import { zodResolver } from "./../../node_modules/@hookform/resolvers/zod/src/zod";
import { SignInCredential, signinSchema } from "@/auth/auth.model";
import CustomButton from "../components/CustomButton";
const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredential>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (formData: SignInCredential) => {
    console.log(formData);
    alert("You submitted");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex-1 min-h-[85vh] items-center justify-center py-5 px-3">
          <View className="h-full w-full  py-4 px-6 ">
            <View className="items-center">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-[118px] h-[35px]"
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
                textStyle=""
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
