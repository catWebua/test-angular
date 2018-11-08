import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ArticleService } from './article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;   

    constructor(private articleService: ArticleService) {}
    
    displayedColumns: string[] = ['id', 'colorName', 'hexValue'];
    dataSource = new MatTableDataSource(this.articleService.getAllArticles());
  
    ngOnInit() {
      this.dataSource.sort = this.sort;
    }    
}