export interface StoryItemState {
  by?: string;
  descendants?: number;
  id?: number;
  kids?: number[];
  score?: number;
  time?: Date;
  title?: string;
  type?: string;
  url?: string;
}
