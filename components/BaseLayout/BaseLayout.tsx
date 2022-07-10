import { HamburgerMenu } from "@components/HamburgerMenu";

export interface IChildProps {
  children: JSX.Element;
}

export const BaseLayout = ({ children }: IChildProps) => (
  <>
    <HamburgerMenu />
    <main>{children}</main>
  </>
);
