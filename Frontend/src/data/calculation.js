import dayjs from "dayjs";

export function totalHrs(startTime, endTime) {
  if (!startTime || !endTime) return 0;

  const [startH, startM] = startTime.split(":").map(Number);
  const [endH, endM] = endTime.split(":").map(Number);

  const start = startH * 60 + startM; // total minutes
  const end = endH * 60 + endM;       // total minutes

  const diffMins = end - start;
  return diffMins > 0 ? diffMins / 60 : 0; // convert to hours
}

export function getRandomDayjs(startYear = 2023, endYear = 2025) {
  const start = dayjs(`${startYear}-01-01`);
  const end = dayjs(`${endYear}-12-31`);
  const diff = end.diff(start, "day");
  const randomOffset = Math.floor(Math.random() * diff);
  return start.add(randomOffset, "day");
}
export function totalKms(startKms, endKms) {
  const s = Number(startKms) || 0;
  const e = Number(endKms) || 0;
  return e > s ? e - s : 0;
}

export function extraKms(totalKms) {
  const t = Number(totalKms) || 0;
  return t > 80 ? t - 80 : 0;
}


export function extraHrs(totalHrs) {
  const t = Number(totalHrs) || 0;
  return t > 8 ? t - 8 : 0;
}


export function extraHrsAmt(extraHrs, extraHrsRate) {
  const hrs = Number(extraHrs) || 0;
  const rate = Number(extraHrsRate) || 0;
  return hrs * rate;
}

export function extraKmsAmt(extraKms, extraKmsRate) {
  const kms = Number(extraKms) || 0;
  const rate = Number(extraKmsRate) || 0;
  return kms * rate;
}

export function totalAmount(
  totalKms,
  perKmRate,
  baseRate,
  extraHrsAmt,
  extraKmsAmt,
  driveBhatta,
  parkingCharges
) {
  const tKms = Number(totalKms) || 0;
  const perKm = Number(perKmRate) || 0;
  const base = Number(baseRate) || 0;
  const eHrs = Number(extraHrsAmt) || 0;
  const eKms = Number(extraKmsAmt) || 0;
  const bhatta = Number(driveBhatta) || 0;
  const parking = Number(parkingCharges) || 0;

  return base + tKms * perKm + eHrs + eKms + bhatta + parking;
}
