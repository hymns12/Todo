import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Making A Todo Of List", function() {
  async function deployTodo() {
    const Todo = await ethers.getContractFactory("Todos");
    const todo = await Todo.deploy();

    return { todo }
  }

  describe("Making A Todo Of List", function () {
    it("Creating and updating Tod", async function () {
      const { todo } = await loadFixture(deployTodo);

      await Todo.creatingTodo(id, user, name, isDone);
      const name = await todo.getTodo();

      await Todo.upDataTodo();

      await Todo.bollChackTodo();

      await Todo.deleteTodo();

      expect(name).to.equal();
    })
  })
})