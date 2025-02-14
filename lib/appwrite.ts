import { Account, Avatars, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nang.aora",
  projectId: "67aeb5b1000b488aa409",
  databaseId: "67aeb85b001f1657606c",
  userCollectionId: "67aeb87e003592b105c1",
  videoCollectionId: "67aeb8bb002c46c2d2e7",
  storageId: "67aebafd003a2ab90dc2",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);

export const createUser = async (
  email: string,
  password: string,
  name?: string
) => {
  try {
    const newUser = await account.create(ID.unique(), email, password, name);

    if (!newUser) throw Error;

    const avatarUrl = await avatar.getInitials(newUser.name);
  } catch (error) {
    console.log(error);
    throw new Error("Unknown error");
  }
};
