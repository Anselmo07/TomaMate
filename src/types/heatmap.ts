export interface HeatmapDay {

  date: string;

  value: number;

}

export interface HeatmapMonth {

  label: string;

  column: number;

}

export interface HeatmapData {

  days: HeatmapDay[];

  months: HeatmapMonth[];

  weeks: number;

}