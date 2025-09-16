public class Paciente {
    private int id_paciente;
    private String nombre;
    private String apellido_paterno;
    private String apellido_materno;
    private String sexo;
    private String fecha_nacimiento;
    private short edad;
    private String correo_electronico;
    private String calle;
    private String avenida;
    private String localidad;
    private String colonia;
    private short codigo_postal;

    

    public Paciente(int id_paciente, String nombre, String apellido_paterno, String apellido_materno, String sexo, String fecha_nacimiento, 
    short edad, String correo_electronico, String calle, String avenida,String localidad, String colonia,short codigo_postal) {
        this.id_paciente = id_paciente;
        this.nombre = nombre;
        this.apellido_paterno = apellido_paterno;
        this.apellido_materno = apellido_materno;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.edad = edad;
        this.correo_electronico = correo_electronico;
        this.calle = calle;
        this.avenida = avenida;
        this.localidad = localidad;
        this.colonia = colonia;
        this.codigo_postal = codigo_postal;

    }

    public Paciente() {
    }

    public Paciente(int id_paciente2, int codigo_postal2, String apellido_paterno2, String apellido_materno2,
            String sexo2, String fecha_nacimiento2, int edad2, String correo_electronico2, String calle2,
            String avenida2, String localidad2, String colonia2, int codigo_postal3) {
    }

    // Getters y setters
    public int getId_paciente() {
        return id_paciente;
    }
    public void setId_paciente(int id_paciente) {
        this.id_paciente = id_paciente;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getSexo() {
        return sexo;
    }
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    public String getApellido_paterno() {
        return apellido_paterno;
    }
    public void setApellido_paterno(String apellido_paterno) {
        this.apellido_paterno = apellido_paterno;
    }
    public String getApellido_materno() {
        return apellido_materno;
    }
    public void setApellido_materno(String apellido_materno) {
        this.apellido_materno = apellido_materno;
    }
    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }
    public void setFecha_nacimiento(String fecha_nacimiento2) {
        this.fecha_nacimiento = fecha_nacimiento2;
    }
    public short getEdad() {
        return edad;
    }
    public void setEdad(short edad) {
        this.edad = edad;
    }
    public String getCorreo_electronico() {
        return correo_electronico;
    }
    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }
    public String getCalle() {
        return calle;
    }
    public void setCalle(String calle) {
        this.calle = calle;
    }
    public String getAvenida() {
        return avenida;
    }
    public void setAvenida(String avenida) {
        this.avenida = avenida;
    }
    public String getLocalidad() {
        return localidad;
    }
    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }
    public String getColonia() {
        return colonia;
    }
    public void setColonia(String colonia) {
        this.colonia = colonia;
    }
    public short getCodigo_postal() {
        return codigo_postal;
    }
    public void setCodigo_postal(short codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    @Override
    public String toString() {
        return id_paciente + ":" + nombre + ":" + apellido_paterno + ":" + apellido_materno + ":" + sexo + ":" + fecha_nacimiento + ":" + edad + ":" + correo_electronico + ":" + calle + ":" + avenida + ":" + localidad + ":" + colonia + ":" + codigo_postal;
    }

    public void add(Paciente paciente) {
    }

}