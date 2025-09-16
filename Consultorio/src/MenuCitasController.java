import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class MenuCitasController {

    private MenuPrincipalController menuPrincipalController;
    private Stage stage1;

    @FXML
    private Button btnAgregarCita;

    @FXML
    private Button btnBuscarCita;

    @FXML
    private Button btnEliminarCita;

    @FXML
    private Button btnModificarCita;

    @FXML
    private Button btnRegresar;

    @FXML
    private Button btnVisualizarCita;
    
    @FXML
    void switchToAgregarCita(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("AgregarCita.fxml"));
        Parent root = loader.load();
        AgregarCitaController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    @FXML
    void switchToBuscarCita(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("BuscarCita.fxml"));
        Parent root = loader.load();
        BuscarCitaController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    @FXML
    void switchToEliminarCita(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("EliminarCita.fxml"));
        Parent root = loader.load();
        EliminarCitaController controller = loader.getController();
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
    void switchToModificarCita(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("ModificarCita.fxml"));
        Parent root = loader.load();
        ModificarCitaController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();


    }

    @FXML
    void switchToVisualizarCitas(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("VisualizarCitas.fxml"));
        Parent root = loader.load();
        VisualizarCitasController controller = loader.getController();
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

