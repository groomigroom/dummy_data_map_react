router를 설치할 때는 npm install react-router-dom으로 하기
https://www.youtube.com/watch?v=vI-XtN_Zdfg&list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-&index=10
1분 57초부터 보기

import './App.css';
import Header_part from "./component/Header_part";
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header_part />
        <Routes>
          <Route #####exact path="/" element={<DayList />} />
          <Route path="/day#####/:day" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//v6 방식 찾아보기 route

DayList.js에
Day {day.day}를
<Link to={`/day${day.day}`}></Link>로 감싸기
그리고 가장 위에 import {Link} from "react-router-dom"; 써주기

Header_part.js에 
<a href="/">토익 영단어(고급)</a>를 a 태그 없애고,
<Link to="/">로 감싸는거로 바꿔주기
그리고 가장 위에 import {Link} from "react-router-dom"; 써주기


Day.js에
가장 상단에 import {useParams} from "react-router-dom"; 써주기

const wordList = dummy.words.filter(word => (word.day === day)); 바로 아래에다가

const a = useParams();
console.log(a);

const day = 3 없애고,
그자리에
/*const a = useParams(); 넣고,
그 아래에, const day = a.day; 넣기.*/

const {day} = useParams(); 넣기

그러고 나서 console.log(a); 없애기.

const wordList = dummy.words.filter(word => (word.day === day));를
const wordList = dummy.words.filter(word => word.day === Number(day));

////////

component 폴더에
EmptyPage.js

import {Link} from "react-router-dom";

export default function EmptyPage(){
	return (
		<>
			<h2>잘못된 접근입니다.</h2>
			<Link to="/">돌아가기</Link>
		</>
	);
}

App.js에

<Switch> 바로 위에
<Route>
	<EmptyPage />
</Route>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
