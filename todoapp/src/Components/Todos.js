import React from 'react';
import { Card,CardHeader, CardBody, Button} from 'reactstrap';

// <div className="collection-item" key={todo.id}>
//                     <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
//                 </div>




const Todos = ({todos, deleteTodo}) => {
    console.log(todos)
    const todoList=todos.length ? (
        todos.map(todo => {
            return(
                
                    <div className="row justify-content-center">
                        <div className="col col-md-9">
                            <Card className="text-black card-color m-1 ">
                                <CardBody className="card-color" key={todo.id}>
                                    {todo.content}
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col col-md-3 ">
                            <Button className="button-color" onClick={() => {deleteTodo(todo.id)}}>
                                    <span className="fa fa-check-circle fa-lg"></span> Done
                            </Button>
                        </div>
                    </div>
            )
        })
    ) : (
        <p className="center">You have no todo's Yayy!!</p>
    )
    return(
        <div className="row">
        <div className="col-md-8 mx-auto">
        <Card className="cardss">
            <CardHeader className="button-color text-white "><h4>Todo's</h4></CardHeader>
            <CardBody className=""> {todoList}</CardBody>
        </Card>
        </div>
        
           
        </div>
    )
}

export default Todos