import Group from '../model/Group';
import Student from '../model/Student';

var listOfGroup = new Array();
  listOfGroup.push(new Group(1,'ИФСТ','очная', 2, [new Student(1,'Иванов Иван Иванович', 4.5, 'очная', 21, false), new Student(2,'Иванов Иван Петрович', 4.0, 'очная', 20, false), new Student(3,'Иванов Егор Иванович', 3.0, 'очная', 21, true)]));
  listOfGroup.push(new Group(2,'ИФСТ','очная', 3, [new Student(1,'Еменов Иван Иванович', 4.0, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));    
  listOfGroup.push(new Group(3,'ИФСТ','очная', 4, [new Student(1,'Еменов Иван Иванович', 4.0, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));    
  listOfGroup.push(new Group(4,'ПИНЖ','заочная', 1, [new Student(1,'Иванов Иван Иванович', 4.5, 'очная', 21, false), new Student(2,'Иванов Иван Петрович', 4.0, 'заочная', 20, true), new Student(3,'Петров Егор Иванович', 5.0, 'заочная', 19, false)]));
  listOfGroup.push(new Group(5,'ПИНФ','заочная', 4, [new Student(1,'Егоров Иван Иванович', 3.5, 'очная', 18, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));
  listOfGroup.push(new Group(6,'ПИНЖ','очная', 3, [new Student(1,'Пектров Иван Иванович', 4.5, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));    
  listOfGroup.push(new Group(7,'ПИНФ','заочная', 2, [new Student(1,'Икатов Иван Иванович', 5.0, 'очная', 21, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));    
  listOfGroup.push(new Group(8,'ИВЧТ','очная', 3, [new Student(1,'Полубев Иван Иванович', 3.0, 'очная', 19, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));    
  listOfGroup.push(new Group(9,'ИВЧТ','очная', 2, [new Student(1,'Егоров Иван Иванович', 4.5, 'очная', 20, false), new Student(2,'Иванов Иван Александрович', 4.0, 'очная', 22, true), new Student(3,'Иванов Егор Иванович', 5.0, 'очная', 21, true)]));    

export default listOfGroup;