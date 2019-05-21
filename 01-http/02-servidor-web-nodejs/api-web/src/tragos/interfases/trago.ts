export interface Trago {
    id:number;
    nombre:string;
    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas';
    gradosAlcohol:number;
    fechaCaducidad:Date;
}