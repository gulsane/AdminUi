import { createContext, useContext } from "react";

export const AppContext = createContext({
	details: [],
	saveDetails: (details) => {},
	deleteDetails: (ids) => {},
});

export const AppProvider = AppContext.Provider;

export const useAppContext = () => {
	return useContext(AppContext);
};
