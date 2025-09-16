import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class AlertaAgregarArchivoController {
    private AgregarPacienteController agregarPacienteController;
    private Stage stage3;

    @FXML
    private Button btnOK;

    @FXML
    void switchToMenuArchivo(ActionEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("MenuArchivo.fxml"));
        Parent root = loader.load();
        MenuArchivoController controller = loader.getController();
        Scene scene = new Scene(root);
        Stage stage2 = new Stage();
        stage2.setScene(scene);
        controller.initia(stage2, this);
        stage2.show();
        this.stage3.close();
        

    }

    public void initi(Stage stage2, AgregarPacienteController agregarPacienteController2) {
        this.agregarPacienteController = agregarPacienteController2;
        this.stage3 = stage2;
    }

}
