import {Directive,ElementRef,Input,HostListener} from '@angular/core';

@Directive({
    selector:'[HighLight]'
})

export class HighLightDirective{
    @Input('HighLight') highlightColor:string;
    constructor(private el:ElementRef){
        // el.nativeElement.style.color=this.highlightColor
    }
    
    private highlight(color:string){
        this.el.nativeElement.style.color = color;
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.highlightColor)
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null)
    }
}