import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { EquipmentService } from '../../services/equipment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  equipoFormEdit:Product={
    id_equipo:'',
    nombre:'',
    logo:''
  };

  equipo:Product[]=[];
  constructor(private equipmentService:EquipmentService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    const id_entrada=<string>this.activatedRoute.snapshot.params.id;
    console.log(id_entrada);

    if(id_entrada){
        this.equipmentService.getProduct(id_entrada).subscribe(
          response=>{
            this.equipo=response;
            console.log('Respuesta',);
          },
            err=>console.log(err)
          
        )
    }  

  }

  modificar(){
  
   // this.equipmentService.updateProduct().subscribe();
}
}
