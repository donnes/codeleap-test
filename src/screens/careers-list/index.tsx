import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import CareerForm from '../../components/career-form';
import CareerListItem from '../../components/career-list-item';

import { Container } from './styles';
import { useStores } from '../../models';

const CareersList:React.FC = () => {
  const { careerStore } = useStores();
  const { careers } = careerStore;

  useEffect(() => {
    careerStore.getAll();
  }, []);

  return useObserver(() => (
    <Container>
      <CareerForm title="What’s on your mind?" onSave={() => null} />

      {careers && careers.map((career) => (
        <CareerListItem career={career} />
      ))}
    </Container>
  ));
};

export default CareersList;
