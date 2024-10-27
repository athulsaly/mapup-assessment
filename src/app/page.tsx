"use client";

import { HomePageController } from "@/app/actions";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONSTANTS } from "@/lib/constants";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VehiclePopulation } from "@prisma/client";
import { checkCafvEligibility, reduceEvType } from "@/lib/utils";
import Charts from "@/components/Charts";

export default function Home() {
  const { state, mutation } = HomePageController();

  return (
    <>
      <Navbar
        searchQuery={state.searchQuery}
        handleChange={mutation.handleSearch}
        searchState={state.searchState}
        handleSearch={mutation.getSearchData}
      />
      <div className="flex min-h-screen w-full bg-muted/40">
        <div className="max-w-9xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4 relative">
          {state.populationList?.length > 0 ? (
            <>
              <Table>
                <TableHeader className="sticky top-14 bg-white">
                  <TableRow>
                    <TableHead>Vehicle ID</TableHead>
                    <TableHead>County</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Postcode</TableHead>
                    <TableHead>Make</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>VIN</TableHead>
                    <TableHead>Range</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>CAFV</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {state.populationList.map((item: VehiclePopulation) => (
                    <TableRow key={item.dolVehicleId} className="bg-accent">
                      <TableCell>
                        <div className="font-medium">{item.dolVehicleId}</div>
                      </TableCell>
                      <TableCell>{item.county}</TableCell>
                      <TableCell>{item.city}</TableCell>
                      <TableCell>{item.state}</TableCell>
                      <TableCell>{item.postalCode}</TableCell>
                      <TableCell>{item.make}</TableCell>
                      <TableCell>{item.model}</TableCell>
                      <TableCell>{item.modelYear}</TableCell>
                      <TableCell>{item.vin}</TableCell>
                      <TableCell>{item.electricRange}</TableCell>
                      <TableCell>
                        {reduceEvType(item.electricVehicleType)}
                      </TableCell>
                      <TableCell>
                        {checkCafvEligibility(item.cafvEligibility)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex w-full sticky bottom-4 justify-center">
                <div className="w-fit gap-x-10 flex justify-between bg-white h-14 items-center px-3 rounded-md">
                  <Link href="/">
                    <Button
                      onClick={mutation.previousPage}
                      disabled={state.disabled.disablePreviousButton}
                    >
                      Previous
                    </Button>
                  </Link>

                  <Select
                    defaultValue={state.take.toString()}
                    onValueChange={mutation.changeLimit}
                  >
                    <SelectTrigger className="w-20">
                      <SelectValue placeholder="Limit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Limit</SelectLabel>
                        {CONSTANTS.TABLE_DATA_LIMIT.map((limit) => {
                          return (
                            <SelectItem
                              key={limit.value}
                              value={limit.value.toString()}
                            >
                              {limit.title}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Link href="/">
                    <Button
                      onClick={mutation.nextPage}
                      disabled={state.disabled.disableNextButton}
                    >
                      Next
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-rows-2 p-10 gap-x-4">
                <Charts
                  name="Manufacturer - Population"
                  type="line"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-expect-error
                  data={state.chartData2}
                />{" "}
                <Charts
                  name="County - Vehicles"
                  type="line"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-expect-error
                  data={state.chartData1}
                />
              </div>
            </>
          ) : (
            <>
              <div className="font-semibold h-full text-3xl flex items-center justify-center">
                No results available.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
