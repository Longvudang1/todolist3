import React from 'react'
import Card from '../UI/Card';
import classes from './YsersList.module.css'
import Button from '../UI/Button';
const UserList = (props) => {
    return(
        <Card className={classes.users} >
            <ul>
                {props.users.map((user,index) => (
                    <li key={user.id} className={classes.text} >
                        {user.task}
                        <div>
                            <Button onClick={() => {props.onDeleteTask (index)} }>Done task</Button>
                            <Button onClick={() => {props.onUpdateTask (index)}}>Edit task</Button>

                        </div>
                        
                    </li>
                ))}

            </ul>
        </Card>

    );
}
export default UserList;