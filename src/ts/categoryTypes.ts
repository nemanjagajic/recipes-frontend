export interface Category {
  _id: string
  title: string;
  description: string;
  createdAt?: Date
}

export type CategoryInput = {
  title: string;
  description: string;
}
