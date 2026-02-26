// ─── Category ─────────────────────────────────────────────────────────────────

export interface Category {
  id: number;
  /** URL-safe name, used as route segment and filter param */
  name: string;
  /** Display label (Portuguese) */
  label: string;
}

// export const CATEGORY_CAKES: Category    = { id: 1, name: 'cakes',      label: 'Bolos'      };
export const CATEGORY_COOKIES: Category  = { id: 2, name: 'cookies',    label: 'Cookies'    };
export const CATEGORY_MOONCAKES: Category = { id: 3, name: 'mooncakes', label: 'Mooncakes'  };

/** All registered categories in display order */
export const allCategories: Category[] = [
  // CATEGORY_CAKES,
  CATEGORY_COOKIES,
  CATEGORY_MOONCAKES,
];
