import { UIStatusFlags } from "@/src/shared/model";
import { Stack } from "@mui/material";
import { FC, PropsWithChildren, useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { LoadMoreTrigger } from "../LoadMoreTrigger/LoadMoreTrigger";

type Props = PropsWithChildren<
  {
    onLoadMore?: (...args: any[]) => any;
    canLoadMore?: boolean;
    hasInitData?: boolean;
    gap?: "string";
  } & UIStatusFlags
>;

export const InfiniteList: FC<Props> = ({
  onLoadMore,
  canLoadMore,
  hasInitData,
  isError,
  isLoading,
  isSuccess,
  children,
  gap = "1rem"
}) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    if (isVisible) onLoadMore?.();
  }, [isVisible, onLoadMore]);

  // skeleton
  if (isLoading && !hasInitData) return <>Skeleton</>;

  return (
    <Stack gap={gap}>
      {children}
      {/* retry on error */}
      {isError && <>Error</>}
      {(!isError && canLoadMore) && <LoadMoreTrigger ref={ref}/>}
    </Stack>
  );
};
