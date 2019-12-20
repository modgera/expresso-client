import * as React from 'react';
import withState from '../../hoc/withState';
import Input from '../../View/Input';

const { useState } = React;
const CellNumber: React.FC = () => {
  const props = {
    className: 'cell-number',
    label: 'Cell Number',
  };

  return withState({ ...props })(Input);
};

export default CellNumber;
