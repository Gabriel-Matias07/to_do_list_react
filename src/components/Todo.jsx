const Todo = ({ todo }) => {
    return (
            <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">
                ({todo.category})
              </p> {/* Categoroa entre parenteses */}
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
    );
}

export default Todo;