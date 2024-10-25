"use client";

import { HomePageController } from "@/app/actions";
import { CONSTANTS } from "@/lib/constants";
import { checkCafvEligibility } from "@/lib/utils";
import { VehiclePopulation } from "@prisma/client";

export default function Home() {
  const { state, mutation } = HomePageController();
  return (
    <div className="w-full flex flex-col gap-y-2">
      <table className="w-full">
        <thead>
          <tr>
            <th>VIN</th>
            <th>County</th>
            <th>City</th>
            {/* <th>State</th> */}
            <th>Make</th>
            <th>Model</th>
            <th>Make Year</th>
            <th>Vehicle ID</th>
            <th>Range</th>
            <th>CAFV Eligibility</th>
          </tr>
        </thead>
        <tbody className="w-fit">
          {state.populationList.map((item: VehiclePopulation) => (
            <tr key={item.dolVehicleId}>
              <td>{item.vin}</td>
              <td>{item.county}</td>
              <td>{item.city}</td>
              {/* <td>{item.state}</td> */}
              <td>{item.make}</td>
              <td>{item.model}</td>
              <td>{item.modelYear}</td>
              <td>{item.dolVehicleId}</td>
              <td>{item.electricRange}</td>
              <td>{checkCafvEligibility(item.cafvEligibility)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-between">
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

        <button
          onClick={mutation.nextPage}
          disabled={state.disabled.disableNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="w-full flex flex-col gap-y-2">
<table className="w-full">
  <thead>
    <tr>
      <th>VIN</th>
      <th>County</th>
      <th>City</th>
      <th>State</th>
      <th>Make</th>
      <th>Model</th>
      <th>Make Year</th>
      <th>Vehicle ID</th>
      <th>Range</th>
      <th>CAFV Eligibility</th>
    </tr>
  </thead>
  <tbody className="w-fit">
    {state.populationList.map((item: VehiclePopulation) => (
      <tr key={item.dolVehicleId}>
        <td>{item.vin}</td>
        <td>{item.county}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        <td>{item.make}</td>
        <td>{item.model}</td>
        <td>{item.modelYear}</td>
        <td>{item.dolVehicleId}</td>
        <td>{item.electricRange}</td>
        <td>{checkCafvEligibility(item.cafvEligibility)}</td>
      </tr>
    ))}
  </tbody>
</table>
<div className="w-full flex justify-between">
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

  <button
    onClick={mutation.nextPage}
    disabled={state.disabled.disableNextButton}
  >
    Next
  </button>
</div>
</div> */
}

{
  /* <div>
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
</div> */
}
