export interface Recipe {
  _id: string
  title: string;
  description: string;
  shortDescription: string;
  coverImage: string | null;
  images: string[];
  createdAt: Date;
}

export type RecipeInput = {
  title: string;
  description: string;
  shortDescription: string;
  categories: string[];
  coverImage: File | null,
  images: File[]
}
