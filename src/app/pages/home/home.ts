import { Component } from '@angular/core';
import { DataService } from '../../services/dataService';
import { config } from '../../config/appConfig';
import { User } from '../../model/User';
import { Search } from '../../sharedComponents/search'

@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
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
