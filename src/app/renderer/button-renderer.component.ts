// Author: T4professor

import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" #btn1 (click)="onBtn1Click($event)">{{label1}}</button>

    <button type="button"  #btn2 (click)="onBtn2Click($event)">{{label2}}</button>

    <button type="button" *ngIf="button2rednder===true" #btn3 (click)="onBtn3Click($event)">{{label3}}</button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  @ViewChild('btn1') button1: ElementRef;
  @ViewChild('btn2') button2: ElementRef;
  @ViewChild('btn2') button3: ElementRef;

  params;
  label1: string;
  label2: string;
  label3: string;

  button2rednder: boolean;
  button3render: boolean;

  agInit(params): void {
    this.params = params;
    this.label1 = this.params.label1 || null;
    this.label2 = this.params.label2 || null;
    this.label3 = this.params.label3 || null;
    this.button2rednder = this.params.button2rednder || false;
  }
  refresh(params?: any): boolean {
    return true;
  }

  onBtn1Click($event) {
    console.log($event)

    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);
      console.log(this.button2.nativeElement.hidden);
      if  (this.button2.nativeElement.hidden===false){
        this.button2.nativeElement.hidden=true;
        this.button2rednder=false
      }
      else{
        this.button2.nativeElement.hidden=false;
        this.button2rednder=true;
      }

    }
  }

  
  onBtn2Click($event) {
    console.log($event)

    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }

  onBtn3Click($event) {
    console.log($event)

    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
}