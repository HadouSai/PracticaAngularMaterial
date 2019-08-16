import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AutoservicioComponent } from './autoservicio/autoservicio.component';


@NgModule({
    imports: [CommonModule, MatButtonModule, MatCardModule],
    exports: [MatButtonModule, MatCardModule],
    declarations: [AutoservicioComponent],
})
export class MaterialModule {

}
