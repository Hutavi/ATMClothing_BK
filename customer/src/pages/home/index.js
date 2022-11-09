import React from 'react';
import { useSelector } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/SliderData';

const Home = () => {
  const photo = useSelector((state) => state.photos);
  console.log(photo);

  return (
    <div>
      <Slider data={SliderData} />
    </div>
  );
};

export default Home;
