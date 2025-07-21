import { Employee, Store, Task } from './types';

export const mockEmployees: Employee[] = [
  { id: 'emp-1', name: 'Alice Johnson', email: 'alice@belc.com', role: 'System Admin', interviewStatus: 'Hired', joinDate: '2022-01-15' },
  { id: 'emp-2', name: 'Bob Williams', email: 'bob@belc.com', role: 'Store Manager', interviewStatus: 'Hired', joinDate: '2022-02-20' },
  { id: 'emp-3', name: 'Charlie Brown', email: 'charlie@belc.com', role: 'Cashier', interviewStatus: 'Hired', joinDate: '2023-03-10' },
  { id: 'emp-4', name: 'Diana Prince', email: 'diana@belc.com', role: 'Stocker', interviewStatus: 'Hired', joinDate: '2023-05-22' },
  { id: 'emp-5', name: 'Ethan Hunt', email: 'ethan@belc.com', role: 'Store Manager', interviewStatus: 'Hired', joinDate: '2022-08-01' },
  { id: 'emp-6', name: 'Fiona Glenanne', email: 'fiona@belc.com', role: 'Customer Service', interviewStatus: 'Hired', joinDate: '2023-09-15' },
  { id: 'emp-7', name: 'George Costanza', email: 'george@belc.com', role: 'Janitor', interviewStatus: 'Pending', joinDate: '2024-08-01' }
];

export const mockStores: Store[] = [
  { id: 'store-1', name: 'Belc Downtown', location: '123 Main St, Metropolis', manager: 'emp-2', employeeCount: 15 },
  { id: 'store-2', name: 'Belc Suburbia', location: '456 Oak Ave, Smallville', manager: 'emp-5', employeeCount: 12 },
];

export const mockTasks: Task[] = [
  { id: 'task-1', title: 'Weekly Inventory Check', description: 'Perform a full inventory count of aisle 5.', assignedTo: 'emp-4', storeId: 'store-1', deadline: '2024-07-30', status: 'In Progress' },
  { id: 'task-2', title: 'Q3 Sales Report', description: 'Finalize and submit the sales report for the third quarter.', assignedTo: 'emp-2', storeId: 'store-1', deadline: '2024-08-05', status: 'To-Do' },
  { id: 'task-3', title: 'Clean the Breakroom Fridge', description: 'The fridge needs a thorough cleaning. Remove all old food.', assignedTo: 'emp-3', storeId: 'store-1', deadline: '2024-07-25', status: 'Overdue' },
  { id: 'task-4', title: 'Restock Produce Section', description: 'Restock all fresh vegetables and fruits.', assignedTo: 'emp-4', storeId: 'store-2', deadline: '2024-07-28', status: 'Done' },
  { id: 'task-5', title: 'Employee Shift Scheduling', description: 'Prepare the shift schedule for the next two weeks.', assignedTo: 'emp-5', storeId: 'store-2', deadline: '2024-07-29', status: 'In Progress' },
  { id: 'task-6', title: 'Update Promotional Displays', description: 'Change displays to reflect the new "Summer Sale" promotion.', assignedTo: 'emp-6', storeId: 'store-1', deadline: '2024-08-01', status: 'To-Do' },
  { id: 'task-7', title: 'Server Maintenance', description: 'Run maintenance scripts on the main server.', assignedTo: 'emp-1', storeId: 'store-1', deadline: '2024-07-31', status: 'To-Do' }
];
