INSERT INTO department (dept_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Legal"),
       ("Finance"),
       ("Sales"),
       ("Production");

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead engineer", 180000, 1),
       ("Software engineer", 130000, 1),
       ("Marketing manager", 100000, 2), 
       ("Brand manager", 97000, 2),
       ("Legal team lead", 190000, 3),
       ("Lawyer", 160000, 3),
       ("Account manager", 150000, 4),
       ("Accountant", 120000, 4),
       ("Sales lead", 100000, 5),
       ("Sales person", 80000, 5),
       ("Production manager", 130000, 6),
       ("Production assistant", 100000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Evans", 1, 1),
       ("Chris", "Hemsworth", 2, 1),
       ("Chris", "Pine", 3, 3),
       ("Chris", "Pratt", 4, 3),
       ("Chris", "Rock", 5, 5),
       ("Chris", "Tucker", 6, 5),
       ("Christina", "Ricci", 7, 7),
       ("Christina", "Aguilera", 8, 7),
       ("Christina", "Applegate", 9, 9),
       ("Christina", "Milian", 10, 9),
       ("Christopher", "Lloyd", 11, 11),
       ("Kirsten", "Dunst", 12, 11);
