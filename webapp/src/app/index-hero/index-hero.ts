import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-hero',
  imports: [],
  templateUrl: './index-hero.html',
  styleUrl: './index-hero.css',
})
export class IndexHero implements OnInit {
  title!: string;
  description!: string;
  stars!: number;
  heroImage!: string;

  ngOnInit() {
    this.title = 'LDNC';
    this.description = 'Le meilleur projet de tous les temps';
    this.stars = 5;
    this.heroImage = 'carouselle/index/img0.jpg';
  }

  onImage0() {
    this.heroImage = 'carouselle/index/img0.jpg';
  }
  onImage1() {
    this.heroImage = 'carouselle/index/img1.jpg';
  }
  onImage2() {
    this.heroImage = 'carouselle/index/img2.jpg';
  }
  onImage3() {
    this.heroImage = 'carouselle/index/img3.jpg';
  }
  onImage4() {
    this.heroImage = 'carouselle/index/img4.jpg';
  }
}