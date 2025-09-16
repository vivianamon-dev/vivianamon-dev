import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Tab;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class NumerosController {
    private MenuDirectorioController menuDirectorioController;
    private Stage stage2;
    @FXML
    private Button btnAgregar;

    @FXML
    private Button btnAgregarNum;

    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnEliminar;

    @FXML
    private Button btnMostrarNum;

    @FXML
    private Button btnRegresar;

    @FXML
    private TableColumn<?, ?> columIdDentista;

    @FXML
    private TableColumn<?, ?> columIdPaciente;

    @FXML
    private TableColumn<?, ?> columIdProovedor;

    @FXML
    private TableColumn<?, ?> columIdTel;

    @FXML
    private TableColumn<?, ?> columNumTelef;

    @FXML
    private TableColumn<?, ?> columnIdDentista;

    @FXML
    private Tab tabAgregar;

    @FXML
    private Tab tabBorrar;

    @FXML
    private Tab tabEliminar;

    @FXML
    private Tab tabModificar;

    @FXML
    private Tab tabVisualizar;

    @FXML
    private TextField txfIdDentista;

    @FXML
    private TextField txfIdNum;

    @FXML
    private TextField txfIdPaciente;

    @FXML
    private TextField txfIdProovedor;

    @FXML
    private TextField txfIdTel;

    @FXML
    private TextField txfNumTelef;

    @FXML
    void switchToAlerta(ActionEvent event) {

    }

    @FXML
    void switchToMenuDirectorio(ActionEvent event) {
        menuDirectorioController.show();
        stage2.close();

    }

    public void initi(Stage stage1, MenuDirectorioController menuDirectorioController) {
        this.menuDirectorioController = menuDirectorioController;
        this.stage2 = stage1;
    }

}
