import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
    @ViewChild('colorContainer') colorContainer: ElementRef;
    colors: string[] = [
        '#C23F61', '#C23F9E', '#9C3FC2', '#7D3FC2', '#3F4BC2',
        '#40C7D7', '#3FC296', '#3FC245', '#CED740', '#D7A040'
    ];


    constructor(private renderer: Renderer2) {

    }

    ngOnInit(): void {

    }

    changeColor() {
        let randomNum = Math.floor(Math.random() * this.colors.length);
        this.renderer.setStyle(this.colorContainer.nativeElement, 'backgroundColor', this.colors[randomNum]);
    }
}
