"use client";

import { useEffect, useState } from "react";

export const HomePageController = () => {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(50);
  const [totalCount, setTotalCount] = useState(0);
  const [populationList, setPopulationList] = useState([]);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [disablePreviousButton, setDisablePreviousButton] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchState, setSearchState] = useState(false);

  const getSearchData = () => setSearchState(!searchState);

  useEffect(() => {
    if (searchQuery === "") setSearchState(false);
  }, [searchQuery]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await fetch(
          `/api/vehicles/paginated?skip=${skip}&take=${take}`
        );
        const data = await response.json();
        setPopulationList(data.listData);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSearchData = async () => {
      try {
        const response = await fetch(
          `/api/vehicles/search?search=${searchQuery}&skip=${skip}&take=${take}`
        );
        const data = await response.json();
        setPopulationList(data.listData);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchState) fetchSearchData();
    else fetchPopulationData();

    if (skip + take < totalCount) {
      setDisableNextButton(false);
    }
    if (skip + take > totalCount) {
      setDisableNextButton(true);
    }
    if (skip + take > 0) {
      setDisablePreviousButton(false);
    }
    if (skip - take < 0) {
      setDisablePreviousButton(true);
    }
  }, [skip, take, totalCount, searchState]);

  const nextPage = () => {
    setSkip(skip + take);
  };

  const previousPage = () => {
    setSkip(skip - take);
  };

  const changeLimit = (event: string) => {
    setTake(parseInt(event));
  };

  const handleSearch = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
  };

  return {
    state: {
      skip,
      take,
      populationList,
      totalCount,
      searchQuery,
      disabled: { disableNextButton, disablePreviousButton },
    },
    mutation: {
      nextPage,
      previousPage,
      changeLimit,
      handleSearch,
      setSearchQuery,
      getSearchData,
    },
  };
};
