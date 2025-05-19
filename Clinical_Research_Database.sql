-- Create the database
CREATE DATABASE IF NOT EXISTS ClinicalResearch;
USE ClinicalResearch;

-- Create the Studies table with status
CREATE TABLE IF NOT EXISTS Studies (
    StudyID INT AUTO_INCREMENT PRIMARY KEY,
    StudyName VARCHAR(255) NOT NULL,
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    Status ENUM('Pending', 'Enrolling','Maintanance' 'Completed') NOT NULL DEFAULT 'Pending'
);

-- Create the Subjects table with status
CREATE TABLE IF NOT EXISTS Subjects (
    SubjectID INT AUTO_INCREMENT PRIMARY KEY,
    StudyID INT,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    DateOfBirth DATE,
    Gender ENUM('Male', 'Female', 'Other'),
    EnrollmentDate DATE,
    Status ENUM('Enrolled', 'Dropped', 'Completed') NOT NULL DEFAULT 'Enrolled',
    FOREIGN KEY (StudyID) REFERENCES Studies(StudyID)
);
