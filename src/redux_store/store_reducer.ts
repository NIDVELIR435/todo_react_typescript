const ADD_TASK = 'ADD_TASK';
const UPGRADE_TEXT = 'UPGRADE_TEXT';
const DELETE_TASK = 'DELETE_TASK';
const ACTIVE_STATUS_TASK = 'ACTIVE_STATUS_TASK';
const COMPLETE_STATUS = 'COMPLETE_STATUS';
const FILTER_STATUS = 'FILTER_STATUS';
const INPUT_SEARCH_VALUE = 'INPUT_SEARCH_VALUE';
// ====================================
export type typeAC = {
   readonly type: string,
   TextMessage?: string,
   newTasksValue?: string,
   TaskId?: number,
   bool?: boolean,
   id?: number,
};

export const addTaskAC = (Action: string): typeAC => ({ type: ADD_TASK, newTasksValue: Action });
export const upgradeTextAC = (text: string): typeAC => ({ type: UPGRADE_TEXT, TextMessage: text });
export const deleteTaskAC = (id: number): typeAC => ({ type: DELETE_TASK, TaskId: id });
export const activeOrUnactiveTaskAC = (bool: boolean, id: number): typeAC => ({ type: ACTIVE_STATUS_TASK, bool, id });
export const completeStatusTaskAC = (bool: boolean, id: number): typeAC => ({ type: COMPLETE_STATUS, bool, id });
export const filterStatusAC = (id: number): typeAC => ({ type: FILTER_STATUS, id });
export const InputSearchValueAC = (text: string): typeAC => ({ type: INPUT_SEARCH_VALUE, TextMessage: text });

// ====================================
export type initialStateType = {
   tasks: Array<any>,
   tasksIDcount: number,
   filterArr: Array<any>,
   InputValue: string,
};

const initialState: initialStateType = {
   tasks: [],
   tasksIDcount: 0,
   filterArr: [],
   InputValue: ' New task',
};

function StoreReducer(state = initialState, action: any): unknown {
   switch (action.type) {
      case ADD_TASK:
         type New_postType = { id: number, message: string, activeStatus: boolean, comleteStatus: boolean, };
         const New_Post: New_postType = {
            id: state.tasksIDcount + 1,
            message: action.newTasksValue,
            activeStatus: true,
            comleteStatus: false,
         };
         return {
            ...state,
            tasks: [...state.tasks, New_Post],
            filterArr: [...state.tasks, New_Post],
            tasksIDcount: Number(state.tasksIDcount + 1),

         };
      case UPGRADE_TEXT:
         return {
            ...state, InputValue: action.TextMessage
         };
      case ACTIVE_STATUS_TASK:
         const activationStatusFUNC = () => {
            const findItemArray = state.tasks.find(item => item.id === action.id);
            const findIndexItemArray = state.tasks.findIndex(item => item.id === action.id);

            if (findItemArray != undefined) {
               state.tasks[findIndexItemArray].activeStatus = action.bool;
               return [...state.tasks]
            }
         };
         return {
            ...state, tasks: activationStatusFUNC()
         };
      case FILTER_STATUS:
         const filterArrFUNC = () => {
            if (action.id === 1) {
               return state.tasks.filter(item => item.activeStatus === true)
            } else if (action.id === 2) {
               return state.tasks.filter(item => item.activeStatus === false)
            } else if (action.id === 3) {
               return state.tasks.filter(item => item.comleteStatus === true)
            } else if (action.id === 0) {
               return state.tasks
            }
         };
         return {
            ...state, filterArr: filterArrFUNC()
         };
      case INPUT_SEARCH_VALUE:
         const SearchIndex = (item: any): boolean => {
            return item.message.indexOf(state.InputValue) > -1 ? true : false
         }
         const inputSearchFUNC = () => {
            return state.tasks.filter(item => SearchIndex(item))
         }
         return {
            ...state,
            filterArr: inputSearchFUNC(),
         };
      case COMPLETE_STATUS:
         const completeStatus = () => {
            const findItemArray = state.tasks.find(item => item.id === action.id);
            const findIndexItemArray = state.tasks.findIndex(item => item.id === action.id);

            if (findItemArray != undefined && action.bool == true) {
               state.tasks[findIndexItemArray].comleteStatus = action.bool;
               state.tasks[findIndexItemArray].activeStatus = false;
               return [...state.tasks]
            } else {
               state.tasks[findIndexItemArray].comleteStatus = action.bool;
               state.tasks[findIndexItemArray].activeStatus = true;
               return [...state.tasks]
            }
         };
         return {
            ...state, tasks: completeStatus()
         };
      case DELETE_TASK:
         const NewArray = () => {
            const findItemArray = state.tasks.findIndex(item => item.id === action.TaskId); //* ищем елемент с нужным id и возвращаем его индекс
            state.tasks.splice(findItemArray, 1)
            return (
               [...state.tasks]
            )
         };
         const NewArray2 = () => {
            const findItemArray = state.filterArr.findIndex(item => item.id === action.TaskId); //* ищем елемент с нужным id и возвращаем его индекс
            state.filterArr.splice(findItemArray, 1)
            return (
               [...state.tasks]
            )
         }
         return {
            ...state,
            tasks: NewArray(),
            filterArr: NewArray2(),
         };
      default:
         return (state);

   }
}

export default StoreReducer;