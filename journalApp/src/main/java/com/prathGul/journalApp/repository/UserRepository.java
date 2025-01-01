package com.prathGul.journalApp.repository;

import com.prathGul.journalApp.entity.JournalEntry;
import com.prathGul.journalApp.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {

    User findByUserName(String userName);

    void deleteByUserName(String name);
}