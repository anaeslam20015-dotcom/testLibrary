import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { DataService } from '../data/data.service';
import { ColDef } from 'ag-grid-community';
import { ProductData } from './productData';

@Component({
  selector: 'app-table-project',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './table-project.component.html',
  styleUrl: './table-project.component.css',
})
export class TableProjectComponent {
  constructor(private service: DataService) {}

  rowData: ProductData[] = [];

  ngOnInit() {
    this.service.getData().subscribe({
      next: (product: any) => {
        this.rowData = product.products;
        console.log(this.rowData);
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }

  colDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', filter: 'agNumberColumnFilter', flex: 0 },
    {
      field: 'title',
      headerName: 'Title',
      flex: 2,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'price',
      headerName: 'Price',
      filter: 'agNumberColumnFilter',
      cellStyle: { fontWeight: 'bold' },
      valueFormatter: (price) => {
        return `$${price.value}`;
      },
    },
    {
      field: 'rating',
      headerName: 'Rating',
      filter: 'agNumberColumnFilter',
      cellStyle: (rating) => {
        if (rating.value < 1.5) {
          return { color: 'red', fontWeight: 'bold' };
        } else if (rating.value < 3.5) {
          return { color: 'orange', fontWeight: 'bold' };
        }
        return { color: 'green', fontWeight: 'bold' };
      },
    },
    { field: 'category', headerName: 'Category', filter: 'agTextColumnFilter' },
    {
      field: 'stock',
      headerName: 'Stock',
      filter: 'agNumberColumnFilter',
      cellStyle: (stock) => {
        if (stock.value < 20) {
          return { color: 'red', fontWeight: 'bold' };
        } else if (stock.value < 50) {
          return { color: 'orange', fontWeight: 'bold' };
        }
        return { color: 'green', fontWeight: 'bold' };
      },
    },
    {
      field: 'discountPercentage',
      headerName: 'Discount',
      valueFormatter: (discount) => {
        return `${discount.value}%`;
      },
      cellStyle: { fontWeight: 'bold' },
    },
  ];

  defaultColDef = {
    sortable: true,
    resizable: true,
    editable: false,
    flex: 1,
    width: 100,
  };
}
