import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class DentistaController {

    private MenuDirectorioController menuDirectorioController;
    private Stage stage2;
    @FXML
    private Button btnAgregarDentista;

    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnEliminar;

    @FXML
    private Button btnModificar;

    @FXML
    private Button btnMostrarDen;

    @FXML
    private Button btnRegresar;

    @FXML
    private TableColumn<?, ?> columApeMater;

    @FXML
    private TableColumn<?, ?> columApePater;

    @FXML
    private TableColumn<?, ?> columCedula;

    @FXML
    private TableColumn<?, ?> columIdDentista;

    @FXML
    private TableColumn<?, ?> columNombreDen;

    @FXML
    private TableColumn<?, ?> columnIdDentista;

    @FXML
    private TextField txfApeMater;

    @FXML
    private TextField txfApePater;

    @FXML
    private TextField txfCedula;

    @FXML
    private TextField txfIdDentista;

    @FXML
    private TextField txfNombreDen;

    @FXML
    private TextField txtApeMater;

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

