import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class MenuDirectorioController {
    private MenuPrincipalController menuPrincipalController;
    private Stage stage1;
    @FXML
    private Button btnDentistas;

    @FXML
    private Button btnNumeros;

    @FXML
    private Button btnProveedores;

    @FXML
    private Button btnRegresar;

    @FXML
    void switchToDentista(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("Dentista.fxml"));
        Parent root = loader.load();
        DentistaController controller = loader.getController();
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
    void switchToNumeros(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("Numeros.fxml"));
        Parent root = loader.load();
        NumerosController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();
    }

    @FXML
    void switchToProveedores(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("Proveedores.fxml"));
        Parent root = loader.load();
        ProveedoresController controller = loader.getController();
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
        stage1.show();
    }

}
