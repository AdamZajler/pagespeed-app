export interface PageSpeedResult {
  loadingExperience: LoadingExperience;
  lighthouseResult: {
    fetchTime: Date;
    categories: {
      performance: {
        score: number;
      };
      accessibility: {
        score: number;
      };
      "best-practices": {
        score: number;
      };
      seo: {
        score: number;
      };
    };
  };
}

interface LoadingExperience {
  id: string;
  metrics: Record<string, Metric>;
  overall_category: string;
  initial_url: string;
}

interface Metric {
  percentile: number;
  distributions: Distribution[];
  category: string;
}

interface Distribution {
  min: number;
  max?: number;
  proportion: number;
}

export interface CoreVitals {
  CUMULATIVE_LAYOUT_SHIFT_SCORE: number;
  EXPERIMENTAL_TIME_TO_FIRST_BYTE: number;
  FIRST_CONTENTFUL_PAINT_MS: number;
  INTERACTION_TO_NEXT_PAINT: number;
  LARGEST_CONTENTFUL_PAINT_MS: number;
}
