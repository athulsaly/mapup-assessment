"use client";

import { ChangeEvent, useEffect, useState } from "react";

export const HomePageController = () => {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(50);
  const [totalCount, setTotalCount] = useState(0);
  const [populationList, setPopulationList] = useState([]);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [disablePreviousButton, setDisablePreviousButton] = useState(false);

  useEffect(() => {
    const fetchTotalCount = async () => {
      const totalEntries = await fetch("/api/vehicles/totalCount");
      const totalCount = await totalEntries.json();
      setTotalCount(totalCount);
    };
    fetchTotalCount();
  }, [totalCount]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      const response = await fetch(
        `/api/vehicles/paginated?skip=${skip}&take=${take}`
      );
      const data = await response.json();
      setPopulationList(data);
    };

    fetchPopulationData();

    if (skip + take < totalCount) {
      setDisableNextButton(false);
    }
    if (skip + take > 0) {
      setDisablePreviousButton(false);
    }
  }, [skip, take, totalCount]);

  const nextPage = () => {
    if (skip + take > totalCount) {
      setDisableNextButton(true);
    } else {
      setSkip(skip + take);
    }
  };

  const previousPage = () => {
    if (skip - take < 0) {
      setDisablePreviousButton(true);
    } else {
      setSkip(skip - take);
    }
  };

  const changeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    setTake(parseInt(event.target.value));
  };

  return {
    state: {
      skip,
      take,
      populationList,
      totalCount,
      disabled: { disableNextButton, disablePreviousButton },
    },
    mutation: {
      nextPage,
      previousPage,
      changeLimit,
    },
  };
};
