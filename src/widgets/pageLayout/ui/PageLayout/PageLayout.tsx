import { FC, PropsWithChildren, ReactNode } from "react";
import classes from "./classes.module.scss";
import { cn, type Mods } from "@/src/shared/lib";

type Props = PropsWithChildren<{
  header?: ReactNode;
  sidebar?: ReactNode;
}>;

export const PageLayout: FC<Props> = ({ header, sidebar, children }) => {
  
  const mods: Mods = {
    [classes.no_sidebar]: !sidebar 
  }

  return (
    <div className={cn([classes.wrapper], mods)}>
      {sidebar && <div className={classes.sidebar}>{sidebar}</div>}
      <div className={classes.header}>{header}</div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
