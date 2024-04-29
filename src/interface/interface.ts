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
    image:        null;
    phone_number: string;
    birthday:     Date;
    email:        string;
    password:     string;
    role:         string;
    rating:       any[];
}