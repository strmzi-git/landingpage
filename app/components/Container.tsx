"use client";

import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

interface ContainerProps {
  children: React.ReactElement[] | React.ReactElement;
}

const Container: React.FC<ContainerProps> = function ({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted)
    return (
      <div className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <HashLoader />
      </div>
    );
  return <div className="py-6 px-4 sm:px-6 xl:px-28 lg:px-20">{children}</div>;
};

export default Container;
