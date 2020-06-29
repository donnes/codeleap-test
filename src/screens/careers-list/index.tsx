import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import CareerForm from '../../components/career-form';
import CareerListItem from '../../components/career-list-item';

import { Container } from './styles';
import { useStores } from '../../models';
import { CareerSnapshot } from '../../models/career';

const CareersList:React.FC = () => {
  const { careerStore } = useStores();

  useEffect(() => {
    careerStore.getAll();
  }, []);

  return useObserver(() => {
    const { careers, fetching, submitting } = careerStore;

        <CareerForm
          title="What’s on your mind?"
          onSave={(title, content) => careerStore.create({ title, content })}
          submitting={submitting}
        />

        {careers.map((career: CareerSnapshot) => (
          <CareerListItem key={String(career.id)} career={career} />
      ))}
    </Container>
    );
  });
};

export default CareersList;
