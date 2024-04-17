import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

import Header from "./components/Header/Header";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="content">
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<h1>Lazy Loading...</h1>}>
								<HomePage />
							</Suspense>
						}
					/>

					<Route
						path="/menu"
						element={
							<Suspense fallback={<h1>Lazy Loading...</h1>}>
								<MenuPage />
							</Suspense>
						}
					/>
					<Route
						path="/posts"
						element={
							<Suspense fallback={<h1>Lazy Loading...</h1>}>
								<PostsPage />
							</Suspense>
						}
					/>
					<Route
						path="/auth"
						element={
							<Suspense fallback={<h1>Lazy Loading...</h1>}>
								<AuthPage />
							</Suspense>
						}
					/>
					<Route
						path="/order/new"
						element={
							<Suspense fallback={<h1>Lazy Loading...</h1>}>
								<OrderPage />
							</Suspense>
						}
					/>
					<Route
						path="/cart"
						element={
							<Suspense fallback={<h1>Lazy Loading...</h1>}>
								<CartPage />
							</Suspense>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
