import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; 
import { SideMenuVitaEduComponent } from "../../componentes-dashboard/side-menu-vita-edu/side-menu-vita-edu.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular'; 
import { ColDef, AllCommunityModule, ModuleRegistry, themeQuartz, iconSetMaterial, GridOptions, provideGlobalGridOptions } from 'ag-grid-community'; 
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions({theme: "legacy"})
@Component({
  selector: 'app-users-dashboard-vita-edu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideMenuVitaEduComponent, FontAwesomeModule, AgGridAngular],
  templateUrl: './users-dashboard-vita-edu.component.html',
  styleUrls: ['./users-dashboard-vita-edu.component.css']
})
export class UsersDashboardVitaEduComponent implements OnInit {
  faPlus = faPlus as IconProp;
  faEdit = faEdit as IconProp;
  faTrash = faTrash as IconProp;
  faUndo = faUndo as IconProp;
  currentStep = 1;
  documentsEnabled = false;
  professionalIdEnabled = false;

  Theme = themeQuartz
    .withPart(iconSetMaterial)
    .withParams({
      accentColor: "#114C5F",
      backgroundColor: "#FFFFFF",
      borderColor: "#D7E2E6",
      borderRadius: 10,
      browserColorScheme: "light",
      cellHorizontalPaddingScale: 0.7,
      chromeBackgroundColor: {
        ref: "backgroundColor"
      },
      columnBorder: false,
      fontFamily: {
        googleFont: "Nunito"
      },
      fontSize: 15,
      foregroundColor: "#555B62",
      headerBackgroundColor: "#FFFFFF",
      headerFontSize: 17,
      headerFontWeight: 400,
      headerTextColor: "#114C5F",
      rowBorder: true,
      rowVerticalPaddingScale: 0.8,
      sidePanelBorder: true,
      spacing: 6,
      wrapperBorder: false,
      wrapperBorderRadius: 2
    });

  columnDefs: ColDef[] = [
    { headerName: 'No.', valueGetter: 'node.rowIndex + 1', flex: 0.5 },
    { headerName: 'Nombre Completo', field: 'fullName', sortable: true, floatingFilter: true, filter: true, editable: true },
    { headerName: 'Especialidad', field: 'specialty', sortable: true,floatingFilter: true, filter: true, editable: true },
    { headerName: 'Institución', field: 'institution', sortable: true,floatingFilter: true, filter: true, editable: true },
    { headerName: 'Cédula Profesional', field: 'professionalId', sortable: true,floatingFilter: true, filter: true, editable: true },
    { 
      headerName: 'Rol', 
      field: 'role', 
      sortable: true, 
      filter: true,
      floatingFilter: true,
      editable: true, 
      cellEditor: 'agSelectCellEditor', 
      cellEditorParams: {
        values: ['Admin', 'Colaborador', 'Independiente']
      }
    },
    { 
      headerName: 'Acciones', 
      field: 'actions',
      sortable: false, 
      flex: 0.5,
      filter: false, 
      editable: false,
      cellRenderer: (params: any) => {
        const div = document.createElement('div');
        div.classList.add('action-buttons');
        
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-sm', 'btn-outline-primary', 'me-1');
        editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
        editBtn.addEventListener('click', () => this.onEdit(params));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-sm', 'btn-outline-danger');
        deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteBtn.addEventListener('click', () => this.onDelete(params));
        
        div.appendChild(deleteBtn);
        return div;
      }
    }
  ];

  rowData = [
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'Jane Smith', specialty: 'Biology', institution: 'UTCV', professionalId: '654321', role: 'Collaborator' },
    { fullName: 'Mike Johnson', specialty: 'Chemistry', institution: 'UTCV', professionalId: '112233', role: 'Collaborator'},
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
    { fullName: 'John Doe', specialty: 'Engineering', institution: 'UTCV', professionalId: '123456', role: 'Collaborator' },
  ];



  // submitAddUser() {
  //   if (this.addUserForm.valid) {
  //     Swal.fire({
  //       title: 'Registro exitoso',
  //       text: 'El usuario ha sido registrado correctamente.',
  //       icon: 'success',
  //       confirmButtonText: 'Aceptar'
  //     });
  //   } else {
  //     Swal.fire({
  //       title: 'Error en el registro',
  //       text: 'Por favor, complete todos los campos requeridos.',
  //       icon: 'error',
  //       confirmButtonText: 'Aceptar'
  //     });
  //   }
  // }

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
    rowHeight: 48  // Optional: set a fixed row height
  };

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
          Swal.fire(
            '¡Guardado!',
            'El cambio ha sido guardado correctamente.',
            'success'
          );
        } else {
          // Revertir el cambio
          event.node.setDataValue(event.colDef.field, event.oldValue);
        }
      });
    }
  }

  onEdit(params: any) {
    Swal.fire({
      title: '¿Está seguro?',
      text: "¿Desea modificar este parámetro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, modificar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Modificado!',
          'Su parámetro ha sido modificado.',
          'success'
        );
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
        // Aquí iría la lógica para eliminar el registro
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        );
      }
    });
  }

  addUserForm: FormGroup;
  tieneCedula: boolean = false;

  constructor(private fb: FormBuilder) {
    this.addUserForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      tieneCedula: [false],
      cedulaProfesional: [{value: '', disabled: true}],
      institucion: ['', [Validators.required]],
      documentos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    // Initialize any required setup here
    console.log('Component initialized');
  }

  toggleCedulaProfesional(event: any) {
    const cedulaControl = this.addUserForm.get('cedulaProfesional');
    if (event.target.checked) {
      cedulaControl?.enable();
    } else {
      cedulaControl?.disable();
    }
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      Swal.fire({
        title: '¿Está seguro?',
        text: "¿Desea agregar este nuevo colaborador?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, agregar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Agregado!',
            'El colaborador ha sido agregado exitosamente.',
            'success'
          );
          this.addUserForm.reset();
          // Cerrar el modal
          const modalElement = document.getElementById('addUserModal');
          if (modalElement) {
            // Using vanilla JS to close modal since bootstrap is not imported
            modalElement.style.display = 'none';
            // Remove modal backdrop if exists
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
              backdrop.remove();
            }
            // Remove modal-open class from body
            document.body.classList.remove('modal-open');
          }
        }
      });
    } else {
      Swal.fire(
        'Error',
        'Por favor, complete todos los campos requeridos correctamente.',
        'error'
      );
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
        this.addUserForm.reset();
      }
    });
  }
}
