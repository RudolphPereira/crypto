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
    action: {
      label: btnLabel,
      onClick: () => toast.dismiss,
    },
  });
}
