import { Component } from '@angular/core';
import { IonToolbar } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  title = "Grocery List";
  items = [
    {
      name: "milk",
      quantity: 2
    },

    {
      name: "Hotdogs",
      quantity: 4
    },

  ];

  constructor(public alertController: AlertController) {

  }

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    this.items.splice(index, 1);
  }

  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    this.showEditItemPrompt(item, index);
    
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
    
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Quantity'
        },
  
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Saved', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

  async showEditItemPrompt(item, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Quantity',
          value: item.quantity
        },
  
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Saved', item);
            this.items[index] = item; 
          }
        }
      ]
    });

    await alert.present();
  }



}
