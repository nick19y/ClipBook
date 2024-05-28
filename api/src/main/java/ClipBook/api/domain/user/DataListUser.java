package ClipBook.api.domain.user;

public record DataListUser(Long id, String name, String birth_date, String login, String phone_number) {
    public DataListUser(User user){
        this(user.getId(), user.getName(), user.getBirth_date(), user.getLogin(), user.getPhone_number());
    }
}
