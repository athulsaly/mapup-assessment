"use client";

import { CONSTANTS } from "@/utils/constants";
import { HomePageController } from "./actions";

export default function Home() {
  const { state, mutation } = HomePageController();

  return (
    <div>
      {state.populationList.map((item: VehicleListProps) => (
        <div key={item.dolVehicleId}>{item.make}</div>
      ))}
      <button
        onClick={mutation.nextPage}
        disabled={state.disabled.disableNextButton}
      >
        Next
      </button>
      <button
        onClick={mutation.previousPage}
        disabled={state.disabled.disablePreviousButton}
      >
        Previous
      </button>
      <select value={state.take} onChange={mutation.changeLimit}>
        {CONSTANTS.TABLE_DATA_LIMIT.map((limit) => {
          return (
            <option key={limit.value} value={limit.value}>
              {limit.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
