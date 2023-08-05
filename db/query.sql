-- View all departments (inquiry)
-- SELECT * FROM department

-- View all roles
-- SELECT department.id AS Id, roles.title AS Title, department.dept_name AS Dept, roles.salary AS Salary
-- FROM roles
-- JOIN department ON roles.department_id = department.id;

-- View all employees
-- Used CONCAT to put manager's first_name and last_name in one column
SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name,
  roles.title AS Title, roles.salary AS Salary, department.dept_name AS Dept_name,
  CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
FROM employee
-- Used LEFT JOIN clause to find unmatched rows
LEFT JOIN roles ON employee.role_id = roles.id
LEFT JOIN department ON roles.department_id = department.id
-- Added a condition, so when employee.id is not equal to manager.id it returns true 
LEFT JOIN employee manager ON employee.manager_id = manager.id AND CASE WHEN employee.id != manager.id THEN true ELSE false END

