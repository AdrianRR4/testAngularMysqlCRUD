import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../services/equipment.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listProduct!:Product[];

  constructor(private equipmentService:EquipmentService, private router:Router) { 
    this.getAllProductos();
  }

  ngOnInit(): void {
  }

  getAllProductos(){

    this.equipmentService.getAllProducts().subscribe((response:Product)=>{
      console.log(response);
     this.listProduct=<any>response;
    },
    err=>console.log(err));

  }

  borrar(id:string){

    this.equipmentService.deleteProduct(id).subscribe(response=>{
        console.log(response);
        this.getAllProductos();

    },
    err=>console.log(err)
    );

  }

  modificar(id:string){

  this.router.navigate(['/update-product/'+id])

  }
}
