package com.example.echo.models;

import com.example.echo.exceptions.CannotEditCommentException;
import endpoints.repackaged.com.fasterxml.jackson.annotation.JsonFormat;
import endpoints.repackaged.com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.Date;

@JsonPropertyOrder({"id", "content", "createdDate", "author"})
public class Comment {
    Long id;
    String content;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "EEE MMM dd HH:mm:ss zzz yyyy")
    Date createdDate;
    User author;

    public Comment(String content, User author) {
        this.content = content;
        this.author = author;
        this.createdDate = new Date();
    }

    public void editComment(String content, User user) {
        if (content.isBlank())
            throw new CannotEditCommentException("Comment content cannot be empty");
        if (user != this.author)
            throw new CannotEditCommentException("Only the author of this comment can edit it");
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
