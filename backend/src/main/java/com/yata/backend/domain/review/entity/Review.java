package com.yata.backend.domain.review.entity;

import com.yata.backend.global.audit.Auditable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Review extends Auditable {
    @Id
    private Long reviewId;
}
