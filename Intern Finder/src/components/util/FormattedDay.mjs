import React from "react";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const FormattedTime = (timestamp) => {
  const date = dayjs(timestamp);
  const now = dayjs();

  if (now.diff(date, "hour") < 24) {
    return date.fromNow();
  } else if (now.diff(date, "day") < 30) {
    return date.fromNow();
  } else {
    return date.format("MMMM D, YYYY");
  }
};
