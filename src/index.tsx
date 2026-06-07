import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import SpotlightIndexPage from './pages/SpotlightIndexPage.tsx';
import VibeVedaPage from './pages/VibeVedaPage.tsx';
import OurArtistsPage from './pages/OurArtistsPage';
import OurInitiative from './pages/OurInitiative';
import ArtistProfilePage from './pages/ArtistProfilePage';
import ArtistProfileApiDataPage from './pages/ArtistProfileApiDataPage';
import ServicesForArtistsPage from './pages/ServicesForArtistsPage';
import ServicesForClientsPage from './pages/ServicesForClientsPage';
import AddArtistPage from './pages/AddArtistPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminGuard from './components/AdminGuard';
import IndividualArtistPage from "./pages/IndividualArtistPage";
import ArtistDetailsPage from "./pages/ArtistDetailsPage";
import ServicesPage from './pages/ServicesPage';

const router = createBrowserRouter(
      createRoutesFromElements(
            <Route path='' element={<App/>}>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path="/our-artists" element={<OurArtistsPage />} />
                  <Route path="/artist/:name" element={<ArtistProfilePage />} />
                  <Route path="/artist/:craftType/:name" element={<ArtistProfileApiDataPage />} />
                  <Route path="/our-services/services-for-artists" element={<ServicesForArtistsPage />} />
                  <Route path="/our-services/services-for-clients" element={<ServicesForClientsPage />} />
                  {/* Add VibeVedaPage route */}
                  <Route path="/our-initiative/vibeveda" element={<VibeVedaPage />} />

                  <Route path="/our-initiative/spotlight-index" element={<SpotlightIndexPage />} />
                  {/* <Route path="/individual-artist/:name" element={<IndividualArtistPage />} />
                  <Route path="/individual-artist/:name" element={<IndividualArtistPage />} /> */}
                  {/* legacy route left in place; new simpler path below */}
                  {/* generic resume‑style details page */}
                  <Route path="/ArtistDetails/:name" element={<ArtistDetailsPage />} />
                  {/* Add SpotlightIndexPage route */}
                  <Route path="/add-artist" element={<AddArtistPage />} />
                  <Route path="/admin/login" element={<AdminLoginPage />} />
                  <Route path="/admin" element={<AdminGuard><AdminDashboard/></AdminGuard>} />
            </Route>
      )
)

ReactDOM.createRoot(document.getElementById('root')!)
.render(  
      <React.StrictMode>
            <RouterProvider router={router}/>
      </React.StrictMode>
);