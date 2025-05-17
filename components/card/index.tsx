
import React, { ReactNode } from "react";

export const Card = ({children}: {children: ReactNode}) => {
  return <div className="py-2 w-2/4 px-5 border-gray-50 rounded shadow">
    {children}
  </div>;
}

export default Card;