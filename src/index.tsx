import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import SpotlightIndexPage from './pages/SpotlightIndexPage';
import VibeVedaPage from './pages/VibeVedaPage';
import OurArtists from './pages/OurArtistsPage';
import AllArtistsPage from './pages/AllArtistsPage';
import ArtistProfilePage from './pages/ArtistProfilePage';
import ServicesForArtistsPage from './pages/ServicesForArtistsPage';
import ServicesForClientsPage from './pages/ServicesForClientsPage';
import AddArtistPage from './pages/AddArtistPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminGuard from './components/AdminGuard';
import IndividualArtistPage from "./pages/IndividualArtistPage";
import ArtistDetailsPage from "./pages/ArtistDetailsPage";

const router = createBrowserRouter(
      createRoutesFromElements(
            <Route path='' element={<App/>}>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path="/our-artists" element={<AllArtistsPage />} />
                  <Route path="/all-artists" element={<OurArtists />} />
                  <Route path="/artist/:name" element={<ArtistProfilePage />} />
                  <Route path="/services-for-artists" element={<ServicesForArtistsPage />} />
                  <Route path="/services-for-clients" element={<ServicesForClientsPage />} />
                  {/* Add VibeVedaPage route */}
                  <Route path="/vibeveda" element={<VibeVedaPage />} />
                  <Route path="/individual-artist/:name" element={<IndividualArtistPage />} />
                  {/* legacy route left in place; new simpler path below */}
                  {/* generic resume‑style details page */}
                  <Route path="/ArtistDetails/:name" element={<ArtistDetailsPage />} />
                  {/* Add SpotlightIndexPage route */}
                  <Route path="/spotlight-index" element={<SpotlightIndexPage />} />
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