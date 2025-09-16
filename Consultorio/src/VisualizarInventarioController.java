import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.stage.Stage;

public class VisualizarInventarioController {
    private MenuInventarioController menuInventarioController;
    private Stage stage2;
    @FXML
    private Button btnRegresar;

    @FXML
    private TableColumn<?, ?> columId;

    @FXML
    private TableColumn<?, ?> columIdDentista;

    @FXML
    private TableColumn<?, ?> columIdProveedor;

    @FXML
    private TableColumn<?, ?> columNombreMat;

    @FXML
    private TableColumn<?, ?> columStock;

    @FXML
    void switchToMenuInventario(ActionEvent event) {
        menuInventarioController.show();
        stage2.close();

    }

    public void initi(Stage stage1, MenuInventarioController menuInventarioController) {
        this.menuInventarioController = menuInventarioController;
        this.stage2 = stage1;
    }

}

