import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import HomePage from './routes/HomePage'
import JourneysPage from './routes/JourneysPage';
import StationsPage from './routes/StationsPage';
import StationDetails from './routes/StationDetails';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AmplifyProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
          			<Route path="journeys" element={<JourneysPage /> } />
					<Route path="stations" element={<StationsPage /> } />
					<Route path='/station/:id' element={<StationDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
