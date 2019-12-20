import * as React from 'react';

interface InputProps {
  value: string | number;
  label: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    value, label, handler, className,
  } = props;
  return (
    <label>
      {label}
      <input type="text" onChange={handler} value={value} className={className} />
    </label>
  );
};

export default Input;
