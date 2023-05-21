import { NextPage } from "next";
import { ITeacher } from "./types";

interface TeacherAboutProps {
  teacherData: ITeacher;
}

const TeacherAbout: NextPage<TeacherAboutProps> = ({ teacherData }) => {
  return <div>{teacherData.description}</div>;
};

export default TeacherAbout;
