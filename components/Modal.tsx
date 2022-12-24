"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  setOpenModal,
}: {
  children: React.ReactNode;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.getElementById("_portal")!);
};

export default Modal;
