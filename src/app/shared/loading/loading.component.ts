import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  loading: boolean =false;

  constructor(private loaderService: LoadingService) {

    this.loaderService.isLoading.subscribe((v:any) => {
      this.loading = v;
    });

  }
  ngOnInit() {
  }
}
