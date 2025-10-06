// components/common/InputField.jsx
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

export default function InputField({
  name,
  label,
  rules,
  placeholder,
  type = 'text',
  className = '',
  ...rest
}) {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        {...rest}
        className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
