import Link from "next/link";

const TeachersPage = async () => {
  const teachersData: any = await getTeachersData();
  return (
    <div>
      <ul className="">
        {teachersData.map((teacherData: any) => (
          <li key={teacherData.id}>
            <Link href={`/teachers/${teacherData.slug}`}>
              {teacherData.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getTeachersData = async () => {
  const teachersData = await fetch("http://127.0.0.1:1337/api/teachers-page")
    .then((res) => {
      return res.json();
    })
    .catch(() => console.log("error"));

  return teachersData;
};

export default TeachersPage;
