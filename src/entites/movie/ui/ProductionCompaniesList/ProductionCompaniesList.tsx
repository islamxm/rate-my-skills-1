import { ScrollableHorizontalList } from "@/src/shared/ui";
import { MovieDetails } from "../../model";
import { FC } from "react";
import { ProductionCompanyBadge } from "../ProductionCompanyBadge/ProductionCompanyBadge";

type Props = Pick<MovieDetails, "production_companies">;

export const ProductionCompaniesList:FC<Props> = ({production_companies}) => {
  return (
    <ScrollableHorizontalList gap={5} showNavigation={true} itemWidth={100}>
      {production_companies.map((prod) => (
        <ProductionCompanyBadge {...prod} key={prod.id} />
      ))}
    </ScrollableHorizontalList>
  );
};
