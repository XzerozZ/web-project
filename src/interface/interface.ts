import { Session } from "inspector";

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
    length: number;
    birthday: string;
    email: string;
    image : string ;
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
    rating:      number;
}

export interface Restaurant {
    res_id:           number;
    name:             string;
    image:            string;
    image_background: string;
    phone_number:     string;
    address:          string;
    description:      string;
}

export interface User {
    user_id:      number;
    username:     string;
    image:        string;
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
    
    res_id:           number;
    name:             string;
    image:            string;
    image_background: string;
    phone_number:     string;
    averageRating:    number;
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

export interface AllBlog {
    blog_id:     number;
    user_id:     number;
    res_id:      number;
    title:       string;
    image:       string;
    description: string;
    posted_date: Date;
}




//////////////////////////////////////

export interface AloneRestaurant {
    res_id:           number;
    name:             string;
    image:            string;
    image_background: string;
    phone_number:     string;
    address:          string;
    description:      string;
    res_type:         ResTypeAlone[];
    res_op:           ResOp[];
    rating:           any[];
    categories:       string[];
    openingHours:     string[];
    averageRating:    number;
    ratingCounts:      { [key: string]: number };
}

export interface ResOp {
    res_id:       number;
    open_id:      number;
    openingHours: OpeningHours;
}

export interface OpeningHours {
    open_id:      number;
    day_of_week:  string;
    opening_time: string;
    closing_time: string;
}

export interface ResTypeAlone {
    res_id:      number;
    category_id: number;
    category:    CategoryAlone;
}

export interface CategoryAlone {
    category_id: number;
    name: string;

}
//////////////////////////////////////


export interface Comment {
    comment_id:  number;
    user_id:     number;
    res_id:      number;
    description: string;
    posted_date: Date;
    user:        User;
    restaurant:  ResCom;
    rating:      number;
}


export interface ResCom {
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
    image:        string;
    phone_number: string;
    birthday:     Date;
    email:        string;
    password:     string;
    role:         string;
    rating:       any[];
}





export interface ratingData {
    user_id: number;
    res_id: number;
    rating: number;
}

//////////////////////////////////////
export interface AloneBlog {
    blog_id:     number;
    user_id:     number;
    res_id:      number;
    title:       string;
    image:       string;
    description: string;
    posted_date: string;
    user:        UserBlog;
    restaurant:  RestaurantBlog;
}

export interface RestaurantBlog {
    res_id:           number;
    name:             string;
    image:            null;
    image_background: null;
    phone_number:     string;
    address:          string;
    description:      string;
}

export interface UserBlog {
    user_id:      number;
    username:     string;
    image:        null;
    phone_number: string;
    birthday:     Date;
    email:        string;
    password:     string;
    role:         string;
}


//////////////////////////////////////


// export interface SessionData {
//     user:    UserSession;
//     expires: Date;
// }
export interface UserSession {
    name?:      string | null | undefined;
    email?:     string | null | undefined;
    id?:        string | null | undefined;
    role?:      string | null | undefined;
    randomKey?: string | null | undefined;
}


export interface SearchRestaurant {
    res_id: number;
    name: string;
    image: string;
    image_background: string;
    phone_number: string;
    address: string;
    description: string;
    res_type: {
        res_id: number;
        category_id: number;
        category: {
            name: string;
        };
    }[];
}
export interface UserSession2 {
    name?:      string ;
    email?:     string ;
    id?:        string ;
    role?:      string ;
    randomKey?: string ;
}



export interface SaveData {
    user_id:    number;
    res_id:     number;
    user:       User;
    restaurant: Restaurant;
}

export interface UserSave {
    user_id:      number;
    username:     string;
    image:        string;
    phone_number: string;
    birthday:     Date;
    email:        string;
    password:     string;
    role:         string;
}

//////////////////////////////////////
export interface Ranking {
    res_id:           number;
    name:             string;
    image:            string;
    image_background: string;
    phone_number:     string;
    address:          string;
    description:      string;
    averageRating:    number;
    res_type:         RankType[];
}

export interface RankType {
    res_id:      number;
    category_id: number;
    category:    CatRank;
}

export interface CatRank {
    res_id:        number;  
    name: string;
    averageRating: number;
    category: string;
}

// Co