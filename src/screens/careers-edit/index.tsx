import React from 'react';
import { useRoute, RouteProp, ParamListBase } from '@react-navigation/native';
import CareerForm from '../../components/career-form';

import { Container } from './styles';
// import { useStores } from '../../models';

type ProfileScreenRouteProp = RouteProp<ParamListBase, 'CareersEdit'>;

const CareersEdit:React.FC = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  // const { careerStore } = useStores();

  const career = route.params?.career;

  return (
    <Container>
      <CareerForm
        title="Edit item"
        onSave={() => null}
        initialValues={{
          title: career.title,
          content: career.content,
        }}
      />
    </Container>
  );
};

export default CareersEdit;
