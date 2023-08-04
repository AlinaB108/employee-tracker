INSERT INTO department (dept_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Legal"),
       ("Finance"),
       ("Sales"),
       ("Production");

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead engineer", 180000.00, 1),
       ("Software engineer", 130000.00, 1),
       ("Marketing manager" 100000.00, 2),
       ("Brand manager", 97000.00, 2),
       ("Legal team lead", 190000.00, 3),
       ("Lawyer", 160000.00, 3),
       ("Account manager", 150000.00, 4),
       ("Accountant", 120000.00, 4),
       ("Sales lead", 100000.00, 5),
       ("Sales person", 80000.00, 5),
       ("Production manager", 130000.00, 6),
       ("Production assistant", 100000.00, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Evans", 1),
       ("Chris", "Hemsworth", 2, 1),
       ("Chris", "Pine", 3),
       ("Chris", "Pratt", 4, 3),
       ("Chris", "Rock", 5),
       ("Chris", "Tucker", 6, 5),
       ("Christina", "Ricci", 7),
       ("Christina", "Aguilera", 8, 7),
       ("Christina", "Applegate", 9),
       ("Christina", "Milian", 10, 9),
       ("Christopher", "Lloyd", 11),
       ("Kirsten", "Dunst", 12, 11);
