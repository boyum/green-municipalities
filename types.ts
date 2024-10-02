export type Statistics = {
  adjustedBytes: number;
  energy: number;
  co2: {
    grid: {
      grams: number;
      litres: number;
    };
    renewable: {
      grams: number;
      litres: number;
    };
  };
};

export type CarbonData = {
  url: string;
  green?: boolean | "unknown";
  bytes?: number;
  cleanerThan?: number;
  statistics?: Statistics;
  errored?: boolean;
};

export type Municipality = {
  id: string;
  name: string;
  url: string;
};

export type MunicipalityData = Municipality & CarbonData;
