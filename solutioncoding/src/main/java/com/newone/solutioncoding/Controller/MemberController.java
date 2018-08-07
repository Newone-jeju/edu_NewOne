package com.newone.solutioncoding.Controller;


import com.newone.solutioncoding.Domain.ApiResponseMessage;
import com.newone.solutioncoding.Domain.Member;
import com.newone.solutioncoding.Domain.MemberRole;
import com.newone.solutioncoding.Repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;

    @GetMapping("/{id}")
    public Member get(@PathVariable Integer id) {
        return memberRepository.findById(id).get();
    }

    @PostMapping
    public ApiResponseMessage insert(@RequestBody Member member) {
        if (member.getEmail() == "" || member.getName() == "") {
            return new ApiResponseMessage(HttpStatus.BAD_REQUEST, 400);
        }
        try {
            MemberRole role = new MemberRole();
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            member.setPassword(passwordEncoder.encode(member.getPassword()));
            role.setRoleName("USER");
            member.setRoles(Arrays.asList(role));

            memberRepository.save(member);

            return new ApiResponseMessage(HttpStatus.OK, 200);
        } catch (Exception ex){
            return new ApiResponseMessage(HttpStatus.INTERNAL_SERVER_ERROR, 500, ex);
        }
    }

    @PutMapping
    public ApiResponseMessage update(@RequestBody Member member) {
        if (memberRepository.existsById(member.getId()) == true) {
            memberRepository.save(member);
            return new ApiResponseMessage(HttpStatus.OK, 200);
        } else {
            return new ApiResponseMessage(HttpStatus.BAD_REQUEST, 400);
        }
    }

    // Delete X
}
