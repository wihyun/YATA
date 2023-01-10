package com.yata.backend.domain.yata.service;

import com.yata.backend.domain.member.entity.Member;
import com.yata.backend.domain.member.repository.JpaMemberRepository;
import com.yata.backend.domain.member.service.MemberService;
import com.yata.backend.domain.yata.entity.Yata;
import com.yata.backend.domain.yata.entity.YataRequest;
import com.yata.backend.domain.yata.repository.yataRepo.JpaYataRepository;
import com.yata.backend.domain.yata.repository.yataRequestRepo.JpaYataRequestRepository;
import com.yata.backend.global.exception.CustomLogicException;
import com.yata.backend.global.exception.ExceptionCode;
import org.springframework.data.domain.Page;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class YataRequestServiceImpl implements YataRequestService {
    private final JpaYataRequestRepository jpaYataRequestRepository;
    private final MemberService memberService;
    private final JpaMemberRepository jpaMemberRepository;
    private final JpaYataRepository jpaYataRepository;
    private final YataServiceImpl yataService;

    public YataRequestServiceImpl(JpaYataRequestRepository jpaYataRequestRepository, MemberService memberService, JpaMemberRepository jpaMemberRepository, JpaYataRepository jpaYataRepository, YataServiceImpl yataService) {
        this.jpaYataRequestRepository = jpaYataRequestRepository;
        this.memberService = memberService;
        this.jpaMemberRepository = jpaMemberRepository;
        this.jpaYataRepository = jpaYataRepository;
        this.yataService = yataService;
    }

    // TODO Yata 신청
    @Override
    public YataRequest createRequest(YataRequest yataRequest, String userName, long yataId) {
        Member member = memberService.findMember(userName); // 해당 멤버가 있는지 확인하고
        verifyRequest(yataRequest); // 신청을 이미 했었는지 확인하고
        Yata yata = yataService.verifyYata(yataId);
        // TODO 체크리스트 추가
        YataRequest request = YataRequest.create(yataRequest, member, yata);

        // 신청 이후 신청자 list 에 추가됨
        List<YataRequest> yataRequests = new ArrayList<>();
        yataRequests.add(request);

        return jpaYataRequestRepository.save(request);
    }

    // TODO Yata 초대
    @Override
    public YataRequest createInvitation(YataRequest yataRequest, String userName, long yataId) {
        Member member = memberService.findMember(userName); // 해당 멤버가 있는지 확인하고
        verifyInvitation(yataRequest); // 초대를 이미 했었는지 확인하고
        Yata yata = yataService.verifyYata(yataId);
        // TODO 체크리스트 추가
        YataRequest request = YataRequest.create(yataRequest, member, yata);

        // TODO 초대 후, 운전자의 탑승자 list 에 추가
        return jpaYataRequestRepository.save(request);
    }

    // TODO Yata 신청 목록 조회 --> Yata 의 private List<YataRequest> yataRequests = new ArrayList<>(); 이거
    @Override
    public Page<YataRequest> findRequests(int page, int size) {
        return null;
    }

    // TODO Yata 신청 취소 / 초대 취소
    //  해당 id 로 한 신청/초대가 있는지 검증 + 승인이 된 신청/초대 인지 검증 --> 승인이 된 상태면 취소 불가 ?
    @Override
    public void deleteRequest(long yataRequestId) {
    }

    // TODO 승인하는 로직 --> 운전자가 승인하면 -> 탑승자 list 에 추가됨

    // 이미 신청한 게시물인지 검증
    @Override
    public void verifyRequest(YataRequest yataRequest) {
        Optional<YataRequest> optionalYataRequest = jpaYataRequestRepository.findByMember_EmailAndYata_YataId(yataRequest.getMember().getEmail(), yataRequest.getYata().getYataId());
        optionalYataRequest.ifPresent(
                yr -> {throw new CustomLogicException(ExceptionCode.ALREADY_APPLIED);}
        );
    }

    // 이미 초대한 게시물인지 검증
    @Override
    public void verifyInvitation(YataRequest yataRequest) {
        Optional<YataRequest> optionalYataRequest = jpaYataRequestRepository.findByMember_EmailAndYata_YataId(yataRequest.getMember().getEmail(), yataRequest.getYata().getYataId());
        optionalYataRequest.ifPresent(
                yr -> {throw new CustomLogicException(ExceptionCode.ALREADY_INVITED);}
        );
    }
}
