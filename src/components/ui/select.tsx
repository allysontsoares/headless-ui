import React from 'react';
import { Select as _Select, SelectProps } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string | number | readonly string[] | undefined 
  label: string;
}

interface SimpleSelectProps {
  options: SelectOption[];
}

const Select: React.FC<SimpleSelectProps> = ({options}, {  value, onChange, className, ...props } : SelectProps) => {
  return (
    <div className="relative">
      <_Select
        value={value}
        onChange={() => onChange}
        className={cn(
          'mt-3 block w-full appearance-none rounded-lg border-none bg-white shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          '*:text-black'
        )}
      >
        {options.map(option => (
          <option key={option.value as string | number} value={option.value}>
            {option.label}
          </option>
        ))}
      </_Select>
      <ChevronDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
        aria-hidden="true"
      />
    </div>
  );
};

export default Select;
