import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [

  {
    path:'',redirectTo:'/main', pathMatch:'full'
  },
  {
    path:'main',component:MainComponent
  },
  {
    path:'add-product', component:AddProductComponent
  },
  {
    path:'update-product/:id', component:UpdateProductComponent  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
