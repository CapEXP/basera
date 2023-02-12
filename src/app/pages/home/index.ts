import { Component } from '@angular/core';
import { DataService } from '../../services/dataService';
import { config } from '../../../config/appConfig';
import { User } from '../../model/User';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class Home {
  title: string = 'basera';
  users: User[] = []

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.getData(`${config.user}`)
      .subscribe((response: any) => {
        this.users = response.users
      });
  }
}
