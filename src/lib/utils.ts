import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkCafvEligibility = (data: string) => {
  if (data === "Clean Alternative Fuel Vehicle Eligible") return "Eligible";
  else return "Not Eligible";
};
