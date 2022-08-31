CREATE TABLE department (
    id int NOT NULL PRIMARY KEY,
    name varchar(30)
);

CREATE TABLE role (
    id int NOT NULL PRIMARY KEY,
    title varchar(30),
    salary DECIMAL,
    department_id int
);

CREATE TABLE employee (
    id int NOT NULL PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int
);