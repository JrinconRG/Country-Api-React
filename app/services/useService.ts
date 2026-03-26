import axiosFetch from "../lib/axios";
import {Country} from "../types/countries"

export const getCountries = async():Promise<Country[]> => {
    const response = await axiosFetch.get<Country[]>('all?fields=name,capital,currencies,flags,latlng,region');
    return response.data;
}

const FIELDS = 'fields=name,capital,currencies,flags,latlng,region'
export const getCountriesByName = async( name:string):Promise<Country[]>=>{
    const response = await axiosFetch.get<Country[]>(`name/${name}?${FIELDS}`);
    return response.data;

}

export const getCountriesFilterByRegion = async(region:string):Promise<Country[]> =>{
    const response = await  axiosFetch.get<Country[]>(`region/${region}?${FIELDS}`);
    return response.data;
}