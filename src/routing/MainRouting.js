import { Switch, Route } from 'react-router-dom';
import MainPage, { AddNewGroup, GetListOfStudentsByGroup, AddNewStudent} from '../main/Main';
import React from 'react';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/addgroup' component={AddNewGroup}/>
      <Route exact path='/addstudent' component={AddNewStudent}/>
      <Route  path='/groups/:id' component={GetListOfStudentsByGroup}/>
      {/* <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/> */}
    </Switch>
  </main>
)
export default Main;