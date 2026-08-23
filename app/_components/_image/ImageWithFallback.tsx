"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type ImageWithFallbackProps = Omit<ImageProps, "src"> & {
  src: string;
  priority?: boolean;
};

export default function ImageWithFallback({
  src,
  alt,
  priority = false,
  className,
  sizes,
  ...rest
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`relative ${className ?? ""}`}>
        <Image
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          fill
          sizes="100vw"
          unoptimized
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      className={className}
      fill
      sizes={sizes ? sizes : "100vw"}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setHasError(true)}
      unoptimized
      {...rest}
    />
  );
}
