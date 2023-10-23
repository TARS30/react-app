import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  ///////////////////////////////////////////////////////////////////////// FILTER

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  ///////////////////////////////////////////////////////////////////////// SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";

  ///////////////////////////////////////////////////////////////////////// PAGINATION

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  /////////////////////////////////////////////////////////////////////////
  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["booking", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
};
