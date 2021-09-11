import React from 'react'
import c from './styles.module.css';
import TaskItem from './TaskItem/TaskItem';

type Props = {
   addTaskAC?: any,
   upgradeTextAC?: any,
   deleteTaskAC?: any,
   activeOrUnactiveTaskAC?: any,
   completeStatusTaskAC?: any,
   filterStatusAC?: any,
   InputSearchValueAC?: any,
   value?: string,
   tasks?: any,
   filterArr?: any,
}

const FuncComponent = (props: Props): JSX.Element => {
   const TaskItems = props.filterArr.map((m: any) =>
      <TaskItem key={m.id} id={m.id}
         activeStatus={m.activeStatus}
         comleteStatus={m.comleteStatus}
         message={m.message} deleteTaskAC={props.deleteTaskAC}
         activeOrUnactiveTaskAC={props.activeOrUnactiveTaskAC}
         completeStatusTaskAC={props.completeStatusTaskAC} />);
   const INPref = React.createRef<HTMLInputElement>();                  //* создал ссылку на input, что бы дальше принимать его значения
   function ChangeInput(): void {
      props.upgradeTextAC(INPref.current?.value);
   }
   function ChangeSearchInput(): void {
      props.InputSearchValueAC(INPref.current?.value);
   }
   function BTNclick(): void {
      props.addTaskAC(INPref.current?.value);
   }
   return (
      <div className={c.container}>
         <h1>ToDo-list</h1>
         <div className={c.header}>
            <input ref={INPref} className={c.input} type="text" onChange={ChangeInput} value={props.value} />
            <div className={c.header__button}>
               <button type='button' onClick={BTNclick}>добавить задачу</button>
               <button onClick={ChangeSearchInput}>найти</button>
            </div>
         </div>
          <div className={c.input__block}>
               <div className={c.input__block_item}>
                  <input className={c.input__block_radio} type="radio" name="filter" onChange={() => props.filterStatusAC(0)} id="All" />
                  <label htmlFor="All">все</label>
               </div>
               <div className={c.input__block_item}>
                  <input className={c.input__block_radio} type="radio" name="filter" onChange={() => props.filterStatusAC(1)} id="active" />
                  <label htmlFor="active">активные</label>
               </div>
               <div className={c.input__block_item}>
                  <input className={c.input__block_radio} type="radio" name="filter" onChange={() => props.filterStatusAC(2)} id="complete" />
                  <label htmlFor="comlete"> не активные</label>
               </div>
               <div className={c.input__block_item}>
                  <input className={c.input__block_radio} type="radio" name="filter" onChange={() => props.filterStatusAC(3)} id="unActive" />
                  <label htmlFor="unActive">готовые</label>
               </div>
            </div>
         <div className={c.footer}>
            <div className={c.tasks}>
               {TaskItems}
               </div>
         </div>

      </div>
   );
};

export default FuncComponent;