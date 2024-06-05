import React, { useState, useMemo } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  SelectProps,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

export interface MultipleSelectOption {
  value: string | number | readonly string[] | undefined
  label: string;
}

interface SelectComponentProps {
  options: MultipleSelectOption[];
  placeholder?: string;
  multiple?: boolean;
  error?: string;
  onChange?: (value: Array<string | number | readonly string[] | undefined>) => void;
}

const MultipleSelect: React.FC<SelectComponentProps> = ({
  options = [],
  placeholder = "Select option",
  multiple = false,
  error,
  onChange
}, {  value, className, ...props } : SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Array<string | number | readonly string[] | undefined>>(Array.isArray(value) ? value : []);

  const label = useMemo(() => {
    if (Array.isArray(selectedValue)) {
      return options
        .filter((option) => selectedValue.includes(option.value))
        .map((option) => option.label)
        .join(", ");
    }
    const selectedOption = options.find((option) => option.value === selectedValue);
    return selectedOption ? selectedOption.label : "";
  }, [selectedValue, options]);

  const handleChange = (value:  Array<string | number | readonly string[] | undefined>) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Listbox value={selectedValue} multiple={multiple} onChange={handleChange}>
      <div className="relative mt-1">
        <ListboxButton className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{label || placeholder}</span>
          <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon aria-hidden="true" className="w-5 h-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none sm:text-sm">
          {options.map((option) => (
            <ListboxOption key={option.label} value={option.value}>
              {({ active, selected }) => (
                <li
                  className={`${active ? "bg-amber-100 text-amber-900" : "text-gray-900"} relative flex cursor-default select-none py-2 pl-10 pr-4`}
                >
                  <span className={`${selected ? "font-medium" : "font-normal"} block truncate`}>
                    {option.label}
                  </span>
                  {selected ? (
                    <span className="flex absolute inset-y-0 left-0 items-center pl-3 text-amber-600">
                      <CheckIcon aria-hidden="true" className="w-5 h-5" />
                    </span>
                  ) : null}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
        {error && <div className="text-xs text-red-400 mt-1">{error}</div>}
      </div>
    </Listbox>
  );
};

export default MultipleSelect;
