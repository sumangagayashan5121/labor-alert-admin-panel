import "./Home.css";
import { HomeView } from "./homeView";
import { API_KIWI } from "@utils/Const/Api";

interface HomeViewProps {

}

const HomeContainer = (): JSX.Element => {

  return (
    <HomeView/>
  );
};

export { HomeContainer };
export type { HomeViewProps };

