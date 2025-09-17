import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideMenuVitaEduComponent } from "../../componentes-dashboard/side-menu-vita-edu/side-menu-vita-edu.component";
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, AllCommunityModule, ModuleRegistry, themeQuartz, iconSetMaterial, GridOptions } from 'ag-grid-community';
import Swal from 'sweetalert2';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-statistics-dashboard-vita-edu',
  standalone: true,
  imports: [CommonModule, SideMenuVitaEduComponent, AgGridAngular],
  templateUrl: './statistics-dashboard-vita-edu.component.html',
  styleUrls: ['./statistics-dashboard-vita-edu.component.css']
})
export class StatisticsDashboardVitaEduComponent {
  constructor(private router: Router) {}

  Theme = themeQuartz
    .withPart(iconSetMaterial)
    .withParams({
      accentColor: "#114C5F",
      backgroundColor: "#FFFFFF",
      borderColor: "#D7E2E6",
      borderRadius: 10,
      browserColorScheme: "light",
      cellHorizontalPaddingScale: 0.7,
      fontFamily: {
        googleFont: "Nunito"
      },
      fontSize: 15,
      headerFontSize: 17,
      headerFontWeight: 400,
      headerTextColor: "#114C5F"
    });

  columnDefs: ColDef[] = [
    { headerName: 'No.', valueGetter: 'node.rowIndex + 1', flex: 0.5 },
    { headerName: 'Nombre del Estudiante', field: 'studentName', sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Nombre del Test', field: 'testName', sortable: true, filter: true, floatingFilter: true },
    { 
      headerName: 'Perfil', 
      field: 'profile', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      cellRenderer: (params: any) => {
        const link = document.createElement('a');
        link.href = 'javascript:void(0)';
        link.innerHTML = params.value;
        link.style.color = '#114C5F';
        link.style.textDecoration = 'underline';
        link.style.cursor = 'pointer';
        link.addEventListener('click', () => this.navigateToDetails(params.data.studentName));
        return link;
      }
    },
    { 
      headerName: 'Nivel de Estrés', 
      field: 'stressLevel', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      cellStyle: (params: any) => {
        switch (params.value) {
          case 'Alto':
            return { 
              backgroundColor: '#ffd7d9', 
              color: '#a51920',
              fontWeight: 'bold',
            };
          case 'Medio':
            return { 
              backgroundColor: '#fff4d1', 
              color: '#8e6d0c',
              fontWeight: 'bold',
            };
          case 'Bajo':
            return { 
              backgroundColor: '#d1e7ff', 
              color: '#0043ce',
              fontWeight: 'bold',
            };
          default:
            return null;
        }
      }
    },
    { headerName: 'Fecha', field: 'date', sortable: true, filter: true, floatingFilter: true }
  ];

  navigateToDetails(studentName: string) {
    Swal.fire({
      title: 'Confirmación',
      text: `¿Estás seguro que quieres ver los detalles de ${studentName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#114C5F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ver detalles',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/dashboard/statistics-detail-vita-edu']);
      }
    });
  }

  rowData = [
    { studentName: 'Ana García', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Alto', date: '2024-01-15' },
    { studentName: 'Carlos Rodríguez', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Medio', date: '2024-01-16' },
    { studentName: 'María López', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Bajo', date: '2024-01-17' },
    { studentName: 'Juan Pérez', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Alto', date: '2024-01-18' },
    { studentName: 'Laura Martínez', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Medio', date: '2024-01-19' },
    { studentName: 'Pedro Sánchez', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Bajo', date: '2024-01-20' },
    { studentName: 'Sofia Ramírez', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Alto', date: '2024-01-21' },
    { studentName: 'Diego Torres', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Medio', date: '2024-01-22' },
    { studentName: 'Carmen Flores', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Bajo', date: '2024-01-23' },
    { studentName: 'José González', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Alto', date: '2024-01-24' },
    { studentName: 'Isabel Morales', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Medio', date: '2024-01-25' },
    { studentName: 'Roberto Díaz', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Bajo', date: '2024-01-26' },
    { studentName: 'Patricia Vargas', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Alto', date: '2024-01-27' },
    { studentName: 'Miguel Castro', testName: 'Test de Ansiedad', profile: 'Estudiante', stressLevel: 'Medio', date: '2024-01-28' },
    { studentName: 'Andrea Ruiz', testName: 'Test de Estrés Académico', profile: 'Estudiante', stressLevel: 'Bajo', date: '2024-01-29' }
  ];

  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
    domLayout: 'normal',
    animateRows: true,
    rowSelection: 'single',
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true
    },
    suppressHorizontalScroll: false,
    rowHeight: 48
  };
}
