import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from 'src/app/core/pipes/safe-html.pipe';
import { UnicodeFormatPipe } from 'src/app/core/pipes/unicode-format.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlPipe,
    UnicodeFormatPipe
  ],
  declarations: [
    SafeHtmlPipe,
    UnicodeFormatPipe
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],  
  providers: [
  ],
})
export class ShareModule { }