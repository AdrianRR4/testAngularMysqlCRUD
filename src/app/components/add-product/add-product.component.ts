import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentService } from '../../services/equipment.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  equipoForm:Product={
    id_equipo:'',
    nombre:'',
    logo:''
  };
  constructor(private router:Router, private equipmentService:EquipmentService) { }

  ngOnInit(): void {
  }

  agregarProducto(){

    //delete this.equipo.id_equipo;

    this.equipmentService.addProduct(this.equipoForm).subscribe();  
    this.router.navigate(['/main']);
console.log('contenido forulario',this.equipoForm);
  }

}
