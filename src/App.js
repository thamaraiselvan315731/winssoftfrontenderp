import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer
} from "react-router-dom";
import { LoginPage } from "./pages/login/Login";
// import { HomePage } from "./pages/Home";
// import { ProfilePage } from "./pages/Profile";
// import { SettingsPage } from "./pages/Settings";
//import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";
import { ProtectedLayout } from "./components/ProtectedLayout"
import "./styles.css";
import { AuthLayout } from "./components/AuthLayout";
import { RegisterPage } from "./pages/register/register"
const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );



export const router = createBrowserRouter(

  createRoutesFromElements(

    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/*" element={<ProtectedLayout />}>
        {/* <ColorModeContext.Provider value={colorMode}> */}


      </Route>
    </Route>
  )
);

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);



//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               {/* <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} /> */}
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               {/* <Route path="/geography" element={<Geography />} /> */}
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }