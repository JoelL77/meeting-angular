import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { FilterEnum } from 'src/app/shared/filters/enum/filters.enum';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { Filters } from 'src/app/shared/filters/interface/filters.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { FilterService } from '../../../../shared/filters/services/filter.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {

  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;  listPost: Post[] = [];

  

  
  spinner = true;

  paginate: any = 1;

  totalRecords = 0;

  size = 10;

  query: any = [];
  filters: Filters = {
    autoSend: false,
    method: Method.POST,
    filtersCustom: [
     
      {
        type: FilterEnum.CHECKBOX,
        col: 'col-12 mt-3 mt-md-2',
        title: 'COMO ADAPTAR AQUI EL MULTISELECT',
        nameFilter: 'technologies',
        valueFilter: '',
        checkboxItems: {
          column: false,
          items: [
            // {
            //   label: 'Angular',
            //   value: 'Angular',
            // },
            // {
            //   label: 'React',
            //   value: 'React',
            // },
            // {
            //   label: 'Vue',
            //   value: 'Vue',
            // },
            // {
            //   label: 'Spring',
            //   value: 'Spring',
            // },
            // {
            //   label: 'Node.js',
            //   value: 'Nodejs',
            // },
            // {
            //   label: 'Javascript',
            //   value: 'Javascript',
            // },
            // {
            //   label: 'Java',
            //   value: 'Java',
            // },
            // {
            //   label: 'Python',
            //   value: 'python',
            // },
            // {
            //   label: 'C',
            //   value: 'c',
            // },
            // {
            //   label: 'Typescript',
            //   value: 'typescript',
            // },
          ],
        },
      },
    ],
  };

  constructor(
    private messageService: MessageService,
    private postService: PostService,
    private filtersService: FilterService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
       this.postService.getAllPost(this.query,this.paginate).subscribe(
      (data) => {
        console.log(data);
        
        this.listPost = data.results;
        this.totalRecords = data.count
        this.spinner = false;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    );
  }

  getFilters() {
    this.query = this.filtersService.getFilters();
    this.query.method = this.filters.method;
    this.spinner = true;
    this.getAllPosts();
  }

  paginatePosts(event){
    this.paginate = event.page + 1;
    this.size = event.rows;
    this.getAllPosts();
  }
}
