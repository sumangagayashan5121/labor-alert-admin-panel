import { NavBarView } from "./navbarView";
import { API_KIWI } from "@utils/Const/Api";


interface NavBarViewProps {
  onSubmit:(e:any)=>void;

}

const NavBarContainer = (): JSX.Element => {

  const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <NavBarView
    onSubmit={onSubmit}
    />
  );
};

export { NavBarContainer };
export type { NavBarViewProps };

