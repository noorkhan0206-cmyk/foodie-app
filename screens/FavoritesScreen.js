import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function FavoritesScreen({ favorites, myRecipes, navigation }) {
  const favoriteRecipes = myRecipes.filter((r) =>
    favorites.includes(r.id)
  );

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { recipe: item })
            }
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
