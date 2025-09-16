import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class MenuInventarioController {
    private MenuPrincipalController menuPrincipalController;
    private Stage stage1;
    @FXML
    private Button btnAgregarMaterial;

    @FXML
    private Button btnBuscarMaterial;

    @FXML
    private Button btnEliminarMaterial;

    @FXML
    private Button btnModificarMaterial;

    @FXML
    private Button btnRegresar;

    @FXML
    private Button btnVisualizarInventario;

    @FXML
    void switchToAgregarMaterial(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("AgregarMaterial.fxml"));
        Parent root = loader.load();
        AgregarMaterialController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    @FXML
    void switchToBuscarMaterial(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("BuscarMaterial.fxml"));
        Parent root = loader.load();
        BuscarMaterialController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    @FXML
    void switchToEliminarMaterial(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("EliminarMaterial.fxml"));
        Parent root = loader.load();
        EliminarMaterialController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    @FXML
    void switchToMenuPrincipal(ActionEvent event) {
        menuPrincipalController.show();
        stage1.close();

    }

    @FXML
    void switchToModificarMaterial(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("ModificarMaterial.fxml"));
        Parent root = loader.load();
        ModificarMaterialController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();


    }

    @FXML
    void switchToVisualizarInventario(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("VisualizarInventario.fxml"));
        Parent root = loader.load();
        VisualizarInventarioController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    public void initi(Stage stage, MenuPrincipalController menuPrincipalController) {
        this.menuPrincipalController = menuPrincipalController;
        this.stage1 = stage;
    }

    public void show() {
        stage1.show();;
    }

}
