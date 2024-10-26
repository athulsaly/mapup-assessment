import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkCafvEligibility = (data: string) => {
  if (data === "Clean Alternative Fuel Vehicle Eligible") return "Eligible";
  else return "Not Eligible";
};

export function replaceWhiteSpace(str: string): string {
  return str.replace(/\s+/g, "_");
}

export const reduceEvType = (data: string) => {
  if (data === "Plug-in Hybrid Electric Vehicle (PHEV)") return "PHEV";
  else return "BEV";
};
