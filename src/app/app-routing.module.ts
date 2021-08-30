import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdoctListComponent } from './prodoct-list/prodoct-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:"",component:ProdoctListComponent},
  {path:'detail',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
