import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Tab;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class ProveedoresController {
    private MenuDirectorioController menuDirectorioController;
    private Stage stage2;
    @FXML
    private Button btnAgregarProvee;

    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnEliminar;

    @FXML
    private Button btnModificar;

    @FXML
    private Button btnProovedores;

    @FXML
    private Button btnRegresar;

    @FXML
    private TableColumn<?, ?> columApeMater;

    @FXML
    private TableColumn<?, ?> columApePater;

    @FXML
    private TableColumn<?, ?> columIdProveedor;

    @FXML
    private TableColumn<?, ?> columNombreProvee;

    @FXML
    private TableColumn<?, ?> columNombreProveedor;

    @FXML
    private TableColumn<?, ?> columnApeMater;

    @FXML
    private TableColumn<?, ?> columnApePater;

    @FXML
    private TableColumn<?, ?> columnIdProveedor;

    @FXML
    private TableColumn<?, ?> columnNombreProve;

    @FXML
    private TableColumn<?, ?> columnoApeMater;

    @FXML
    private Tab tabAgregar;

    @FXML
    private Tab tabBuscar;

    @FXML
    private Tab tabEliminar;

    @FXML
    private Tab tabModificar;

    @FXML
    private Tab tabVisualizar;

    @FXML
    private TextField txFNombreProvee;

    @FXML
    private TextField txfApeMater;

    @FXML
    private TextField txfApePater;

    @FXML
    private TextField txfIdProvee;

    @FXML
    private TextField txfNomProvedor;

    @FXML
    private TextField txfNomProveedor;

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
