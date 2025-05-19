import angular from "./images/angular.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import './Course.css';

const courseMap = {
  angular,
  css,
  js,
  react,
};

function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
