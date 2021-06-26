export interface Category {
  _id: string
  title: string;
  description: string;
  image: string | null;
  createdAt?: Date
}

export type CategoryInput = {
  title: string;
  description: string;
  image: File | null
}
