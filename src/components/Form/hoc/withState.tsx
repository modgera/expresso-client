import * as React from 'react';

const { useState } = React;
interface StateProps {
  className: string;
  label: string;
}

interface InputProps {
  value: string | number;
  label: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
}

type ViewType = React.ComponentType<InputProps>;

interface ViewFunction {
  (View: ViewType): JSX.Element;
}


const withState = (props: StateProps): ViewFunction => (View: ViewType): JSX.Element => {
  const { className, label } = props;
  const [fieldState, setFieldState] = useState('');
  const onChangeHandler = (e): void => {
    setFieldState(e.target.value);
  };
  return <View handler={onChangeHandler} value={fieldState} className={className} label={label} />;
};

export default withState;
