import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Variants
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-neutral-100 dark:bg-neutral-800 shadow-lg transition ease-in-out data-[entering]:duration-500 data-[exiting]:duration-300 data-[entering]:animate-in data-[exiting]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[entering]:slide-in-from-top data-[exiting]:slide-out-to-top",
        bottom: "inset-x-0 bottom-0 border-t data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[entering]:slide-in-from-left data-[exiting]:slide-out-to-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[entering]:slide-in-from-right data-[exiting]:slide-out-to-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: 'bottom',
    },
  }
);

// DialogTrigger Component
const DialogTrigger = ({ onOpen }) => (
  <Button
    onClick={onOpen}
    className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
  >
    Open dialog
  </Button>
);

// DialogOverlay Component
const DialogOverlay = ({ isOpen, onClose, children }) => (
  <Transition appear show={isOpen}>
    <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {children}
        </div>
      </div>
    </Dialog>
  </Transition>
);

// DialogContent Component
const DialogContent = ({ children, className = "", side }) => (
  <TransitionChild
    enter="ease-out duration-300"
    enterFrom="opacity-0 transform-[scale(95%)]"
    enterTo="opacity-100 transform-[scale(100%)]"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 transform-[scale(100%)]"
    leaveTo="opacity-0 transform-[scale(95%)]"
  >
    <DialogPanel className={cn(sheetVariants({ side }), className)}>
      {children}
    </DialogPanel>
  </TransitionChild>
);

// DialogHeader Component
const DialogHeader = ({ className = "", children }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}>
    {children}
  </div>
);

// DialogFooter Component
const DialogFooter = ({ className = "", children }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}>
    {children}
  </div>
);

// DialogTitle Component
const DialogTitleComponent = ({ className = "", children }) => (
  <DialogTitle as="h3" className={cn("font-semibold text-lg leading-none tracking-tight", className)}>
    {children}
  </DialogTitle>
);



// Export components
export {
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitleComponent as DialogTitle,
};


