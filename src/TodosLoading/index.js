import React  from 'react';
 import './TodosLoading.css'; 

function TodosLoading() {
  
  return (  
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>

  );
}

function Loading(){
  return(
    <p className='loading-text'>Cargando</p>
  );
}

export { TodosLoading,Loading};
