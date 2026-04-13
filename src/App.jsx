import { useState } from "react";

function App() {

	const [firstname, setFirstName] = useState("John Doe")

	const handleChange = (e) =>
	{
		setFirstName(e.target.value)
	}

	return  <form>
				<input type="text" name= "firstname" value={firstname} onChange={handleChange}/>
				{firstname}
			</form>;
}



export default App
