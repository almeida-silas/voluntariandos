import React from 'react';
import { View, Text } from 'react-native';

import CarouselSnap from 'react-native-snap-carousel';

interface IProps {
  Data: [];
}

const Carousel: React.FC<IProps> = ({ Data }) => {
  const _renderItem = () => (
    <View>
      <Text />
    </View>
  );

  return (
    <CarouselSnap
      data={Data}
      ref={() => {}}
      renderItem={_renderItem}
      sliderWidth={500}
      itemWidth={500}
    />
  );
};

export default Carousel;
