import { Component,Inject, PLATFORM_ID, ViewEncapsulation  } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AgGridAngular } from 'ag-grid-angular'; 
import { ColDef } from 'ag-grid-community'; 
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//   },
// });

@Component({
  selector: 'app-table-form',
  standalone: true,
  imports: [MatTabsModule, AgGridAngular, ReactiveFormsModule, FormsModule, MatNativeDateModule, MatButtonModule,
    CommonModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatIconModule],
  templateUrl: './table-form.component.html',
  styleUrl: './table-form.component.css',
  providers: [provideNativeDateAdapter()],
  encapsulation: ViewEncapsulation.None,

})
export class TableFormComponent {
  isBrowser: boolean;
  currentDate: string;
  readonly date = new FormControl(new Date());
  readonly serializedDate = new FormControl(new Date().toISOString());
  readonly status = new FormControl('Completed');
  formControl: FormControl<Date | null>;
  themeClass = 'ag-theme-alpine';
  // columnDefs :ColDef[] = [
    
  //   { field: 'ticketId', headerName: 'Ticket ID', checkboxSelection: true, sortable: true },
  //   { field: 'serviceGroup', headerName: 'Service Group', sortable: true },
  //   { field: 'serviceOrder', headerName: 'Service Order', sortable: true },
  //   { field: 'status', headerName: 'Status', cellRenderer: this.statusRenderer },
  //   { field: 'csg', headerName: 'CSG' },
  //   { field: 'primaryAssignee', headerName: 'Primary Assignee' },
  //   { field: 'genCode', headerName: 'Gen Code' },
  //   { field: 'branchCode', headerName: 'Branch Code' },
  //   { field: 'serviceWeek', headerName: 'Service Week' },
  //   { field: 'createdDate', headerName: 'Created Date' },
  // ];
  columnDefs :ColDef[] = [
  {
    headerName: 'Ticket ID',
    field: 'ticketId',
    checkboxSelection: true,
    cellRenderer: (params: { value: any; }) => {
      return `<a href="/ticket-details/${params.value}" class="text-primary">${params.value}</a>`;
    }
  },
  { headerName: 'Service Group', field: 'serviceGroup' },
  { headerName: 'Service Order', field: 'serviceOrder' },
  { headerName: 'Status', field: 'status' ,cellRenderer: this.statusRenderer },
  { headerName: 'CSG', field: 'csg' },
  { headerName: 'Primary Assignee', field: 'primaryAssignee' },
  { headerName: 'Gen Code', field: 'genCode' },
  { headerName: 'Branch Code', field: 'branchCode' },
  { headerName: 'Service Week', field: 'serviceWeek' },
  { headerName: 'Created Date', field: 'createdDate' }
];

  statuses: string[] = ['Open', 'In Progress', 'Escalated']; 
  
  rowData = [
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Completed',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Exclated',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Open',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Exclated',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Completed',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'In Progress',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Exclated',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Completed',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    {
      ticketId: '55290212',
      serviceGroup: 'Drum',
      serviceOrder: '95163577',
      status: 'Open',
      csg: 'SK-BSB-NZP-00',
      primaryAssignee: 'Waltz, Rob A',
      genCode: 'M023536-Hexionl...',
      branchCode: 'DSS-DES Moines...',
      serviceWeek: '30',
      createdDate: '2024/11/29',
    },
    // {
    //   ticketId: '55290212',
    //   serviceGroup: 'Drum',
    //   serviceOrder: '95163577',
    //   status: 'Exclated',
    //   csg: 'SK-BSB-NZP-00',
    //   primaryAssignee: 'Waltz, Rob A',
    //   genCode: 'M023536-Hexionl...',
    //   branchCode: 'DSS-DES Moines...',
    //   serviceWeek: '30',
    //   createdDate: '2024/11/29',
    // },
    // {
    //   ticketId: '55290212',
    //   serviceGroup: 'Drum',
    //   serviceOrder: '95163577',
    //   status: 'Completed',
    //   csg: 'SK-BSB-NZP-00',
    //   primaryAssignee: 'Waltz, Rob A',
    //   genCode: 'M023536-Hexionl...',
    //   branchCode: 'DSS-DES Moines...',
    //   serviceWeek: '30',
    //   createdDate: '2024/11/29',
    // },
    
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  };

  statusRenderer(params: any) {
    const status = params.value;
    
    const color =
    status === 'Completed' ? '#8FD14F' :
    status === 'Exclated' ? '#F29F58' :
    status === 'In Progress' ? '#F95454' :
    status === 'Open' ? '#979797' :
    '#979797';
  
  const backgroundColor =
    status === 'Completed' ? '#DFFFD6' : 
    status === 'Exclated' ? '#FFEFD5' :
    status === 'In Progress' ? '#fdb99e' : 
    '#e9e9e9'; 
  
  const ticketId = params.ticketId;
  
  return `<span style="color:${color}; background-color:${backgroundColor}; font-weight: 600; padding: 3px 5px; border-radius: 4px;">● ${status}</span>`;
  
    
  }
  

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    const initialValue = new Date();
    initialValue.setHours(12, 30, 0);
    this.formControl = new FormControl(initialValue);
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
  }
 
}
