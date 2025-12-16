import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CATEGORIES = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
  "Vegan",
  "Seafood",
  "Chicken",
  "Drinks",
  "My Food",
];

const DUMMY_RECIPES = [
  {
    id: "1",
    name: "Pancakes",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    ingredients: ["Flour", "Eggs", "Milk"],
    instructions: ["Mix ingredients", "Cook on pan"],
    prepTime: "20 mins",
    servings: 2,
    calories: 300,
    difficulty: "Easy",
  },
  {
    id: "2",
    name: "Chicken Curry",
    category: "Dinner",
    image: "https://via.placeholder.com/150",
    ingredients: ["Chicken", "Spices"],
    instructions: ["Cook chicken", "Add spices"],
    prepTime: "40 mins",
    servings: 4,
    calories: 500,
    difficulty: "Medium",
  },
];

export default function HomeScreen({
  navigation,
  favorites,
  setFavorites,
  myRecipes,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const allRecipes = [...DUMMY_RECIPES, ...myRecipes];

  const filteredRecipes =
    selectedCategory === "My Food"
      ? myRecipes
      : allRecipes.filter((r) => r.category === selectedCategory);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={styles.category}
            onPress={() => {
              if (cat === "My Food") {
                navigation.navigate("MyRecipes");
              } else {
                setSelectedCategory(cat);
              }
            }}
          >
            <Text>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Details", { recipe: item })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Ionicons
                name={
                  favorites.includes(item.id)
                    ? "heart"
                    : "heart-outline"
                }
                size={24}
                color="red"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  category: {
    padding: 10,
    backgroundColor: "#eee",
    marginRight: 10,
    borderRadius: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  image: { width: 60, height: 60, marginRight: 10 },
  title: { fontWeight: "bold" },
});
