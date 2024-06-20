import { Component, OnInit } from '@angular/core';
import { TaskServicesService } from 'src/services/task-services.service';
// import {getTasks} from '../../../Backend/controllers/getTasks'

interface taskObj {
  "title": string,
  "description": string,
  "dueDate": string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  taskData!: taskObj;
  constructor(public taskService: TaskServicesService) { 
  }

  ngOnInit(): void {
    this.getTasks(event);
  }

  getTasks(event: any) {
    this.taskService.getTasks().subscribe({
      next: (response) => {
        this.data = response; // Assign response data to component property
        console.log(this.data); // Log the data received
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      }
    });
  }

}
