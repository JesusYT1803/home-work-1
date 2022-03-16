import Profile from './components/classComponents/Profile'
// import Profile from "./components/functionalComponents/Profile";

function App() {
	return <div>
		<Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
	</div>;
}

export default App;