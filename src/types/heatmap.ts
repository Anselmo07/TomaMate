export interface HeatmapDay {

  date: string;

  thermos: number;

  value: number;

  active: boolean;

}

export interface HeatmapWeek {

  month?: string;

  days: HeatmapDay[];

}

export interface HeatmapData {

  weeks: HeatmapWeek[];

}