export type UserRole = 'admin' | 'store_manager';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  storeId?: string;
}

export type InterviewStatus = 'Scheduled' | 'Completed' | 'Pending' | 'Hired';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  interviewStatus: InterviewStatus;
  joinDate: string;
}

export type TaskStatus = 'To-Do' | 'In Progress' | 'Done' | 'Overdue';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string; // Employee ID
  storeId: string;
  deadline: string;
  status: TaskStatus;
}

export interface Store {
  id: string;
  name: string;
  location: string;
  manager: string; // Employee ID
  employeeCount: number;
}
