export interface Recipe {
  _id: string
  title: string;
  description: string;
  shortDescription: string;
  createdAt: Date
}

export type RecipeInput = {
  title: string;
  description: string;
  shortDescription: string;
  categories: [];
  image: File | null
}
