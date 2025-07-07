"use client";
import Image from "next/image";
import React from "react";

type ProgramImageProps = React.ComponentProps<typeof Image>;

export default function ProgramImage(props: ProgramImageProps) {
  return (
    <Image
      {...props}
      onContextMenu={e => e.preventDefault()}
    />
  );
} 