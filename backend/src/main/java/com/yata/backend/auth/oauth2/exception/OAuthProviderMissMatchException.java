package com.yata.backend.auth.oauth2.exception;

public class OAuthProviderMissMatchException extends RuntimeException {

    public OAuthProviderMissMatchException(String message) {
        super(message);
    }
}