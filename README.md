# Hospital API

An API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients


## Project setup on local system

1. Set up the remote machine with the necessary software dependencies.

   - Install node,npm,postman,mongoDB,vscode

2. Clone the repository onto the remote machine

   - git clone https://github.com/nirub28/hospital-api

3. Install the dependencies:

   - npm install

4. Start the server:

   - npm start

5. The server should now be running at http://localhost:8000.


## Usage

- Use Postman or any API testing tool to interact with the endpoints.
- Make sure to include the required headers and provide valid data in the requests.
- Refer to the API documentation for the list of available endpoints and their usage.


# API Documentation

## Doctor Endpoints

### Register a Doctor

- Method: POST
- URL: `/doctors/register`
- Body Parameters:
  - `email` (string, required): Email address of the doctor
  - `name` (string, required): Name of the doctor
  - `password` (string, required): Password of the doctor
  - `confirm_password` (string, required): Password of the doctor

### Login as a Doctor

- Method: GET
- URL: `doctors/login`
- Body Parameters:
  - `email` (string, required): Email address of the doctor
  - `password` (string, required): Password of the doctor

## Patient Endpoints

### Register a Patient

- Method: POST
- URL: `/patients/register`
- Authentication Required: Yes
- Body Parameters:
  - `phone` (string, required): Phone number of the patient
  - `name` (string, required): Name of the patient

### Create a Report

- Method: POST
- URL: `/patients/create_report/:id`
- Authentication Required: Yes
- URL Parameters:
  - `id` (string): ID of the patient
- Body Parameters:
  - `createdByDoctor` (string): ID of the doctor who created the report
  - `status` (string): Status of the patient

### Get All Reports

- Method: GET
- URL: `patients/all_reports/:id`
- Authentication Required: Yes
- URL Parameters:
  - `id` (string): ID of the patient


## Report Endpoints

### Get Reports by Status

- Method: GET
- URL: /reports/:status
- Authentication Required: Yes
- URL Parameters:
   - status (string, required): Status of the reports (e.g., "Negative", "Positive-Admit")