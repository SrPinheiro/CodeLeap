import { useContext } from "react";
import { HomePageContext } from "src/contexts/pages/HomePageContext";

export const useHomePage = () => useContext(HomePageContext)