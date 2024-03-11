'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { createContext, useContext, useState } from "react";


/**
 * @typedef {Object} Alert
 * @property {string} title
 * @property {string} description
 * @property {string} action
 * @property {string} cancel
 * @property {function} onCancel
 * @property {function} onConfirm
 */

/**
 * @type {React.Context<{ fire: Promise }>}
 */
export const AlertContext = createContext(undefined);

export const useAlertProvider = () => {
  const context = useContext(AlertContext);
  return context.fire;
}

export const AlertProvider = ({ children }) => {
  const [ open, setOpen ] = useState();
  const [alert, setAlert] = useState();
  const cb = React.useRef();

  const fire = (alert) => {
    return new Promise((resolve, reject) => {
      cb.current = {
        resolve,
        reject
      }
      setAlert(alert);
      setOpen(true);
    })
  }

  const close = () => {
    setOpen(false);
    setAlert(undefined);
  }

  async function dismiss() {
    close();
    cb.current?.resolve({ isConfirmed: false });
  }

  async function confirm() {
    close();
    cb.current?.resolve({ isConfirmed: true })
  }

  return (
    <AlertContext.Provider value={{ fire: fire }}>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alert?.title}</AlertDialogTitle>
            <AlertDialogDescription>{alert?.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {alert?.cancel && (
              <AlertDialogCancel onClick={dismiss}>
                {alert?.cancel}
              </AlertDialogCancel>
            )}
            {alert?.action && (
              <AlertDialogAction onClick={confirm}>
                {alert?.action}
              </AlertDialogAction>
            )}
            {!alert?.action && <Button onClick={confirm}>Confirm</Button>}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {children}
    </AlertContext.Provider>
  );
};