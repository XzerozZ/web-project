export interface UserData {
    email: string;
    username: string;
    phone_number: string;
    birthday: string;
    password: string;
    role: string;
    image: string;

}

export interface dataInformation {
    birthday: string;
    email: string;
    image : string | null;
    password: string;
    phone_number: string;
    role: string;
    user_id : number;
    username: string;
   } 
   

   export interface dataPersonalComment {
    comment_id:  number;
    user_id:     number;
    res_id:      number;
    description: string;
    posted_date: Date;
    user:        User;
    restaurant:  Restaurant;
}

export interface Restaurant {
    res_id:           number;
    name:             string;
    image:            null;
    image_background: null;
    phone_number:     string;
    address:          string;
    description:      string;
}

export interface User {
    user_id:      number;
    username:     string;
    image:        null | string;
    phone_number: string;
    birthday:     Date;
    email:        string;
    password:     string;
    role:         string;
    rating:       any[];
}
export interface dataPersonalBlog {
    blog_id:     number;
    user_id:     number;
    res_id:      number;
    title:       string;
    image:       string;
    description: string;
    posted_date: string;
    user:        User;
    restaurant:  Restaurant;
}



export interface AllRestaurant {
    message: string;
    res:     ResInfo[];
}

export interface ResInfo {
    res_id:           number;
    name:             string;
    image:            null | string;
    image_background: null | string;
    phone_number:     string;
    address:          string;
    description:      string;
    res_type:         ResType[];
}

export interface ResType {
    res_id:      number;
    category_id: number;
    category:    Category;
}

export interface Category {
    name: string;
}