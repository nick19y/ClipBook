package ClipBook.api.domain.employee;

public record DataListEmployee(Long id, String name, Double evaluation) {
    public DataListEmployee(Employee employee){
        this(employee.getId(), employee.getName(), employee.getEvaluation());
    }
}
