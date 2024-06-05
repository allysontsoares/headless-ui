"use client";

import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Fieldset, Input, Label, Legend, Field} from "@/components/ui/form-primitives";
import MultipleSelect, { MultipleSelectOption } from "@/components/ui/multiple-select";
import Select, { SelectOption } from "@/components/ui/select";

import { useState } from "react";




const people: SelectOption[] = [
  { value: '1', label: "Wade Cooper" },
  { value: '2', label: "Arlene Mccoy" },
  { value: '3', label: "Devon Webb" },
  { value: '4', label: "Tom Cook" },
  { value: '5', label: "Tanya Fox" },
  { value: '6', label: "Hellen Schmidt" },
];

const roles: MultipleSelectOption[] = [
  { value: '1', label: "Marketing" },
  { value: '2', label: "Front desk" },
  { value: '3', label: "Support" },
];

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }


  const [form, setForm] = useState<{ person_id: number | null; role_ids: number[] }>({
    person_id: null,
    role_ids: [],
  });

  const handlePersonChange = (value: number | null) => {
    setForm((prevForm) => ({
      ...prevForm,
      person_id: value,
    }));
  };

  const handleRolesChange = (value: number[]) => {
    setForm((prevForm) => ({
      ...prevForm,
      role_ids: value,
    }));
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-4 p-24 bg-neutral-100">
   <div>
      <DialogTrigger onOpen={open} />
      <DialogOverlay isOpen={isOpen} onClose={close}>
        <DialogContent side="bottom">
          <DialogHeader>
            <DialogTitle>Payment successful</DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-sm/6 text-white/50">
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </p>
          <DialogFooter>
            <Button
               onClick={close}
            >
              Got it, thanks!
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </div>

    <div className="w-full max-w-sm">
      <form action="#" className="flex flex-col space-y-6">
       

<Fieldset>
        <Legend>Shipping details 256</Legend>
        <Field>
          <Label>Street address</Label>
          <Input
            placeholder="House number and street name"
          />
        </Field>

      

<Select
        options={people}
        value={form.person_id}
        onChange={(value) => handlePersonChange(value)}
      />

        <MultipleSelect
          placeholder="Select roles"
          value={form.role_ids}
          options={roles}
          multiple
          onChange={(value) => handleRolesChange(value)}
        />
      </Fieldset>
      </form>
    </div>

    </main>
  );
}
