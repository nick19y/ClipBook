package ClipBook.api.domain.haircut;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HaicutRepository extends JpaRepository<Haircut, Long> {
    List<Haircut> findByFinalizedTrue();
}
