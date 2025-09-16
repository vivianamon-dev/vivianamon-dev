import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class BuscarCitaController {
    private MenuCitasController menuCitasController;
    private Stage stage2;

    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnRegresar;

    @FXML
    private TableColumn<?, ?> columFechaCita;

    @FXML
    private TableColumn<?, ?> columHora;

    @FXML
    private TableColumn<?, ?> columIdCita;

    @FXML
    private TableColumn<?, ?> columIdProveedor;

    @FXML
    private TableColumn<?, ?> columnIdDentista;

    @FXML
    private TextField txfIdPaciente;

    @FXML
    void switchToMenuCitas(ActionEvent event) {
        menuCitasController.show();
        stage2.close();

    }

    public void initi(Stage stage1, MenuCitasController menuCitasController) {
        this.menuCitasController = menuCitasController;
        this.stage2 = stage1;
    }

}

