import React, { useState } from "react";
import { View, TextInput, Button, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function AddRecipeScreen({ navigation, setMyRecipes }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveRecipe = () => {
    setMyRecipes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        category: "My Food",
        image: image || "https://via.placeholder.com/150",
        ingredients: ingredients.split(","),
        instructions: instructions.split("."),
        prepTime: "N/A",
        servings: 1,
        calories: "N/A",
        difficulty: "Easy",
      },
    ]);
    navigation.goBack();
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <TextInput placeholder="Recipe Name" onChangeText={setName} />
      <Button title="Upload Image" onPress={pickImage} />
      <TextInput
        placeholder="Ingredients (comma separated)"
        onChangeText={setIngredients}
      />
      <TextInput
        placeholder="Instructions (dot separated)"
        onChangeText={setInstructions}
      />
      <Button title="Save Recipe" onPress={saveRecipe} />
    </ScrollView>
  );
}
