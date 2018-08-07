package com.newone.solutioncoding.Domain;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
public class SecurityMember extends User {
    private static final String ROLE_PREFIX = "ROLE_";
    private static final long serialVersionUID = 1L;

    public SecurityMember(Member member)
    {
        super(member.getEmail(), member.getPassword(), makeGrantedAuthority(member.getRoles()));
    }

    private static Collection<? extends GrantedAuthority> makeGrantedAuthority(List<MemberRole> roles) {
        List<GrantedAuthority> list = new ArrayList<>();
        roles.forEach(role -> list.add(new SimpleGrantedAuthority(ROLE_PREFIX + role.getRoleName())));
        return list;
    }
}
