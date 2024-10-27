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
  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});

  const getSearchData = () => {
    if (searchState) {
      setSearchQuery("");
    }
    setSkip(0);
    setTake(50);
    setSearchState(!searchState);
  };

  useEffect(() => {
    if (searchQuery === "") {
      setSkip(0);
      setTake(50);
      setSearchState(false);
    }
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

    if (searchState && searchQuery !== "") fetchSearchData();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, take, totalCount, searchState]);

  useEffect(() => {
    const fetchCountyChartData = async () => {
      try {
        const response = await fetch(`/api/vehicles/countydata`);
        const data = await response.json();
        const chartData = {
          labels: data.labels,
          datasets: [
            {
              label: "My First Dataset",
              data: data.count,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
        setChartData1(chartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountyChartData();
  }, []);
  useEffect(() => {
    const fetchVehicleMakeData = async () => {
      try {
        const response = await fetch(`/api/vehicles/makedata`);
        const data = await response.json();
        console.log(data);
        const chartData = {
          labels: data.labels,
          datasets: [
            {
              label: "My First Dataset",
              data: data.count,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };

        setChartData2(chartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVehicleMakeData();
  }, []);

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
      chartData2,
      searchState,
      chartData1,
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
