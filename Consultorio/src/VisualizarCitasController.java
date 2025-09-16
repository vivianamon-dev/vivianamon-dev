import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.stage.Stage;

public class VisualizarCitasController {
    private MenuCitasController menuCitasController;
    private Stage stage2;
    @FXML
    private TableColumn<?, ?> columHora;

    @FXML
    private TableColumn<?, ?> columIDPaciente;

    @FXML
    private TableColumn<?, ?> columIdDentista;

    @FXML
    private TableColumn<?, ?> columnFechaCita;

    @FXML
    private TableColumn<?, ?> columnIdCita;

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
