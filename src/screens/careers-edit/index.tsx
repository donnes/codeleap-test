import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react-lite';
import CareerForm from '../../components/career-form';

import { Container } from './styles';
import { useStores } from '../../models';

const CareersEdit:React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { careerStore } = useStores();

  const career = route.params?.career;

  const handleOnSave = async (title: string, content: string) => {
    await careerStore.update(career.id, { title, content });
    navigation.goBack();
  };

  return useObserver(() => (
    <Container>
      <CareerForm
        title="Edit item"
        onSave={handleOnSave}
        initialValues={{
          title: career.title,
          content: career.content,
        }}
        submitting={careerStore.submitting}
        cancelable
      />
    </Container>
  ));
};

export default CareersEdit;
