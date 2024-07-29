import "./App.css";
import AccordionList from "./components/AccordionList";

function App() {
	return (
		<div className="max-w-[992px] w-screen m-auto bg-slate-200 h-dvh">
			<AccordionList>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</AccordionList>
		</div>
	);
}

export default App;
