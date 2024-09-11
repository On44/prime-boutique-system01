import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";
import Services from "./pages/Services";
import About from "./pages/AboutUs";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import Privacy Policy page
import Terms from "./pages/Terms"; // Import Terms of Service page
import RefundPolicy from "./pages/RefundPolicy"; // Import Refund Policy page
import Footer from "./components/Footer"; // Import Footer component
import Navbar from "./components/Navbar"; // Import Navbar component
import ProductPage from "./pages/Products";
import { CartProvider } from "./context/CartContext";
import MpesaPayment from "./pages/MpesaPayment"; // Import MpesaPayment component
import MasterCardPayment from "./pages/MasterCardPayment";
import PayPalPayment from "./pages/PayPalPayment";
import SearchResults from "./pages/SearchResults";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute component for protected routes
import { AuthProvider } from "./context/AuthContext"; // Auth context

function App() {
  return (
    <Router>
      <AuthProvider> {/* Add AuthProvider to wrap the app for authentication */}
        <CartProvider>
          <div className="App">
            <Navbar /> {/* Include Navbar component */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Private Routes for cart, checkout, and billing pages */}
              <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
              <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
              <Route path="/billing" element={<PrivateRoute><Billing /></PrivateRoute>} />

              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} /> {/* Add Privacy Policy route */}
              <Route path="/terms" element={<Terms />} /> {/* Add Terms of Service route */}
              <Route path="/refund" element={<RefundPolicy />} /> {/* Add Refund Policy route */}
              <Route path="/products" element={<ProductPage />} />
              <Route path="/mpesa-payment" element={<MpesaPayment />} /> {/* Add Mpesa payment route */}
              <Route path="/mastercard-payment" element={<MasterCardPayment />} />
              <Route path="/paypal-payment" element={<PayPalPayment />} />
              <Route path="/search-results" element={<SearchResults />} />
            </Routes>
            <Footer /> {/* Include Footer component */}
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
