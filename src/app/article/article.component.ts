import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @HostBinding( 'attr.class' ) cssClass: string = 'row';
  @Input() article!: Article;

  constructor() {}

  upVote(): boolean {
    this.article.upVote()

    return false
  }

  downVote():boolean {
    this.article.downVote()

    return false
  }

  ngOnInit(): void {
  }

}
