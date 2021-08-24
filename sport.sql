CREATE TABLE clubs
(
    cid NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    cName VARCHAR2(20) NOT NULL,
    std VARCHAR2(20) NOT NULL,
    loc VARCHAR2(20) NOT NULL,
    mgr VARCHAR2(20) NOT NULL,
    pres VARCHAR2(20) NOT NULL,
    fder VARCHAR2(20) NOT NULL,
    fded DATE NOT NULL,
    logo VARCHAR2(20) NOT NULL
);

CREATE TABLE players
(
    pId NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    pName VARCHAR2(255) NOT NULL,
    nation VARCHAR2(255) NOT NULL,
    born DATE NOT NULL,
    rate NUMBER NOT NULL,
    cId NUMBER NOT NULL,
    sal NUMBER NOT NULL,
    pNum NUMBER NOT NULL,
    avt VARCHAR2(255),
    status NUMBER NOT NULL
);

CREATE TABLE accounts
(
    aId NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    username VARCHAR2(20) NOT NULL,
    password VARCHAR2(255) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE roles
(
    rId NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    rName VARCHAR2(10) NOT NULL
);

CREATE TABLE authorities
(
    auId NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    aId NUMBER NOT NULL,
    rId NUMBER NOT NULL
)

INSERT INTO clubs (cName, std, loc, mgr, pres, fder, fded, logo)
VALUES ('Barcelona', 'Camp Nou', 'Spain', 'Ronald Koeman', 'Joan Laporta', 'Joan Gamper', '29-NOV-1989', 'bar.jpg');
INSERT INTO clubs (cName, std, loc, mgr, pres, fder, fded, logo)
VALUES ('Paris Saint-Germain', 'Parc des Princes', 'FRANCE', 'Mauricio Pochettino', 'Guy Crescent', 'Nasser Al-Khelaifi', '12-AUG-1970', 'psg.jpg');

INSERT INTO clubs (cName, std, loc, mgr, pres, fder, fded, logo)
VALUES ('Liverpool FC', 'Anfield', 'England', 'Jurgen Klopp', 'Tom Werner', 'Joan Gamper', '03-JUN-1892', 'liv.jpg');


INSERT INTO players (pname, nation, born, rate, cId, sal, pNum, avt, status)
VALUES ('Lionel Messi', 'Arghentina', '24-JUN-1987', 3, 2, 71000000, 30, 'messi.jpg', 1);

INSERT INTO players (pname, nation, born, rate, cId, sal, pNum, avt)
VALUES ('Frenkie de Jong', 'Netherlands', '12-MAY-1997', 2, 1, 10000000, 21, 'dejong.jpg');

--INSERT INTO accounts (username, password, email)
--VALUES ('tuha21', '123', 'tuha1021@gmail.com');

INSERT INTO roles (rName)
VALUEs ('ROLE_ADMIN');

INSERT INTO authorities (aId, rId)
VALUES (1, 1);

select * from players where PID = 2;
select * from roles where RID = 1 ;
select * from accounts





