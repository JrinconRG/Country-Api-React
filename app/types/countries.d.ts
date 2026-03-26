

export interface Country{
    flags:Flags;
    name:Name;
    currencies:Record<string,CurrenciInfo>
    latlng:number[];
    capital:string[];
    region: string; 




}

interface Flags {
    png:string,
    svg:string,
    alt:string
}

interface Name{
    common:string;
    official:string;
    nativeName:Record<String,NativeName>;
}
interface NativeName{
    official:string;
    common:string;
}

interface CurrenciInfo{
    name:string;
    symbol:string;

}
