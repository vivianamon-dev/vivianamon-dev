import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, AllCommunityModule, ModuleRegistry, themeQuartz, iconSetMaterial, GridOptions } from 'ag-grid-community';
import { SideMenuVitaEduComponent } from '../../componentes-dashboard/side-menu-vita-edu/side-menu-vita-edu.component';
import Swal from 'sweetalert2';

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRecommendation {
  studentName: string;
  university: string;
  title: string;
  message: string;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-recommendations-dashboard-vita-edu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideMenuVitaEduComponent, AgGridAngular, FontAwesomeModule],
  templateUrl: './recommendations-dashboard-vita-edu.component.html',
  styleUrl: './recommendations-dashboard-vita-edu.component.css'
})
export class RecommendationsDashboardVitaEduComponent implements OnInit {
  faPlus = faPlus as IconProp;
  faEdit = faEdit as IconProp;
  faTrash = faTrash as IconProp;
  faUndo = faUndo as IconProp;

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
    { 
      headerName: 'No.', 
      valueGetter: 'node.rowIndex + 1', 
      flex: 0.5,
      editable: false 
    },
    { 
      headerName: 'Nombre del Estudiante', 
      field: 'studentName', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      editable: (params) => params.data.status === 'Borrador'
    },
    { 
      headerName: 'Universidad', 
      field: 'university', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      editable: (params) => params.data.status === 'Borrador'
    },
    { 
      headerName: 'Título', 
      field: 'title', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      editable: (params) => params.data.status === 'Borrador'
    },
    { 
      headerName: 'Mensaje', 
      field: 'message', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      editable: (params) => params.data.status === 'Borrador',
      cellEditor: 'agLargeTextCellEditor',
      cellEditorPopup: true,
      cellEditorParams: {
        maxLength: 1000,
        rows: 10,
        cols: 50
      },
      onCellDoubleClicked: (params: any) => {
        if (params.data.status === 'Enviado') {
          Swal.fire({
            title: 'Mensaje Completo',
            text: params.value,
            width: '80%',
            confirmButtonColor: '#114C5F'
          });
        }
      }
    },
    { 
      headerName: 'Estado', 
      field: 'status', 
      sortable: true, 
      filter: true,
      floatingFilter: true,
      cellEditor: 'agSelectCellEditor',
      editable: (params) => params.data.status !== 'Enviado',
      cellEditorParams: {
        values: ['Enviado', 'Borrador']
      },
      cellStyle: (params: any) => {
        if (params.value === 'Enviado') {
          return { backgroundColor: '#d4edda', color: '#155724' };
        } else if (params.value === 'Borrador') {
          return { backgroundColor: '#fff3cd', color: '#856404' };
        }
        return null;
      }
    },
    { 
      headerName: 'Fecha de Creación', 
      field: 'createdAt', 
      sortable: true, 
      filter: true, 
      floatingFilter: true,
      editable: false
    },
    { 
      headerName: 'Acciones', 
      field: 'actions',
      sortable: false, 
      filter: false,
      editable: false,
      flex: 0.5,
      cellRenderer: (params: any) => {
        const div = document.createElement('div');
        div.classList.add('action-buttons');
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-sm', 'btn-outline-danger');
        deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteBtn.addEventListener('click', () => {
          if (params.data.status === 'Enviado') {
            Swal.fire({
              title: 'No se puede eliminar',
              html: `
                <p>Lo sentimos, el mensaje una vez enviado ya no se puede borrar.</p>
                <p>Si hay algún error, por favor contacte con soporte técnico.</p>
              `,
              icon: 'error',
              confirmButtonColor: '#114C5F'
            });
          } else {
            this.onDelete(params);
          }
        });
        
        div.appendChild(deleteBtn);
        return div;
      }
    }
  ];

  // Sample row data
  rowData: IRecommendation[] = [
    { 
      studentName: 'Juan Pérez',
      university: 'UTCV',
      title: 'Manejo del Estrés',
      message: 'Necesita apoyo para manejar el estrés académico. El estudiante ha mostrado signos de ansiedad durante los períodos de exámenes y requiere estrategias específicas para manejar la presión académica.',
      status: 'Enviado',
      createdAt: '2024-01-15'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },{ 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    },
    { 
      studentName: 'María García',
      university: 'ITO',
      title: 'Técnicas de Estudio',
      message: 'Requiere orientación en métodos de estudio. La estudiante tiene dificultades para organizar su tiempo y mantener un horario de estudio efectivo. Se recomienda asesoría en técnicas de planificación y métodos de estudio activo.',
      status: 'Borrador',
      createdAt: '2024-01-16'
    }
  ];

  // Update the form initialization to match new status options
  private initForm() {
    this.recommendationForm = this.fb.group({
      studentName: ['', [Validators.required]],
      university: ['', [Validators.required]],
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
      status: ['Borrador', [Validators.required]]  // Changed from 'Pendiente' to 'Borrador'
    });
  }

  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
    domLayout: 'normal',  // Changed from 'autoHeight' to 'normal'
    animateRows: true,
    rowSelection: 'single',
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      filter: true,
      sortable: true,
      resizable: true,
      editable: true
    },
    onCellValueChanged: (event) => this.onCellValueChanged(event),
    suppressHorizontalScroll: false,  // Enable horizontal scrolling if needed
    rowHeight: 48,  // Optional: set a fixed row height
  };

  recommendationForm!: FormGroup;  // Add the ! operator here

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  

  ngOnInit() {
    console.log('Component initialized');
  }

  onCellValueChanged(event: any) {
    if (event.oldValue !== event.newValue) {
      Swal.fire({
        title: 'Cambio Detectado',
        html: `
          <p><strong>Campo:</strong> ${event.colDef.headerName}</p>
          <p><strong>Valor anterior:</strong> ${event.oldValue}</p>
          <p><strong>Nuevo valor:</strong> ${event.newValue}</p>
        `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar cambio',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Guardado!', 'El cambio ha sido guardado correctamente.', 'success');
        } else {
          event.node.setDataValue(event.colDef.field, event.oldValue);
        }
      });
    }
  }

  onEdit(params: any) {
    Swal.fire({
      title: 'Editar Recomendación',
      html: `
        <div class="form-group">
          <label for="message" class="mb-2">Mensaje:</label>
          <textarea id="message" class="form-control" style="height: 200px">${params.data.message}</textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;
        if (!message) {
          Swal.showValidationMessage('El mensaje no puede estar vacío');
        }
        return message;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        params.node.setDataValue('message', result.value);
        Swal.fire('¡Guardado!', 'El mensaje ha sido actualizado correctamente.', 'success');
      }
    });
  }

  onDelete(params: any) {
    Swal.fire({
      title: '¿Está seguro?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Eliminado!', 'La recomendación ha sido eliminada.', 'success');
      }
    });
  }

  onSubmit() {
    if (this.recommendationForm.valid) {
      Swal.fire({
        title: '¿Está seguro?',
        text: "¿Desea agregar esta nueva recomendación?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, agregar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Agregado!', 'La recomendación ha sido agregada exitosamente.', 'success');
          this.recommendationForm.reset();
        }
      });
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos requeridos correctamente.', 'error');
    }
  }

  onCancel() {
    Swal.fire({
      title: '¿Está seguro?',
      text: "Se perderán los datos ingresados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'Continuar editando'
    }).then((result) => {
      if (result.isConfirmed) {
        this.recommendationForm.reset();
      }
    });
  }
}