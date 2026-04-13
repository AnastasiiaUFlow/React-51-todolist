import { useState } from "react";
import { useDispatch } from "react-redux";
import React from 'react'

export default function TodoForm() {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Add new Task</button>
      </form>
      
    </div>
  )
}
