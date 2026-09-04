declare module "@tgwf/co2" {
  export type GridIntensityValue =
    | number
    | {
        value: number;
      };

  export type TraceOptions = {
    dataReloadRatio?: number;
    firstVisitPercentage?: number;
    returnVisitPercentage?: number;
    greenHostingFactor?: number;
    gridIntensity?: {
      device?: GridIntensityValue;
      network?: GridIntensityValue;
      dataCenter?: GridIntensityValue;
    };
  };

  export type TraceResult = {
    co2: number;
    green: boolean;
    variables: Record<string, unknown>;
  };

  export class CO2 {
    constructor(options?: {
      model?: "1byte" | "swd";
      version?: 3 | 4;
      rating?: boolean;
      results?: "segment";
    });

    perByte(bytes: number, green?: boolean): number;
    perVisit(bytes: number, green?: boolean): number;
    perByteTrace(
      bytes: number,
      green?: boolean,
      options?: TraceOptions,
    ): TraceResult;
    perVisitTrace(
      bytes: number,
      green?: boolean,
      options?: TraceOptions,
    ): TraceResult;
  }

  export const co2: typeof CO2;

  export const hosting: (
    domain: string,
    options?: {
      verbose?: boolean;
      db?: unknown;
      userAgentIdentifier?: string;
    },
  ) => Promise<boolean>;

  export const averageIntensity: unknown;
  export const marginalIntensity: unknown;
  export const electricityMaps: unknown;
}
