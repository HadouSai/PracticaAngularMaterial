import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatToolbarRow, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule],
    exports: [MatToolbarModule, MatToolbarRow, MatToolbar,
        MatButtonModule]
})
export class MaterialNavbarModule {

}
