import React, {Component} from 'react';
import { Card,CardHeader, CardBody, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { deleteTodo } from '../Store/actions/todoActions'

// <div className="collection-item" key={todo.id}>
//                     <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
//                 </div>




class Todos extends Component {

    deleteTodo = (id) => {
        //console.log('id',id)
        this.props.deleteTodo(id);
      }
    //   handleClick = () => {
    //       console.log('delete',this.props)
    //       //
    //       //this.props.history.push('/')
    //   }
    render() {
        
    const {todos}=this.props
    //console.log('updated',todos)
    const todoList=todos.length ? (
        todos.map(todo => {
            return(
                
                    
                    
                        <Card className="text-black card-color m-1 " key={todo.id}>
                                <div className="row">
                                    <div className="col-md-9 ">
                                        <CardBody className="card-color" >
                                            {todo.content}
                                        </CardBody>
                                    </div>
                                    
                                    <div className="col-md-2 offset-md-12 m-3">
                                        <Button className="button-color" onClick={() => this.deleteTodo(todo.id)} >
                                            <span className="fa fa-check-circle fa-lg"></span> Done
                                        </Button>
                                    </div>
                                </div>
                                
                                
                            
                        </Card>
                        
                    
            )
        })
    ) : (
        <p className="center"><b>You have no todo's Yayy!!</b></p>
    )

        return(
            <div className="row">
        <div className="col-md-8 mx-auto">
        <Card className="cardss">
            <CardHeader className="button-color text-white "> 
                <h4><span><img src='images/notepad.png' height="40" width="40" alt='notepad' /></span> Todo's</h4> 
            </CardHeader>
            <CardBody> {todoList}</CardBody>
        </Card>
        </div>
        
           
        </div>
  
        )
    }
    
}

const mapStateToProps = (state) => {
     //console.log('my state',state)
     return{
         todos: state.add.todos
     }
 }

  const mapDispatchToProps = (dispatch) => {
   return {
       deleteTodo:(id) => dispatch(deleteTodo(id))
   }   
  }

export default connect(mapStateToProps,mapDispatchToProps)(Todos)

