import React, { useState } from 'react';
import { View, Text } from 'react-native';

import CarouselSnap, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';

interface IItem {
  title: string;
  description: string;
  content: string;
}

export interface IProps {
  item: IItem;
}

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const user = [
    {
      title: 'string',
      description: 'string',
      content: 'string',
    },
  ];
  const _renderItem = ({ item }: IProps) => (
    <View>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.description}</Text>
      <Text style={styles.text}>{item.content}</Text>
    </View>
  );

  return (
    <>
      <CarouselSnap
        data={user}
        renderItem={_renderItem}
        sliderWidth={500}
        itemWidth={500}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={user.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerPagination}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

export default Carousel;
