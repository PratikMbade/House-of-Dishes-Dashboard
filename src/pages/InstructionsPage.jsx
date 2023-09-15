
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { BsFillTrashFill} from "react-icons/bs";
import { useNavigate} from "react-router-dom";


const InstructionsPage = () => {
  
  const navigate = useNavigate();
  
  // Retrieve state data from the location object or initialize it if not present.

 
  const initialFormState = JSON.parse(localStorage.getItem("ingredients")) || {
 ingredients:""
  };

  const initialInstructionState = JSON.parse(localStorage.getItem("instructions"))|| [{instruction:""}]
 
  const [inputData, setInputData] = useState(initialInstructionState);
  const [ingredientsInput,setIngredientsInput] = useState(initialFormState)
 
   
  const saveFormDataToLocalStorage = (inputData) => {
    localStorage.setItem("instructions",JSON.stringify(inputData));
  }

  const saveIngradientToLocalStorage = (ingredientsInput) => {
    localStorage.setItem("ingredients",JSON.stringify(ingredientsInput));
  }

  
 const removeFromLocalStorage = (keyToRemove) => {
 // Get the current data from local storage
 const currentData = JSON.parse(localStorage.getItem("instructions")) || [];

 // Find the index of the item with the specified key
 const indexToRemove = currentData.findIndex((item) => item.id === keyToRemove);

 if (indexToRemove !== -1) {
   // Remove the item at the found index
   currentData.splice(indexToRemove, 1);

   // Update the local storage data with the modified array
   localStorage.setItem("instructions", JSON.stringify(currentData));
 }
 }
  
  

  const ingradientsHandler = (e) => {
    const { name, value } = e.target;
    setIngredientsInput({
      ...ingredientsInput,
      [name]: value,
    });
    saveIngradientToLocalStorage({
      ...ingredientsInput,
      [name]: value,
    });
}

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputData];
    list[index][name] = value;
    setInputData(list);
    saveFormDataToLocalStorage(list);
  };

  const addHandler = () => {
    setInputData([...inputData, { instruction: "" }]);
  };

  const removeHandler = (index) =>{
    const list = [...inputData];
    const keyToRemove = list[index].id;
    list.splice(index,1);
    setInputData(list)
    removeFromLocalStorage(keyToRemove); // Remove the specific field from local storage

  }



  const navigateToNextPage = () => {
    navigate("/dashboard", { state: { inputData } });
  };


 
  return (
    <div className="w-screen h-full font-primary flex justify-center items-center">
      <div className="bg-gradient-to-b from-zinc-500 to-black p-0.5 w-2/4 rounded-lg">
        <div className="bg-gradient-to-b from-zinc-950 to-black  items-center">
          <div className="flex  flex-col pt-10 px-10">
            <label htmlFor="" className="text-white text-xl font-semibold pb-2">
              Ingredients
            </label>

            <input
              type="text"
              name="ingredients"
              value={ingredientsInput.ingredients}
              onChange={ingradientsHandler}
              placeholder="eg. 1.Chicken, 2.Rice"
              className="border px-2 py-1 text-white text-lg  bg-black border-slate-500 rounded-md placeholder:italic outline-none focus:border-orange-400 "
            />
          </div>

          {/* instruction  */}
       
        <div className="pl-10 pt-4">
            <p className="text-white text-xl font-semibold">Instructions</p>
        </div>
          {inputData && inputData.map((item, index) => {
             const key = item.id || `instruction_${index}`;
            return (
              <div key={key} className="flex   pt-3 px-10">
                <div className="flex flex-col ">
                  <label className="text-white font-medium text-md">
                   Step {index +1}
                  </label>

                  <input
                    type="text"
                    name="instruction"
                    value={item.instruction}
                    placeholder={`Enter the step ${index +1}`}
                    onChange={(e) => changeHandler(e, index)}
                    className="border w-96 px-2 py-1 text-white text-lg  bg-black border-slate-500 rounded-md placeholder:italic placeholder:text-sm outline-none focus:border-orange-400 "
                  />
                </div>

                <div>
                { 
                  inputData.length -1 == index &&
                    <button onClick={addHandler} className="pt-8 pl-3">
                      <IoIosAddCircle className="text-green-500 text-2xl" />
                    </button>
                  }
                  {
                    inputData.length !== 1 &&
                    <button onClick={()=>removeHandler(index)} className="pt-8 pl-3">
                      <BsFillTrashFill className="text-red-500 text-2xl" />
                    </button>
                  }
                 
                </div>
              </div>
            );
          })}

          <div>
          <div className="flex items-center justify-center">
                  <button
                    onClick={navigateToNextPage}
                    className="get-started group relative px-8 py-3 overflow-hidden font-medium rounded-xl border border-yellow-800  text-xl md:text-2xl shadow-2xl shadow-[#ff910025] mr-8 my-8"
                  >
                    <div className="absolute inset-0 w-0 bg-[#ff910032] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className=" text-white" >Back</span>
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;