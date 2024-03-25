import { MergeDeep } from "type-fest";
import { Database as DatabaseGenerated } from "./generated_types";
export type { Json } from "./generated_types";

// Override the type for a specific column in a view:
export type Database = MergeDeep<DatabaseGenerated, {}>;

export type Product = MergeDeep<
  Database["Eukami_v1"]["Tables"]["Product"]["Row"],
  {
    images: [
      {
        name?: string;
        path?: string;
        fullPath?: string;
        preview?: string;
        publicUrl: string;
      }
    ];
  }
>;

export type ProductVariant = MergeDeep<
  Database["Eukami_v1"]["Tables"]["ProductVariant"]["Row"],
  {
    images: [
      {
        name?: string;
        path?: string;
        fullPath?: string;
        preview?: string;
        publicUrl: string;
      }
    ];
  }
>;

export type Checkout = MergeDeep<
  Database["Eukami_v1"]["Tables"]["Checkout"]["Row"],
  {}
>;
