
 import { RecoilRoot } from "recoil"
//  import { CharacterCounter } from "./CharacterCounter"
import { FromBackend } from "./frombackend"

 const App=()=>{
          return (
		<RecoilRoot>
				Hellow 
				{/* <CharacterCounter/> */}
				<FromBackend/>
		</RecoilRoot>
	
	  )
}

export default App