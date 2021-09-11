import React from 'react';
import c from './TaskItem.module.css';

export type Props = {
   id: string,                         //* тип строки присвоен, поскольку в typescript для react, это считается нормой и правильным
   message: string,
   activeStatus: boolean,
   comleteStatus: boolean,
   deleteTaskAC: any,
   activeOrUnactiveTaskAC: any,
   completeStatusTaskAC: any,

};

const TaskItem = (props: Props): JSX.Element => {
   return <>
      <div className={c.item} id={props.id}>
         <button onClick={() => props.deleteTaskAC(Number(props.id))} className={c.button__delete}>удалить</button>
         <div className={c.message}>
            {props.message}
         </div>
         {!props.comleteStatus
            ? (props.activeStatus
               ? <button onClick={() => props.activeOrUnactiveTaskAC(false, props.id)} className={c.button__status_active}>активно</button>
               : <button onClick={() => props.activeOrUnactiveTaskAC(true, props.id)} className={c.button__status_unActive}> неактивно</button>)
            : (<button onClick={() => props.activeOrUnactiveTaskAC(true, props.id)} disabled className={c.button__status_unActive}> неактивно</button>)
         }
         {props.comleteStatus
            ? <button onClick={() => props.completeStatusTaskAC(false, props.id)} className={c.button__status_comlete}>готовo</button>
            : <button onClick={() => props.completeStatusTaskAC(true, props.id)} className={c.button__status_unComplete}> не готово</button>
         }
      </div>
   </>;
}
export default TaskItem;