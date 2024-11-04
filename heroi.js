function main(){
    const nombreHeroe='Gonchi';
    const expHeroe=12000;
    let rango='';

    if(expHeroe<=1000){
        rango="Hierro";
    }
    else if(expHeroe>1000 && expHeroe<=2000){
        rango="Bronce";
    }
    else if(expHeroe>2000 && expHeroe<=5000){
        rango="Plata";
    }
    else if(expHeroe>5000 && expHeroe<=7000){
        rango="Oro";
    }
    else if(expHeroe>7000 && expHeroe<=8000){
        rango="Platino";
    }
    else if(expHeroe>8000 && expHeroe<=9000){
        rango="Ascendente";
    }
    else if(expHeroe>9000 && expHeroe<=10000){
        rango="Inmortal";
    }
    else{
        rango="Radiante";
    }
    console.log("El Heroe de nombre "+nombreHeroe+" está en el nível de "+rango);
}
main();