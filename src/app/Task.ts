export interface Task {
  // '?' makes it optional
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}