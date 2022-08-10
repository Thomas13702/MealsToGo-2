import React, { useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";

import { Spacer } from "../../../components/spacer/spacer.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => {
            // console.log(item);
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetail", { restaurant: item });
                }}
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <NoFavouritesArea>
          <Text center>No favourites yet</Text>
        </NoFavouritesArea>
      )}
    </SafeArea>
  );
};
