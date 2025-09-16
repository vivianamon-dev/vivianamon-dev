import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class BuscarPacienteController {
    private MenuArchivoController menuArchivoController;
    private Stage stage2;
    @FXML
    private Button btnRgresar;

    @FXML
    private TableColumn<?, ?> columApeMater;

    @FXML
    private TableColumn<?, ?> columApePater;

    @FXML
    private TableColumn<?, ?> columAvenida;

    @FXML
    private TableColumn<?, ?> columCalle;

    @FXML
    private TableColumn<?, ?> columCodigoPos;

    @FXML
    private TableColumn<?, ?> columColonia;

    @FXML
    private TableColumn<?, ?> columCorreoElect;

    @FXML
    private TableColumn<?, ?> columEdad;

    @FXML
    private TableColumn<?, ?> columFechaNac;

    @FXML
    private TableColumn<?, ?> columId;

    @FXML
    private TableColumn<?, ?> columLocalidad;

    @FXML
    private TableColumn<?, ?> columNombre;

    @FXML
    private TableColumn<?, ?> columSexo;

    @FXML
    private Button txfBuscar;

    @FXML
    private TextField txfNombre;

    @FXML
    void buscarPaciente(ActionEvent event) {

    }

    @FXML
    void switchToMenuArchivo(ActionEvent event) {
        menuArchivoController.show();
        stage2.close();

    }

    public void initi(Stage stage1, MenuArchivoController menuArchivoController) {
        this.menuArchivoController = menuArchivoController;
        this.stage2 = stage1;
    }

}

