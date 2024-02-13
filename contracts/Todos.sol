// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Todos {

    struct Todo {
        uint id;
        string name;
        string user;
        bool isDone;
    }
    Todo[] public ArrayTodo;

    function craetTodo(uint _id, string memory _name, string memory _user) external {
        Todo memory todo;
        todo.id = _id;
        todo.name = _name;
        todo.user = _user;

        ArrayTodo.push(todo);
    }

    function getTodo(uint _index) external view returns(string memory _name, uint _id, bool isDone, string memory _user) {
        Todo storage todo = ArrayTodo[_index];
        return (todo.name, todo.id, todo.isDone, todo.user);
    }
 
    function upDataTodo(uint _index, string memory _name, string memory _user, uint _id) external  {
        Todo storage todo = ArrayTodo[_index];
        todo.name = _name;
        todo.user = _user;
        todo.id = _id;
        ArrayTodo.push(todo);
    }
    
    
}