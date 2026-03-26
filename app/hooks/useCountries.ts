import {  useEffect, useState , useCallback} from "react";
import { getCountries , getCountriesByName, getCountriesFilterByRegion } from '../services/useService'; 
import {Country} from '../types/countries';


export const useCountries =() => {
    const [loading,setLoading] = useState<boolean>(true);
    const[countries,setCountries] = useState<Country[]>([]);
    const [error, setError] = useState<string|null>(null);


    const fetchCountriesAll =useCallback(async () =>{
        setLoading(true);
        setError(null);

        try{
            
            const cargarDatos = await getCountries();
            setCountries(cargarDatos);
        }
        catch(err:any){
            setError(err.message|| "Ocurrio un error al obtener los paises");
        }finally{
            setLoading(false);
        }
    }, []);

    //buscar by nombre
    const fetchByName = async(name:string) =>{
        if(!name) return fetchCountriesAll();
        setLoading(true);
        try{ 
            const dataByName = await getCountriesByName(name);
            setCountries(dataByName);
            setError(null);
        }catch{
            setError("No se encontro ningun pais con ese Nombre");
            setCountries([]);
        }finally{
            setLoading(false);
        }
    };

    //filtrar por region
    const fetchFilterByRegion = async(region:string) =>{
        if(!region) return fetchCountriesAll();
        try{
            const dataByRegion = await getCountriesFilterByRegion(region);
            setCountries(dataByRegion);
            setError(null);
        }catch{
            setError("No se encontraron paises con esa region");
            setCountries([]);

        }finally{
            setLoading(false);
        }
    };

    //carga all iniciar el componente 
    useEffect(() => {
        fetchCountriesAll();
    }, [fetchCountriesAll]);
    





    return { countries, loading, error, fetchByName, fetchFilterByRegion, refetch: fetchCountriesAll };

};