import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class ModificarPacienteController {
    private MenuArchivoController menuArchivoController;
    private Stage stage2;
    @FXML
    private Button btnBuscar;

    @FXML
    private Button btnGuardarCambios;

    @FXML
    private Button btnRegresar;

    @FXML
    private DatePicker dateFechaNac;

    @FXML
    private TextField txfApeMater;

    @FXML
    private TextField txfApePater;

    @FXML
    private TextField txfAvenida;

    @FXML
    private TextField txfCalle;

    @FXML
    private TextField txfCodigoPos;

    @FXML
    private TextField txfColonia;

    @FXML
    private TextField txfCorreoElect;

    @FXML
    private TextField txfEdad;

    @FXML
    private TextField txfIdPaciente;

    @FXML
    private TextField txfLocalidad;

    @FXML
    private TextField txfNombre;

    @FXML
    private TextField txfSexo;

    @FXML
    void switchToAlerta(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("AlertaModificarArchivo.fxml"));
        Parent root = loader.load();
        AlertaModificarArchivo controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage3 = new Stage();
        stage3.setScene(scene);
        controller.initi(stage3, this);
        stage3.show();
        this.stage2.close();

    }

    @FXML
    void switchToMenuArchivo(ActionEvent event) {
        menuArchivoController.show();
        stage2.close();

    }

    public void initi(Stage stage1, MenuArchivoController menuArchivoController) {
        this.menuArchivoController = menuArchivoController;
        this.stage2 = stage1;
    }

}

