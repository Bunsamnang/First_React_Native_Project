import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Models,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nang.aora",
  projectId: "67aeb5b1000b488aa409",
  databaseId: "67aeb85b001f1657606c",
  userCollectionId: "67aeb87e003592b105c1",
  videoCollectionId: "67aeb8bb002c46c2d2e7",
  storageId: "67aebafd003a2ab90dc2",
};

const {
  databaseId,
  endpoint,
  platform,
  projectId,
  storageId,
  userCollectionId,
  videoCollectionId,
} = appwriteConfig;

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setPlatform(platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username?: string
) => {
  try {
    //create new account (auth)
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      console.log("Error: User creation failed at the account level.");
      throw new Error("Account creation failed.");
    }

    const avatarUrl = avatar.getInitials(newAccount.name);

    await signin(email, password);

    // store the accountId, avatar, username, email to users collection
    const newUser = await database.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        avatar: avatarUrl,
        email,
        username,
      }
    );
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const signin = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) {
      console.log("Error: Session creation failed");
      throw new Error("Session creation failed.");
    }

    console.log("Session created:", session);

    return session;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) {
      throw Error;
    }

    const currentUser = await database.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0] as User;
  } catch (error) {
    throw error;
  }
};

export interface Post extends Models.Document {
  title: string;
  thumbnail: string;
  video: string;
  prompt: string;
  creator: {
    username: string;
    avatar: string;
  };
}

export interface User extends Models.Document {
  email: string;
  username: string;
  avatar: string;
}

export const getAllPosts = async () => {
  try {
    const result = await database.listDocuments(databaseId, videoCollectionId);

    return result.documents as Post[];
  } catch (error) {
    throw error;
  }
};

export const getLatestPosts = async () => {
  try {
    const result = await database.listDocuments(databaseId, videoCollectionId, [
      Query.orderDesc("$createdAt"),
      Query.limit(7),
    ]);

    return result.documents as Post[];
  } catch (error) {
    throw error;
  }
};
