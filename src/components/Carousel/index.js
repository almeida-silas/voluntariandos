import React, { useState } from 'react';

import { View } from 'react-native';
import { Paragraph, Caption, Title } from 'react-native-paper';
import CarouselSnap, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';

export default function Carousel({ itens = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({ item }) => (
    <View style={styles.container}>
      <Title style={styles.title}>{item.title}</Title>
      <Paragraph style={styles.paragraph}>{item.description}</Paragraph>
      <Caption style={styles.caption}>{item.content}</Caption>
    </View>
  );

  return (
    <>
      <CarouselSnap
        data={itens}
        sliderWidth={500}
        itemWidth={500}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        layout="stack"
        layoutCardOffset={itens.length}
      />

      <Pagination
        dotsLength={itens.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerPagination}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
}
