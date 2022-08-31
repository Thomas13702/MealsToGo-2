import React, { useContext, useState, useEffect } from "react";
import { ScrollView, Keyboard } from "react-native";
import { List } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { CreditCardInput } from "../components/credit-card.component";

import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, removeFromCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [keyboardShow, setKeyboardShow] = useState();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    if (!cart.length || !restaurant) {
      return (
        <SafeArea>
          <CartIconContainer>
            <CartIcon icon="cart-off" />
            <Text>Your cart is empty</Text>
          </CartIconContainer>
        </SafeArea>
      );
    }
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeArea>
      {/* {!keyboardShow && <RestaurantInfoCard restaurant={restaurant} />} */}
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - $${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text>Total: ${sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="left" size="medium">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>

        <Spacer position="top" size="xxl" />

        <PayButton
          icon="cash"
          mode="contained"
          onPress={() => console.log("success")}
        >
          Pay
        </PayButton>

        <Spacer position="top" size="large">
          <ClearButton
            icon="cart-off"
            mode="contained"
            onPress={removeFromCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};

//move NameInput outside of scroll view
