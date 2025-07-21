'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, CheckCircle, ClipboardList, PlayCircle } from "lucide-react"
import { mockTasks } from '@/lib/data';
import { useAuth } from '@/hooks/use-auth';

export default function DashboardPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const { user } = useAuth();
  
  const tasks = user?.role === 'store_manager' 
    ? mockTasks.filter(t => t.storeId === user.storeId)
    : mockTasks;

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(t => t.status === 'Done').length;
  const overdueTasks = tasks.filter(t => t.status === 'Overdue').length;
  const inProgressTasks = tasks.filter(t => t.status === 'In Progress').length;

  const simulateBatchJob = () => {
    const timestamp = new Date().toLocaleString();
    const summary = `[${timestamp}] Daily Summary: ${doneTasks} tasks completed, ${overdueTasks} overdue.`;
    setLogs(prevLogs => [...prevLogs, summary]);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTasks}</div>
            <p className="text-xs text-muted-foreground">All tasks assigned</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{doneTasks}</div>
            <p className="text-xs text-muted-foreground">Tasks marked as done</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressTasks}</div>
            <p className="text-xs text-muted-foreground">Currently active tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overdueTasks}</div>
            <p className="text-xs text-muted-foreground">Tasks past their deadline</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Batch Job Simulation</CardTitle>
          <CardDescription>
            Simulate background jobs like generating daily summaries.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={simulateBatchJob}>
            <PlayCircle className="mr-2 h-4 w-4" />
            Run Daily Task Summary
          </Button>
          {logs.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Logs</h3>
              <pre className="p-4 bg-muted rounded-md text-sm text-muted-foreground overflow-x-auto">
                {logs.join('\n')}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
