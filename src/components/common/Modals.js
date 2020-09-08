import React from 'react';
import { View } from 'react-native';

import ErrorModal from './ErrorModal';
import OperationModal from './OperationModal';

export default () => (
  <View>
    <OperationModal />
    <ErrorModal />
  </View>
);
