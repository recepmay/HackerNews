export interface NewsItemState {
  storyID?: number;
  storyTitle?: string;
  storyURL?: string;
  storyImageURL?: string;
  storyTimestamp?: string;
  storyScore?: number;
  authorId?: string;
  authorAbout?: string;
  authorKarmaScore?: number;
}

export interface NewsState {
  items: NewsItemState[],
  selectedNews: NewsItemState
}

