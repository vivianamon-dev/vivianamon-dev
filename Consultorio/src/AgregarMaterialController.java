import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class AgregarMaterialController {
    private MenuInventarioController menuInventarioController;
    private Stage stage2;
    @FXML
    private Button btnAgregarMaterial;

    @FXML
    private Button btnRegresar;

    @FXML
    private TextField txfIdDentista;

    @FXML
    private TextField txfIdProveedor;

    @FXML
    private TextField txfNombreMat;

    @FXML
    private TextField txfStock;

    @FXML
    void switchToAlerta(ActionEvent event) {

    }

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

