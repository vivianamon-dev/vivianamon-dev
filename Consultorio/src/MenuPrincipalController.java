
import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class MenuPrincipalController {
    private BienvenidaController bienvenidaController;
    private Stage stage;
    @FXML
    private Button btnArchivoClinico;

    @FXML
    private Button btnCitas;

    @FXML
    private Button btnDirectorio;

    @FXML
    private Button btnInventario;

    @FXML
    private Button btnRgresar;

    @FXML
    void switchToMenuArchivo(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("MenuArchivo.fxml"));
        Parent root = loader.load();
        MenuArchivoController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage1 = new Stage();
        stage1.setScene(scene);
        controller.initi(stage1, this);
        stage1.show();
        this.stage.close();

    }

    @FXML
    void switchToMenuCitas(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("MenuCitas.fxml"));
        Parent root = loader.load();
        MenuCitasController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage1 = new Stage();
        stage1.setScene(scene);
        controller.initi(stage1, this);
        stage1.show();
        this.stage.close();

    }

    @FXML
    void switchToMenuDirectorio(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("MenuDirectorio.fxml"));
        Parent root = loader.load();
        MenuDirectorioController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage1 = new Stage();
        stage1.setScene(scene);
        controller.initi(stage1, this);
        stage1.show();
        this.stage.close();
    }

    @FXML
    void switchToMenuInventario(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("MenuInventario.fxml"));
        Parent root = loader.load();
        MenuInventarioController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage1 = new Stage();
        stage1.setScene(scene);
        controller.initi(stage1, this);
        stage1.show();
        this.stage.close(); 
    }

    @FXML
    void switchToBienvenida(ActionEvent event) throws IOException {
        bienvenidaController.show();
        stage.close();
        
    }

    public void init(Stage stage, BienvenidaController bienvenidaController) {
        this.bienvenidaController = bienvenidaController;
        this.stage = stage;

    }

    public void show() {
        stage.show();
    }


}


