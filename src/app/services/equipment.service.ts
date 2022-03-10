import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  urlBase='/api';

  constructor(private http:HttpClient) { }

  /// get productos
  getAllProducts(){
   return  this.http.get<Product>(this.urlBase);
  }
// obtener un producto
  getProduct(id:string){
   
    return this.http.get<Product>(this.urlBase+'/'+id);
  }
//agregar producto
  addProduct(product:Product){
    return this.http.post(this.urlBase,product);
  }
// eliminar producto
deleteProduct(id:string){
  return this.http.delete(this.urlBase+'/'+id);
}
//modificar
updateProduct(id:string, product:Product){
  return this.http.put(this.urlBase+'/id'+id,product);
}

}
