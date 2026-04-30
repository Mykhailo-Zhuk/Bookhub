export type Difficulty = "Початківець" | "Середній" | "Експерт";
export type Availability = "Паперова" | "Електронна" | "Аудіо";
export type PublishStatus = "Чернетка" | "Опубліковано";

export interface ExternalResource {
  label: string;
  url: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  shortDescription: string;
  fullDescription: string;
  genre: string;
  tags: string[];
  language: string;
  year: number;
  readingVolume: string;
  difficulty: Difficulty;
  recommendedFor: string;
  recommendedWhen: string;
  youtubeUrl?: string;
  externalResources: ExternalResource[];
  availability: Availability[];
  status: PublishStatus;
}
