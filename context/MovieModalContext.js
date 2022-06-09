import { createContext, useState } from "react";

export const MovieModalContext = createContext();


export function MovieModalProvider({ children }) {
  const [movie, setMovie] = useState();
  //const [isModal, setIsModal] = useState(false);

  return (
    <MovieModalContext.Provider value={{movie, setMovie}}>{children}</MovieModalContext.Provider>
  );
}
