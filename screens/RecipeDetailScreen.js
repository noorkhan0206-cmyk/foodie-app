import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>

      <Text>Prep Time: {recipe.prepTime}</Text>
      <Text>Servings: {recipe.servings}</Text>
      <Text>Calories: {recipe.calories}</Text>
      <Text>Difficulty: {recipe.difficulty}</Text>

      <Text style={styles.heading}>Ingredients</Text>
      {recipe.ingredients.map((item, i) => (
        <Text key={i}>• {item}</Text>
      ))}

      <Text style={styles.heading}>Instructions</Text>
      {recipe.instructions.map((step, i) => (
        <Text key={i}>{i + 1}. {step}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  image: { width: "100%", height: 200, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  heading: { marginTop: 15, fontWeight: "bold" },
});
