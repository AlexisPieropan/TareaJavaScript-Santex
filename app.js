//CONSIGNA N°1:
//Se agrego un html para que se pueda visualizar como se pinta la piramide 
const piramide= (repeticion)=>{
    for(let i=0; i<=repeticion ;i++){
        for(let j=1; j<=i ;j++){
            document.write(j);
        }
        
        document.write("<br>");//se hace un salto de linea para acomodar la piramide
    }
}
 
piramide(6); //LLAMADA A LA FUNCION 


//----------------------------------------------------------
//CONSIGNA N°2

//se cargan dos array para el ejemplo:
const miArray1= [4, 3, true, 'manzana'];
const miArray2= ['pera', 3, false, true, 3, true];


const coincidencia = (arr1,arr2)=>{
    let arrResultante=[];
    let resguardoAnt;
   for(let i=0; i < arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if((arr1[i]==arr2[j]) && (arr1[i] != resguardoAnt)){     //se implemento resguardo del valor para  que solo se copie una vez al array nuevo
                resguardoAnt=arr1[i];
                arrResultante.push(arr1[i]); //se carga el elemento al array resultante
            }
        }
   }
    return arrResultante; //devuelve el array resultante
}


const arrayFinal=coincidencia(miArray1,miArray2);
console.log(arrayFinal);





//----------------------------------------------------------
//CONSIGNA N°3.1

//CLASE PADRE
class Compra {
    //ATRIBUTOS
    montoTotal;
    productos;
    unidades;
    
    //CONSTRUCTOR DE LA CLASE
    constructor(montoTotal,productos,unidades){
        this.montoTotal=montoTotal;
        this.productos=productos;
        this.unidades=unidades;
    }

    //CONSIGNA 3.2
    //METODOS
    agregarProducto(nombre, precio, unidades) {
        
        //CONSGINA 3.3 
        if(this.productos.indexOf(nombre)==-1){              //si el nombre o elemento no se encuentra en el array "indexOf" devuelve -1 y carga el elemento
            this.productos.push(nombre); //se carga el nombre
            this.unidades.push(unidades); //se cargan las unidades de cada producto
            this.montoTotal=this.montoTotal+(precio*unidades);
        }else{                                                  //sino escribe el mensaje de error
            let indice=this.productos.findIndex((element => element == nombre));   //encuentra el indice donde esta el elemento que es igual al producto introducido
            console.log(`ERROR ya existe ${nombre} con ${this.unidades[indice]}  unidades`); //se busca en el array de unidades el indice obtenido para ese producto
        }
    }
}


//SE PENSO QUE EL ARRAY DE PRODUCTOS Y EL DE UNIDADES TIENEN UNA CORRESPONDENCIA DE 1 a 1 
//carrito creado de la clase principal
const carrito2 = new Compra(10,["leche"],[3]);
console.log(carrito2);



carrito2.agregarProducto("Queso",5,5);
console.log(carrito2);

carrito2.agregarProducto("Azucar",5,4);
console.log(carrito2);

//PRUEBA DE FUNCIONAMIENTO DE DUPLICADO (no agrega el elemento "Azucar denuevo")
carrito2.agregarProducto("Azucar",5,8);
console.log(carrito2);


carrito2.agregarProducto("Dulce de leche",5,7);
console.log(carrito2);

let nuevoArray=[2,5,3,8,1]

let mostrar=nuevoArray.toSorted;

console.log(mostrar);