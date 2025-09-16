import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class MenuArchivoController {
    private MenuPrincipalController menuPrincipalController;
    private AlertaAgregarArchivoController alertaAgregarArchivoController;
    private AlertaModificarArchivo alertaModificarArchivo;
    private Stage stage1;
    @FXML
    private Button btnAgregarPacientes;

    @FXML
    private Button btnBuscarPacientes;

    @FXML
    private Button btnEliminarPacientes;

    @FXML
    private Button btnModificarPacientes;

    @FXML
    private Button btnRegresar;

    @FXML
    private Button btnVisualizarPacientes;

    @FXML
    void switchToAgregarPaciente(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("AgregarPaciente.fxml"));
        Parent root = loader.load();
        AgregarPacienteController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();
 
    }

    @FXML
    void switchToBuscarPaciente(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("BuscarPaciente.fxml"));
        Parent root = loader.load();
        BuscarPacienteController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();

    }

    @FXML
    void switchToEliminarPaciente(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("EliminarPaciente.fxml"));
        Parent root = loader.load();
        EliminarPacienteController controller = loader.getController();
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
    void switchToModificarPaciente(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("ModificarPaciente.fxml"));
        Parent root = loader.load();
        ModificarPacienteController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initi(stage2, this);
        stage2.show();
        this.stage1.close();


    }

    @FXML
    void switchToVisualizarPaciente(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("VisualizarPaciente.fxml"));
        Parent root = loader.load();
        VisualizarPacienteController controller = loader.getController();
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

    public void initia(Stage stage2, AlertaAgregarArchivoController alertaAgregarArchivoController) {
        this.alertaAgregarArchivoController = alertaAgregarArchivoController;
        this.stage1 = stage2;
    }

    public void initial(Stage stage2, AlertaModificarArchivo alertaModificarArchivo) {
        this.alertaModificarArchivo = alertaModificarArchivo;
        this.stage1 = stage2;
    }


}
