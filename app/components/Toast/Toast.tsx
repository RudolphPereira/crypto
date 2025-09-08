"use client";
import { toast } from "sonner";

type Props = {
  title: string;
  message: string;
  btnLabel: string;
};

export function Toast({ title, message, btnLabel }: Props) {
  return toast(title, {
    description: message,
    id: "1",
    action: {
      label: btnLabel,
      onClick: () => {
        window.location.reload();
        // toast.dismiss;
      },
    },
  });
}

export function ToastSec({ title, message, btnLabel }: Props) {
  return toast(title, {
    description: message,
    id: "2",
    action: {
      label: btnLabel,
      onClick: () => toast.dismiss,
    },
  });
}
