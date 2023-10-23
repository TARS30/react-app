
import {
  BarChart,
  CalendarMonth,
  HistoryToggleOff,
  MonetizationOn,
} from "@mui/icons-material";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title={"Number of bookings"}
        value={numBookings}
        icon={<HistoryToggleOff />}
        color="blue"
      />
      <Stat
        title={"Sales"}
        value={formatCurrency(sales)}
        icon={<MonetizationOn />}
        color="green"
      />
      <Stat
        title={"Check ins"}
        value={checkins}
        icon={<CalendarMonth />}
        color="indigo"
      />
      <Stat
        title={"Occupancy rate"}
        value={Math.round(occupation * 100) + '%'}
        icon={<BarChart />}
        color="yellow"
      />
    </>
  );
};

export default Stats;
