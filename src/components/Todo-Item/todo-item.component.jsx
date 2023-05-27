const TodoItem = ({ todo, onClickedHandler }) => {
    const { id, txt, edited, completed } = todo
    const { onDeleteClicked, onEditClicked, onCompletedClicked } = onClickedHandler;

    return (
        <li className="bg-sky-400 mb-3 last:mb-0 p-2 rounded-md flex justify-between" id={id}>
            <div className="text-xl text-white" contentEditable={edited}>{txt}</div>

            <div className="flex gap-3"> 
                <button type="button"
                    className="text-white text-md rounded-md p-1 bg-red-500"
                    onClick={onDeleteClicked}
                >
                    Delete
                </button>
                <button type="button"
                    className="text-white text-md rounded-md p-1 bg-yellow-500"
                    onClick={onEditClicked}
                >
                    { 
                        edited ? 'Editing' : 'Edit'
                    }
                </button>

                <button type="button"
                    className="text-white text-md rounded-md p-1 bg-green-700"
                    onClick={onCompletedClicked}
                >
                    {completed ? '✔': 'Complete'}
                </button>
            </div>
        </li>
    );
}

export default TodoItem;