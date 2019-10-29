import React from 'react';
import { Link } from 'react-router-dom';
import ListOfGroup from './ListOfGroup'
import '../css/Add.css'
import '../css/Header.css'
import Modal from './Modal';
import Button from './Button';

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

export class GroupList extends React.Component{
//export const GroupList = () => (
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
         return(
         <table className="table_dark">
             <thead>
             <tr>
                 <th>Направление</th>
                 <th>Тип обучения</th>
                 <th>Курс обучения</th>
                 <th>Количество студентов</th>
                 <th colSpan="2">Действия</th>
             </tr>
             </thead>
             <tbody>
             {ListOfGroup.map(group => (
                     <tr>
                         <td><Link to={`/groups/${group.id}`}>{group.direction}</Link></td>
                         <td>{group.typeEducation}</td>
                         <td>{group.course}</td>
                         <td>{group.students.length}</td>
                         <td>
                             <Button onClick={this.openModal}>Изменить группу</Button>
                             <Modal
                                 title="Подтвердите изменение"
                                 isOpen={this.state.isOpen}
                                 onCancel={this.handleCancel}
                                 onSubmit={this.handleSubmit}
                             >
                             </Modal>
                         </td>
                         <td>
                             <Button onClick={this.openModal}>Удалить группу</Button>
                             <Modal
                                 title="Подтвердите удаление"
                                 isOpen={this.state.isOpen}
                                 onCancel={this.handleCancel}
                                 onSubmit={this.handleSubmit}
                             >
                             </Modal>
                         </td>
                     </tr>
                 )
             )
             }
             </tbody>
         </table>
         )
     }
}

export class AddGroup extends React.Component {

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

  render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table className='addTable'>
                    <tr>
                        <td>Направление обучения</td>
                        <td className='textInTable'><input type="text" className="form-control" id="direction"
                                                           name="direction" placeholder="Направление обучения"/></td>
                    </tr>
                    <tr>
                        <td>Форма обучения</td>
                        <td className='textInTable'><select className="form-control" id="typeEducation"
                                                            name="typeEducation">
                            <option>Очная</option>
                            <option>Заочная</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Курс обучения</td>
                        <td className='textInTable'><select className="form-control" id="course" name="course">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Количество студентов</td>
                        <td className='textInTable'><input type="number" className="form-control" id="count"
                                                           name="count" placeholder="Количество студентов"/></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p className="AddGroup" align='center'>
                                <a href="/send" className="push_button blue">Добавить группу</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </form>
        )
  }
}

export class GetGroupById extends React.Component {

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
                    ListOfGroup.find((group) => group.id == this.props.id).students.map(student => (
                            <tr>
                                <td>{student.fio}</td>
                                <td>{student.avgScore}</td>
                                <td>{student.typeEducation}</td>
                                <td>{student.age}</td>
                                <td>{student.hasDebt ? 'Присутствуют' : 'Отсутствуют'}</td>
                                <td>
                                    <Button onClick={this.openModal}>Изменить группу</Button>
                                    <Modal
                                        title="Подтвердите изменение"
                                        isOpen={this.state.isOpen}
                                        onCancel={this.handleCancel}
                                        onSubmit={this.handleSubmit}
                                    >
                                    </Modal>
                                </td>
                                <td>
                                    <Button onClick={this.openModal}>Удалить группу</Button>
                                    <Modal
                                        title="Подтвердите удаление"
                                        isOpen={this.state.isOpen}
                                        onCancel={this.handleCancel}
                                        onSubmit={this.handleSubmit}
                                    >
                                    </Modal>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        )
    }
}

export default GroupList;