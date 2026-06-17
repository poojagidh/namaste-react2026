import UserClass from "./UserClass"

const About = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-3">About Us</h1>
                <p className="text-gray-500 max-w-3xl mx-auto">
                    Namaste React is a food discovery and ordering demo app built to practice modern React, routing,
                    state management, and component-driven UI design.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <article className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-gray-800 mb-2">Our Mission</h2>
                    <p className="text-sm text-gray-500">Make food ordering simple, fast, and delightful for everyone.</p>
                </article>
                <article className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-gray-800 mb-2">What We Build</h2>
                    <p className="text-sm text-gray-500">Reusable components, responsive layouts, and smooth UX interactions.</p>
                </article>
                <article className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-gray-800 mb-2">Tech Stack</h2>
                    <p className="text-sm text-gray-500">React, Redux Toolkit, React Router, Jest, and Testing Library.</p>
                </article>
            </section>

            <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Developer Profile</h2>
                <UserClass name={"Pooja (Class)"} location={"Indore (Class)"} />
            </section>
        </main>
    )
};

export default About;
