import { useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getAllPosts } from "../repository/postRepository";
import { Link } from "expo-router";
import PostListItem from "../components/PostListItem";
import { ORIGIN } from "../config";

// const bimage = { uri: "/thumbnails/background.png" };
const bimage = { uri: `${ORIGIN}/thumbnails/background.png` };
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Page() {
  const [posts, setPosts] = useState(getAllPosts());
  return (
    <View style={styles.container}>
      <ImageBackground source={bimage} style={styles.image}>
        <View style={styles.main}>
          <FlatList
            data={posts}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => <PostListItem post={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  image: {
    // height: screenHeight,
    // width: screenWidth,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
