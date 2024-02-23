export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
  temperature: {
    temp: number;
    temp_max: number;
    temp_min: number;
  }
  date: string;
}
