import React from "react";
import CourseCard from "./CourseCard";

export default function () {
  return (
    <div className=" w-2/3 flex flex-col">
      <h1 className="text-3xl font-bold  text-gray-600 mb-4">Courses</h1>
      <section className="grid grid-cols-3 text-gray-600">
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
        <CourseCard title={"Core Maths"} description={"things"} />
      </section>
    </div>
  );
}
