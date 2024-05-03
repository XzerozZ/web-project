import { AllBlog, AllRestaurant, SearchRestaurant } from '@/interface/interface';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';


const Searchbar = ({data} : {data : SearchRestaurant[]}) => {

  

    const [search, setSearch] = useState<string>('');
    
    function searchByName(data: SearchRestaurant[] | undefined, search: string): SearchRestaurant[] {
        if (!data) {
            console.log("data is null");
            return [];
        }
        search = search.toLowerCase();
        return data.filter((restaurant) =>
            restaurant.name && restaurant.name.toLowerCase().includes(search)
        );
    }
    
    // Initial search
  
    // UseEffect to update results when search changes
    useEffect(() => {
      
        const results = searchByName(data, search); // Pass data directly
        console.log("Updated results:", results);
    }, [search]);
    
    const filteredData = searchByName(data, search);


    return (
        <>
        <div className='static'>

                    <form className='m-1'>
                        <div className='items-center w-full bg-[#EAECEE] rounded-lg relative block'>
                            <input
                                className='border-none block bg-transparent w-full border rounded-md p-4 focus:outline-none focus:border-none focus:ring-0 sm:text-sm'
                                placeholder="ร้านอาหาร บทความ"
                                type="text"
                                name="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div dir='rtl' className='bg-[#39DB4A] rounded-s-lg w-[40px] text-center align-center absolute inset-y-0 right-0 flex items-center pl-2'>
                                <span className='m-2 '><IoSearchOutline className='w-[25px] h-[25px] ' /></span>
                            </div>
                        </div>
                    </form>
                    <div className='absolute  text-[25px]'>
                    {search === '' ? (
                             <div></div>
                        ) : (
                            <div>
                                <ul>
                                    {filteredData.map((restaurant) => (
                                       <Link href={`/restaurant/${restaurant.res_id}`} key={restaurant.res_id} onClick={() => setSearch('')}>
                                        <li className='hover:bg-[#E8EAED]/70 p-2 rounded-md'>{restaurant.name}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
        </div>
          

       
        </>
    );
}

export default Searchbar;