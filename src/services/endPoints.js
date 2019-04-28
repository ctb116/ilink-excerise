//I keep endpoints in one location so I don't have to change -
//the endpoint in multiple locations if it changes

//All of these endpoints could be the same of course

export const GetEmployees = "https://localhost:5001/api/employee";

export const SaveEmployees = "https://localhost:5001/api/employee";

export const DeleteEmployees = "https://localhost:5001/api/employee";

export default {
  GetEmployees,
  SaveEmployees,
  DeleteEmployees
};
