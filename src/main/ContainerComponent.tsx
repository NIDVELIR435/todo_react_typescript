import { connect } from "react-redux";
import {
   addTaskAC, upgradeTextAC, deleteTaskAC,
   activeOrUnactiveTaskAC, completeStatusTaskAC,
   filterStatusAC, InputSearchValueAC
} from "../redux_store/store_reducer";
import funcContainer from './FuncComponent';


function mapStateToProps(store: any): unknown {
   return {
      value: store.store.InputValue,
      tasks: store.store.tasks,
      filterArr: store.store.filterArr,
   }
}

const ContainerComponent = connect(
   mapStateToProps, {
   upgradeTextAC, addTaskAC, deleteTaskAC,
   activeOrUnactiveTaskAC, completeStatusTaskAC,
   filterStatusAC, InputSearchValueAC,
})(funcContainer);

export default ContainerComponent;