import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import CcSharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";

import "./course.css";


const courseMap = {
    Angular,
    Bootstrap,
    CcSharp,
    KompleWeb
};

function Course({courseName}) {
    return ( 
        <div className="courseDiv">
            <img className="courseImage" src = {courseMap[courseName]} alt="course" />
            
        </div>
     );
}

export default Course;