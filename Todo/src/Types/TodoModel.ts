export interface Todo {
  _id: string;  
  name: string;
  status: Status;
  priority: Priority;
  description: string;
}
export enum Status{
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed"

}
export enum Priority{
    Low = "Low",
    Mendium = "Medium",
    High = "High",
} 