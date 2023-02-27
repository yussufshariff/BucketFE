import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import comments from "../data/comments";
import { useContext } from 'react'
import UserContext from "../Contexts/userContext";

const CarouselCards = () => {
  const loggedInUser = useContext(UserContext)
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Text style={styles.title}>Pyramids of Giza</Text>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        activeSlideAlignment="start"
        ref={isCarousel}
        data={comments}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        inactiveSlideShift={0}
      />
      <Pagination
        dotsLength={comments.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  box: {
    color: "#1314",
  },
});

export default CarouselCards;
