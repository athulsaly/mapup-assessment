"use client";

import { HomePageController } from "@/app/actions";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CONSTANTS } from "@/lib/constants";
import { checkCafvEligibility } from "@/lib/utils";
import { VehiclePopulation } from "@prisma/client";
import Link from "next/link";

export default function Home() {
  const { state, mutation } = HomePageController();

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4 relative">
        <Table>
          <TableHeader className="sticky top-14 bg-white">
            <TableRow>
              <TableHead>Vehicle ID</TableHead>
              <TableHead>County</TableHead>
              <TableHead>City</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Make</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>VIN</TableHead>
              <TableHead>Range</TableHead>
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
                <TableCell>{item.make}</TableCell>
                <TableCell>{item.model}</TableCell>
                <TableCell>{item.modelYear}</TableCell>
                <TableCell>{item.vin}</TableCell>
                <TableCell>{item.electricRange}</TableCell>
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
      </div>
    </div>
  );
}
