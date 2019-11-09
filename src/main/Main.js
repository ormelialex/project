import React from 'react';
import styles from '../css/MainPage.css';
import GroupList, { AddGroup, GetGroupById} from './Group';
import StudentList, {AddStudent} from "./Student";


//TODO https://github.com/Jeerjmin/weather-app
export function MainPage() {
    return (
      <div className="MainPage">
            <h2 className="h2ListGroup">Список групп института ИнПИТ</h2>
            <GroupList />
          <h2 className="h2ListGroup">Список студентов института ИнПИТ</h2>
          <StudentList />
      </div>
    );
  }

export function AddNewGroup() {
  return (
    <div className="MainPage">
      <h2 className="h2ListGroup">Добавление новой группы</h2>
            <AddGroup />
      </div>
    );
  }

export function AddNewStudent() {
    return (
        <div className="MainPage">
            <h2 className="h2ListGroup">Добавление нового студента</h2>
            <AddStudent />
        </div>
    );
}

  export class GetListOfStudentsByGroup extends React.Component {
    render() {
      console.log(this);
      
      return <div className="MainPage">
        <h2 className="h2ListGroup">Группы</h2>
              <GetGroupById id={this.props.match.params.id}/>
      </div>
    }
  }
export default MainPage;
  