import * as React from "react"
import { Description, DescriptionProps, Field, FieldProps, Fieldset, FieldsetProps, Input, Label, LabelProps, Legend, LegendProps  } from "@headlessui/react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}





  // Fieldset Component ===============================================================================
  const _Fieldset = ({ className, ...props }: FieldsetProps) => {
    return (
      <Fieldset
        className={cn(
          'space-y-6 rounded-xl bg-white/5 p-4',
       className
        )}
        {...props}
      />
    )
  }
  
  export { _Fieldset as Fieldset }   



  // Legend Component ===============================================================================
  const _Legend = ({ className, ...props }: LegendProps) => {
    return (
      <Legend
        className={cn(
          'text-base/7 font-semibold text-neutral-800',
       className
        )}
        {...props}
      />
    )
  }
  
  export { _Legend as Legend }   
  


  // Field Component ===============================================================================  
  const _Field  = ({ className, ...props }: FieldProps) => (
    <Field className={cn(className)} {...props} />
  )
  
  export { _Field as Field }







  // Input Component ===============================================================================
const _Input = ({ className, ...props }: InputProps) => {
  return (
    <Input
      className={cn(
        'mt-1 block w-full rounded-lg shadow-md border-none bg-white/80 py-1.5 px-3 text-sm/6  text-gray-900 ring-0 ring-inset ring-gray-300 placeholder:text-gray-300  focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300',
     className
      )}
      {...props}
    />
  )
}

export { _Input as Input }






  // Description Component ===============================================================================
  const descriptionVariants = cva(
    "text-base/7 font-semibold text-white"
  )
  
  const _Description  = ({ className, ...props }: DescriptionProps) => (
    <Description  className={cn(descriptionVariants(), className)} {...props} />
  )
  
  export { _Description as Description, descriptionVariants }   
 



  // Label Component ===============================================================================

const _Label = ({ className, ...props }: LabelProps) => {
    return (
      <Label
        className={cn(
          'text-sm/6 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70',
       className
        )}
        {...props}
      />
    )
  }
  
  export { _Label as Label } 