import React from 'react';
import { Link } from 'react-router-dom';
import ListOfGroup from './ListOfGroup'
import '../css/Add.css'
import '../css/Header.css'
import {GetListOfStudentsByGroup} from "./Main";
import Button from "./Button";
import Modal from "./Modal";

// var listOfGroup = new Array();
// listOfGroup.push(new Group(1,'ИФСТ','очная', 2, [new Student(1,'Иванов Иван Иванович', 4.5, 'очная', 21, false), new Student(2,'Иванов Иван Петрович', 4.0, 'очная', 20, false), new Student(3,'Иванов Егор Иванович', 3.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(2,'ИФСТ','очная', 3, [new Student(1,'Еменов Иван Иванович', 4.0, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(3,'ИФСТ','очная', 4, [new Student(1,'Еменов Иван Иванович', 4.0, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(4,'ПИНЖ','заочная', 1, [new Student(1,'Иванов Иван Иванович', 4.5, 'очная', 21, false), new Student(2,'Иванов Иван Петрович', 4.0, 'заочная', 20, true), new Student(3,'Петров Егор Иванович', 5.0, 'заочная', 19, false)]));
// listOfGroup.push(new Group(5,'ПИНФ','заочная', 4, [new Student(1,'Егоров Иван Иванович', 3.5, 'очная', 18, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(6,'ПИНЖ','очная', 3, [new Student(1,'Пектров Иван Иванович', 4.5, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(7,'ПИНФ','заочная', 2, [new Student(1,'Икатов Иван Иванович', 5.0, 'очная', 21, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(8,'ИВЧТ','очная', 3, [new Student(1,'Полубев Иван Иванович', 3.0, 'очная', 19, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
// listOfGroup.push(new Group(9,'ИВЧТ','очная', 2, [new Student(1,'Егоров Иван Иванович', 4.5, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));



export class StudentList extends React.Component {

    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({isOpen: true});
    }

    handleSubmit = () => {
        console.log('Submitted');
        this.setState({isOpen: false});
    }

    handleCancel = () => {
        console.log('Cancelled');
        this.setState({isOpen: false});
    }

    render() {
        return (
            <table className="table_dark">
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Средний балл</th>
                    <th>Вид обучения</th>
                    <th>Возраст</th>
                    <th>Задолжности</th>
                    <th colSpan="2">Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    ListOfGroup.map(group => (group.students.map(student => (
                    <tr>
                        <td>{student.fio}</td>
                        <td>{student.avgScore}</td>
                        <td>{student.typeEducation}</td>
                        <td>{student.age}</td>
                        <td>{student.hasDebt ? 'Присутствуют' : 'Отсутствуют'}</td>
                        <td>
                        <Button onClick={this.openModal}>Изменить студента</Button>
                        <Modal
                        title="Подтвердите изменение"
                        isOpen={this.state.isOpen}
                        onCancel={this.handleCancel}
                        onSubmit={this.handleSubmit}
                        >
                        </Modal>
                        </td>
                        <td>
                        <Button onClick={this.openModal}>Удалить студента</Button>
                        <Modal
                        title="Подтвердите удаление"
                        isOpen={this.state.isOpen}
                        onCancel={this.handleCancel}
                        onSubmit={this.handleSubmit}
                        >
                        </Modal>
                        </td>
                    </tr>
                    ))))
                }
                </tbody>
            </table>
        )
    }
}

export class AddStudent extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }
    //TODO Dinamic list with groups
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <table className='addTable'>
                    <td>Группа</td>
                    <td className='textInTable'><select className="form-control" id="groupName" name="groupName">
                        <option>ИФСТ</option>
                        <option>ПИНФ</option>
                        <option>ПИНЖ</option>
                        <option>ДИЗН</option>
                        <option>ТЛВД</option>
                    </select>
                    </td>
                    <tr>
                        <td>ФИО</td>
                        <td className='textInTable'><input type="text" className="form-control" id="direction" name="direction" placeholder="ФИО"/></td>
                    </tr>
                    <tr>
                        <td>Форма обучения</td>
                        <td className='textInTable'><select className="form-control" id="typeEducation" name="typeEducation">
                            <option>Очная</option>
                            <option>Заочная</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Возраст</td>
                        <td className='textInTable'><input type="number" className="form-control" id="age" name="age" placeholder="Возраст"/></td>
                    </tr>
                    <tr>
                        <td>Средний балл</td>
                        <td className='textInTable'><input type="number" className="form-control" id="avgScore" name="avgScore" placeholder="Средний балл"/></td>
                    </tr>
                    <tr>
                        <td>Задолжности</td>
                        <td className='textInTable'><select className="form-control" id="hasDebt" name="hasDebt">
                            <option>Присутствуют</option>
                            <option>Отсутствуют</option>
                        </select>
                        </td>
                    </tr>
                    <td colspan="2">
                        <p className="AddGroup" align='center'>
                            <a href="/send" className="push_button blue">Добавить студента</a>
                        </p>
                    </td>
                </table>
            </form>
        )
    }
}

export default StudentList;