import type { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`h-full w-full max-w-7xl mx-auto overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
