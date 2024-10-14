export enum Role {
  COLLABORATOR = <any>'user', // Works on warehouse, not able to see other people data
  SUPERVISOR = <any>'supervisor', // Supervise a group of collaborators in a warehouse, should only have access to supervised people's data
  MANAGER = <any>'manager', // Can manage one or many warehouses, should only be able to see data from managed warehouses
  ADMIN = <any>'admin', // Able to perform any action as admin
}
