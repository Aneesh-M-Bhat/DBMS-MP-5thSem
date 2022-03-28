CREATE TABLE Book(
id INT(11) UNIQUE AUTO_INCREMENT,
bookId VARCHAR(30),
bookName VARCHAR(30),
publishedYear INT(11),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(bookId)
)ENGINE=INNODB;

CREATE TABLE Users(
id INT(11) UNIQUE AUTO_INCREMENT,
userId VARCHAR(30),
userName VARCHAR(30),
phoneNumber INT(11),
emailAddress VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(userId)
)ENGINE=INNODB;

CREATE TABLE Students(
id INT(11) UNIQUE AUTO_INCREMENT,
studentId VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(studentId),
FOREIGN KEY(studentId) REFERENCES Users(userId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE Professors(
id INT(11) UNIQUE AUTO_INCREMENT,
professorId VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(professorId),
FOREIGN KEY(professorId) REFERENCES Users(userId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE Publishers(
id INT(11) UNIQUE AUTO_INCREMENT,
bookId VARCHAR(30),
publisherName VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (bookId,publisherName),
FOREIGN KEY (bookId) REFERENCES Book(bookId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE Authors(
id INT(11) UNIQUE AUTO_INCREMENT,
bookId VARCHAR(30),
authorName VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (bookId,authorName),
FOREIGN KEY (bookId) REFERENCES Book(bookId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE Subjects(
id INT(11) UNIQUE AUTO_INCREMENT,
subjectCode VARCHAR(30),
subjectName VARCHAR(30),
bookId VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (subjectCode,bookId),
FOREIGN KEY (bookId) REFERENCES Book(bookId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE BookCopies(
id INT(11) UNIQUE AUTO_INCREMENT,
bookId VARCHAR(30),
noOfCopiesAvailable INT(11),
noOfCopiesLent INT(11),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (bookId),
FOREIGN KEY (bookId) REFERENCES Book(bookId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE BookLending(
id INT(11) UNIQUE AUTO_INCREMENT,
bookId VARCHAR(30),
userId VARCHAR(30),
borrowDate DATE,
dueDate DATE,
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (bookId,userId),
FOREIGN KEY (bookId) REFERENCES Book(bookId) on delete cascade,
FOREIGN KEY (userId) REFERENCES Users(userId) on delete cascade
)ENGINE=INNODB;

