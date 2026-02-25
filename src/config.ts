// Feature flags and configuration
// Controls which product categories are visible on the website

const getEnabledCategories = () => {
    // In a real refined setup, this would come from import.meta.env
    // For now, hardcoded as per user request to use a file to control this
    // We can also check import.meta.env.PUBLIC_ENABLED_CATEGORIES if set
    
    const envCategories = import.meta.env.PUBLIC_ENABLED_CATEGORIES;
    if (envCategories) {
        return envCategories.split(',').map((c: string) => c.trim().toLowerCase());
    }
    
    // Default fallback
    return ['mooncakes', 'cookies'];
};

export const ENABLED_CATEGORIES = getEnabledCategories();

export const isCategoryEnabled = (category: string) => {
    return ENABLED_CATEGORIES.includes(category.toLowerCase());
};
