import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class ModificarCitaController {
    private MenuCitasController menuCitasController;
    private Stage stage2;
    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnGuardarCambios;

    @FXML
    private TextField btnIdCita;

    @FXML
    private Button btnRegresar;

    @FXML
    private DatePicker dateFechaCita;

    @FXML
    private TextField txfHora;

    @FXML
    private TextField txfIdDentista;

    @FXML
    private TextField txfIdPaciente;

    @FXML
    void switchToAlerta(ActionEvent event) {

    }

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
