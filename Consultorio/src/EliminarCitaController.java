import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class EliminarCitaController {
    private MenuCitasController menuCitasController;
    private Stage stage2;

    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnEliminar;

    @FXML
    private Button btnRegresar;

    @FXML
    private TableColumn<?, ?> columFechaCita;

    @FXML
    private TableColumn<?, ?> columIdCita;

    @FXML
    private TableColumn<?, ?> columIdDentista;

    @FXML
    private TableColumn<?, ?> columnHora;

    @FXML
    private TableColumn<?, ?> columnIdPaciente;

    @FXML
    private TextField txfIdCita;

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
