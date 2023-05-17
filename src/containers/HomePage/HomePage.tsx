import Header from 'containers/Header/Header';
import { FC } from 'react';
import { View } from 'wiloke-react-core';

const HomePage: FC = () => {
  return (
    <View>
      <Header />
      <View tagName="main"></View>
    </View>
  );
};

export default HomePage;
