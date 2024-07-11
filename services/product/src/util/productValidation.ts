import { types } from "util";

export const validationProductRequest = (
  data: any
): { isValid: boolean; errors?: string[] } => {
  const errors: string[] = [];
  if (!data.name || !data.description || !data.price) {
    errors.push("Name,description and price are required");
  }
  if (typeof data.name !== "string") {
    errors.push("Name must be string");
  }
  if (typeof data.description !== "string") {
    errors.push("Description must be string");
  }
  if (typeof data.price !== "number") {
    errors.push("Price must be number");
  }
  if (typeof data.stock !== "number" || data.stock < 0) {
    errors.push("Stock must be non-negative nubmer");
  }
  return { isValid: errors.length === 0, errors };
};
