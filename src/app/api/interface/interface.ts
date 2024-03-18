export interface Supabase {
    supabaseUrl : string ,
    supabaseKey : string
}
export interface RestaurantFormData {
    name: string;
    phone_number: string;
    image: File;
    image_background: File;
    address: string;
    description: string;
    categories: string[];
    openingHours: {}[];
}