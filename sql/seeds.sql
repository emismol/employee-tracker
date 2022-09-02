USE employeetracker;
truncate table department;
insert into department (id,name) values(1,"hr");
insert into department (id,name) values(2,"finance");
insert into department (id,name) values(3,"marketing");

truncate table role;
insert into role (id, title,salary,department_id) values(1, "director",300000,2);
insert into role (id, title,salary,department_id) values(2, "VP",500000,3);
insert into role (id, title,salary,department_id) values(3, "manager",100000,1);

truncate table employee;
insert into employee(id,first_name,last_name,role_id) values(1,"dan","smith",1);
insert into employee(id,first_name,last_name,role_id,manager_id) values(2,"jen","jones",3,1);
insert into employee(id,first_name,last_name,role_id) values(3,"sam","brown",2);