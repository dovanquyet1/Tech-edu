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



// {login.mail !== null && login.name !== null ? (
      //   <Routes>
      //     <Route path="/login" element={<Login/>}/>
      //   </Routes>
        
      // ) : (
      //   <>
          
      //     <Header/>
      //     <Routes>
      //       <Route path="/" element={<Overview />} />
      //       <Route path="/class" element={<Class />} />
      //       <Route path="/timetable" element={<Timetable />} />
      //       <Route path="/news" element={<News />} />
      //       <Route path="/attend" element={<Attend />} />
      //       <Route path="/user" element={<User />} />
      //       <Route path="/logout" element={<Logout />} />
      //       <Route path="/class/detail" element={<Detail />} />
      //       <Route path="/news/apply" element={<Apply />} />
      //     </Routes>
      //   </>
      // )}

      
      // function PrivateRoute({ component: Component, path, ...rest }) {
<!-- //   let userId = localStorage.getItem("id");
//   return <Route {...rest}
//     render={(props) => {
//       return userId !== null && userId !== "" ? <Component {...props} /> : <Redirect to={{
//         pathname: "/login"
//       }} />
//     }}>
//   </Route>
// } -->


<div className="in4Class">
          <h5>Name: {dataClases[0].name}</h5>
          <p>ID: {dataClases[0].id}</p>
          <p>Teacher</p>
          <img src={dataClases[0].teacherImg} alt="" />
          <p>{dataClases[0].teacherName}</p>
        </div>



        {login.mail === null && login.name === null?
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
        :
        <>
        <Header/>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/class" element={<Class />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/news" element={<News />} />
            <Route path="/attend" element={<Attend />} />
            <Route path="/user" element={<User />} />
            <Route path="/class/detail/:id" element={<Detail/>}/>
            <Route path="/news/apply" element={<Apply />} />
          </Routes>
        </>
      }



      <>
        <HeaderTeacher/>
        <Routes>
          <Route path="/" element={<YourClasses/>}/>
          <Route path="/yourtimetable" element={<YourTimetable/>}/>
          <Route path="/uploadassignments" element={<UploadAssignments/>}/>
          <Route path="/uploaddocuments" element={<UploadDocuments/>}/>
          <Route path="/gradeassignment" element={<GradeAssignments/>}/>
          <Route path="/ingredientmarks" element={<IngredientMarks/>}/>
          <Route path="/studyplan" element={<StudyPlan/>}/>
        </Routes>
      </>

    
<input id="choose" type='button' value="Choose file" onClick={() => fileSeclect.current.click()} required/>

      button {
        border-radius: 10px;
        font-size: 20px;
        background-color: #6284ff;
        color: white;
        border: 0;
        padding: 0 30px;
      }
      button:hover {
        background-color: #0000aa;
      }


      <table>
                  <tr>
                    <td>Start</td>
                    <td>28/11/2022 00:00</td>
                  </tr>
                  <tr>
                    <td>End</td>
                    <td>30/11/2022 23:59</td>
                  </tr>
                </table>