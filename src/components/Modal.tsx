import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useRef } from "react";

type ConfirmButtonColor = "success" | "red" | "primary";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cancelButtonText?: string;
  confirmButtonText?: string;
  confirmButtonColor?: ConfirmButtonColor;
  title?: string;
  children: React.ReactNode;
}
export default function Modal({
  open,
  setOpen,
  cancelButtonText = "Cancel",
  confirmButtonText = "Confirm",
  confirmButtonColor = "primary",
  title = "Modal",
  children,
}: Props) {
  const cancelButtonRef = useRef(null);

  const getConfirmButtonStyle = (confirmButtonColor: ConfirmButtonColor) => {
    switch (confirmButtonColor) {
      case "success":
        return "bg-green-9 hover:bg-green-8";
      case "primary":
        return "bg-indigo-9 hover:bg-indigo-8";
      case "red":
        return "bg-red-9 hover:bg-red-8";
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blackA-8 bg-opacity-100 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-3 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                <div className="bg-slate-3 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex flex-1 w-full">
                    <div className="text-center sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-slate-12"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="flex">{children}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-slate-12 shadow-sm  sm:ml-3 sm:w-auto ${getConfirmButtonStyle(
                      confirmButtonColor
                    )}`}
                    onClick={() => setOpen(false)}
                  >
                    {confirmButtonText}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-slate-3 px-3 py-2 text-sm font-semibold text-slate-12 shadow-sm ring-1 ring-inset ring-slate-4 hover:bg-slate-4 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    {cancelButtonText}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
