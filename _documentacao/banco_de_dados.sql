/*

User
    id (int)
    name (100)
    email (191)
    password (100)

Post
    id (int)
    user_id (int)
    title (100)
    description (text)
    views (int)
    likes (int)
    deslikes (int)
    active (int)

Comment
    id (int)
    user_id (int)
    post_id (int)
    description (text)
    likes (int)
    deslikes (int)
    active (int)

Token
    id (int)
    title (100)
    value (512)

Log
    id (int)
    user_id (int)
    post_id (int)
    comment_id (int)
    token_id (int)
    title (100)
    value (text)


*/


CREATE TABLE quikdev.`user` (
	id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	email varchar(191) NULL,
	password varchar(100) NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;

CREATE TABLE quikdev.post (
	id INT auto_increment NOT NULL,
	user_id INT NOT NULL,
	title varchar(100) NOT NULL,
	description TEXT NULL,
	views INT DEFAULT 0 NOT NULL,
	likes INT DEFAULT 0 NOT NULL,
	deslikes INT DEFAULT 0 NOT NULL,
	active BOOL DEFAULT 1 NOT NULL,
	CONSTRAINT post_pk PRIMARY KEY (id),
	CONSTRAINT post_user_FK FOREIGN KEY (user_id) REFERENCES quikdev.`user`(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;

CREATE TABLE quikdev.comment (
	id INT auto_increment NOT NULL,
	user_id INT NOT NULL,
	post_id INT NOT NULL,
	description TEXT NOT NULL,
	likes INT DEFAULT 0 NOT NULL,
	deslikes INT DEFAULT 0 NOT NULL,
	active INT DEFAULT 1 NOT NULL,
	CONSTRAINT comment_pk PRIMARY KEY (id),
	CONSTRAINT comment_user_FK FOREIGN KEY (user_id) REFERENCES quikdev.`user`(id),
	CONSTRAINT comment_post_FK FOREIGN KEY (post_id) REFERENCES quikdev.post(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;

-- quikdev.token definition

CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT 'ND',
  `value` varchar(512) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `token_user_FK` (`user_id`),
  CONSTRAINT `token_user_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE quikdev.log (
	id INT auto_increment NOT NULL,
	user_id INT NULL,
	post_id INT NULL,
	comment_id INT NULL,
	token_id INT NULL,
	title varchar(100) NULL,
	value TEXT NULL,
	CONSTRAINT log_pk PRIMARY KEY (id),
	CONSTRAINT log_user_FK FOREIGN KEY (user_id) REFERENCES quikdev.`user`(id),
	CONSTRAINT log_post_FK FOREIGN KEY (post_id) REFERENCES quikdev.post(id),
	CONSTRAINT log_comment_FK FOREIGN KEY (comment_id) REFERENCES quikdev.comment(id),
	CONSTRAINT log_token_FK FOREIGN KEY (token_id) REFERENCES quikdev.token(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;


SELECT * from user

INSERT INTO quikdev.`user`
(name, email, password)
VALUES('admin', 'admin@email.com', 'admin');

INSERT INTO quikdev.`user`
(name, email, password)
VALUES('user1', 'user1@email.com', 'user1');

INSERT INTO quikdev.`user`
(name, email, password)
VALUES('user2', 'user2@email.com', 'user2');