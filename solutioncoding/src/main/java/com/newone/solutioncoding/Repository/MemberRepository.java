package com.newone.solutioncoding.Repository;


import com.newone.solutioncoding.Domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByEmail(String email);
}
