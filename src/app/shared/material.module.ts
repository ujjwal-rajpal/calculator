import { NgModule } from '@angular/core';

/**material components */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatTableModule
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatTableModule
    ]
})

export class MyMaterialModule{}
