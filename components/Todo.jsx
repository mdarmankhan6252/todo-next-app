const Todo = ({ todo, i, deleteTodo, completeTodo }) => {

   console.log(todo);
   const { _id, title, description, isCompleted, createdAt,  } = todo;
   return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {i + 1}
         </th>
         <td className={`px-6 py-4 ${isCompleted ? 'line-through' : ''}`}>
            {title}
         </td>
         <td className={`px-6 py-4 ${isCompleted ? 'line-through' : ''}`}>
            {description.slice(0, 40)}
         </td>
         <td className="px-6 py-4">
            {isCompleted ? 'Completed' : 'pending'}
         </td>
         <td className="px-6 py-4 space-x-2">
            <button onClick={() => deleteTodo(_id)} className="py-2 px-4 bg-red-500 text-white cursor-pointer">Delete</button>
            <button disabled={isCompleted} onClick={() => completeTodo(_id)} className="py-2 px-4 bg-green-500 text-white cursor-pointer disabled:bg-green-500/25 disabled:cursor-not-allowed">Done</button>
         </td>
      </tr>
   );
};

export default Todo;