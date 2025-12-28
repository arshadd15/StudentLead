import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from 'react';

// This is the type of the student which defines its structure
export type Student = {
  id: string;
  name: string;
  email: string;
  role: string;
};

// Structure of the student context
type StudentContextType = {
  students: Student[];
  addStudent: (student: Student) => void;
  updateStudent: (id: string, updatedStudent: Student) => void;
  deleteStudent: (id: string) => void;
};

// Created student context
export const StudentContext = createContext<StudentContextType | undefined>(
  undefined,
);

// Made student provider
export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);

  // Everytime something changes this loads the student data
  useEffect(() => {
    const loadStudents = async () => {
      try {
        const storedData = await AsyncStorage.getItem('myApp_students');
        if (storedData) {
          setStudents(JSON.parse(storedData));
        }
      } catch (error) {
        console.log('Failed to load students:', error);
      }
    };
    loadStudents();
  }, []);

  // Function to save the data in local storage
  const saveToStorage = async (newData: Student[]) => {
    try {
      setStudents(newData);
      await AsyncStorage.setItem('myApp_students', JSON.stringify(newData));
    } catch (error) {
      console.log('Failed to save:', error);
    }
  };

  // Function to add the new student
  const addStudent = (newStudent: Student) => {
    const newData = [newStudent, ...students];
    saveToStorage(newData);
  };

  // Function to save updated student
  const updateStudent = async (id: string, updatedStudent: Student) => {
    const newList = students.map(student => {
      if (student.id === id) {
        return updatedStudent;
      }
      return student;
    });

    setStudents(newList);
    saveToStorage(newList);
  };

  // Function to delete student
  const deleteStudent = async (id: string) => {
    const newList = students.filter(student => student.id !== id);
    setStudents(newList);
    saveToStorage(newList);
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
